function solution(s, n) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if (charCode === 32) { 
            result += ' ';
            continue;
        }

        if (charCode >= 65 && charCode <= 90) {  
            charCode = ((charCode - 65 + n) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) { 
            charCode = ((charCode - 97 + n) % 26) + 97;
        }

        result += String.fromCharCode(charCode);
    }

    return result;
}