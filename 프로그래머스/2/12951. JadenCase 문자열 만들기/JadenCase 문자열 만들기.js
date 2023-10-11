function solution(s) {
    const arr = s.split(" ");
    
    console.log(arr);
    
    const answer = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    
    return answer.join(" ");
}