function solution(people, limit) {
    people.sort((a, b) => a - b); // 사람들을 무게 오름차순으로 정렬
    
    let boatCount = 0; 
    let left = 0; 
    let right = people.length - 1; 

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++; 
            right--; 
        } else {
            right--;
        }
        
        boatCount++;
    }

    return boatCount;
}