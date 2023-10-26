function solution(s) {
    const arr = s.split("");
    let answer = 0;
    
    for (let i=0; i<arr.length; i++) {
        if (validateArray(arr)) {
            answer++;
        };
        
        arr.push(arr.shift());
    }
    
    return answer;
}

function validateArray(arr) {
    const stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        const currentChar = arr[i];
        
        if (currentChar === "{" || currentChar === "(" || currentChar === "[") {
            stack.push(currentChar);
        } else {            
            if (stack.length === 0) {
                return false;
            }
            
            const lastOpenChar = stack.pop();
            
            if (
                (lastOpenChar === "{" && currentChar !== "}") ||
                (lastOpenChar === "(" && currentChar !== ")") ||
                (lastOpenChar === "[" && currentChar !== "]")
            ) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}