
var reverseStr = function(s, k) {
    const arr = s.split('');
    const n = arr.length;
    
    for (let i = 0; i < n; i += 2 * k) {
        let start = i;
        let end = Math.min(i + k - 1, n - 1);
        
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    return arr.join('');
};

const result = reverseStr("abcdefg", 2)
console.log(result);