function debounce(func, wait, options) {
	var lastArgs,
		lastThis,
		maxWait,
		result,
		timerId,
		lastCallTime,
		lastInvokeTime = 0,
		leading = false,
		maxing = false,
		trailing = true;

	if (typeof func != 'function') {
		throw new TypeError(FUNC_ERROR_TEXT);
	}
	wait = toNumber(wait) || 0;
	if (isObject(options)) {
		leading = !!options.leading;
		maxing = 'maxWait' in options;
		maxWait = maxing
			? nativeMax(toNumber(options.maxWait) || 0, wait)
			: maxWait;
		trailing = 'trailing' in options ? !!options.trailing : trailing;
	}

	function invokeFunc(time) {
		var args = lastArgs,
			thisArg = lastThis;

		lastArgs = lastThis = undefined;
		lastInvokeTime = time;
		result = func.apply(thisArg, args);
		return result;
	}

	function leadingEdge(time) {
		// Reset any `maxWait` timer.
		lastInvokeTime = time;
		// Start the timer for the trailing edge.
		timerId = setTimeout(timerExpired, wait);
		// Invoke the leading edge.
		return leading ? invokeFunc(time) : result;
	}

	function remainingWait(time) {
		var timeSinceLastCall = time - lastCallTime,
			timeSinceLastInvoke = time - lastInvokeTime,
			timeWaiting = wait - timeSinceLastCall;

		return maxing
			? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
			: timeWaiting;
	}

	function shouldInvoke(time) {
		var timeSinceLastCall = time - lastCallTime,
			timeSinceLastInvoke = time - lastInvokeTime;

		// Either this is the first call, activity has stopped and we're at the
		// trailing edge, the system time has gone backwards and we're treating
		// it as the trailing edge, or we've hit the `maxWait` limit.
		return (
			lastCallTime === undefined ||
			timeSinceLastCall >= wait ||
			timeSinceLastCall < 0 ||
			(maxing && timeSinceLastInvoke >= maxWait)
		);
	}

	function timerExpired() {
		var time = now();
		if (shouldInvoke(time)) {
			return trailingEdge(time);
		}
		// Restart the timer.
		timerId = setTimeout(timerExpired, remainingWait(time));
	}

	function trailingEdge(time) {
		timerId = undefined;

		// Only invoke if we have `lastArgs` which means `func` has been
		// debounced at least once.
		if (trailing && lastArgs) {
			return invokeFunc(time);
		}
		lastArgs = lastThis = undefined;
		return result;
	}

	function cancel() {
		if (timerId !== undefined) {
			clearTimeout(timerId);
		}
		lastInvokeTime = 0;
		lastArgs = lastCallTime = lastThis = timerId = undefined;
	}

	function flush() {
		return timerId === undefined ? result : trailingEdge(now());
	}

	function debounced() {
		var time = now(),
			isInvoking = shouldInvoke(time);

		lastArgs = arguments;
		lastThis = this;
		lastCallTime = time;

		if (isInvoking) {
			if (timerId === undefined) {
				return leadingEdge(lastCallTime);
			}
			if (maxing) {
				// Handle invocations in a tight loop.
				clearTimeout(timerId);
				timerId = setTimeout(timerExpired, wait);
				return invokeFunc(lastCallTime);
			}
		}
		if (timerId === undefined) {
			timerId = setTimeout(timerExpired, wait);
		}
		return result;
	}
	debounced.cancel = cancel;
	debounced.flush = flush;
	return debounced;
}

function run(generator, ...args) {
	const generatorObj = generator(args);
	function resumeIter(prevRes) {
		const next = generatorObj.next(prevRes);
		if (next.done) {
			return Promise.resolve(next.value);
		}
		Promise.resolve(next.value).then((res) => {
			resumeIter(res);
		});
	}

	resumeIter();
}
async function main() {
	try {
		const response = await ajaxRequest('잘못된 URL', data);
		render(response.data);
	} catch (error) {
		console.error(error); // 에러 발생
	}
}

function ajaxRequest(url, data) {
	return {
		data: '안녕하세용',
	};
}

console.log(3, () => {
	console.log(4);
});

try {
	setTimeout(() => {
		throw new Error('Error!');
	}, 1000);
} catch (error) {
	console.error(error);
}

try {
	setTimeout(() => {
		try {
			throw new Error('Error!');
		} catch (error) {
			console.error(error);
		}
	}, 1000);
} catch (error) {
	console.error(error);
}

async function foo() {
	const a = await new Promise((resolve) => setTimeout(() => resolve(1), 3000));
	const b = await new Promise((resolve) => setTimeout(() => resolve(2), 2000));
	const c = await new Promise((resolve) => setTimeout(() => resolve(3), 1000));

	console.log(a, b, c); // 1 2 3
}

async function foo2() {
	const res = Promise.all([
		new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
		new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
		new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
	]);

	console.log(res); // 1 2 3
}
