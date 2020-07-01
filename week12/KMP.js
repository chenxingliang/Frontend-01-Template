function find() {
    let table = new Array(pattern.length).fill(0);
    let k = 0;

    for (let j = 1; j < pattern.length; j++) {
        pattern[j] === pattern[k] ? k++ : k = 0;
        table[j] = k;
    }

    let j = 0;
    for (let i = 0; i < source.length; i++) {
        console.log(source[i], pattern[j]);
        if (source[i] === pattern[j]) j++;
        else {
            /*
            j = 0;
            if (source[i] === pattern[j]) j++;
            */
            while (j > 0 && source[i] !== pattern[j]) {
                j = table[j - 1];
            }
            if (source[i] === pattern[j]) j++;
            else j = 0;
        }

        if (j === pattern.length) return true;
    }
    return false;
}