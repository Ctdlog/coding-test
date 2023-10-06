
var RecentCounter = function() {
    this.requests = []; // 요청을 저장할 배열
};

RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    
    const threshold = t - 3000;
    
    this.requests = this.requests.filter(request => request >= threshold);
    
    return this.requests.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */