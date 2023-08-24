/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writeIdx = 0;
    let readIdx = 0; 
    
    while (readIdx < chars.length) {
        let currentChar = chars[readIdx]; 
        let count = 0; 
        
        while (readIdx < chars.length && chars[readIdx] === currentChar) {
            readIdx++;
            count++;
        }
        
        chars[writeIdx] = currentChar;
        writeIdx++;
        
        if (count > 1) {
            let countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[writeIdx] = countStr[i];
                writeIdx++;
            }
        }
    }

    return writeIdx;
}
