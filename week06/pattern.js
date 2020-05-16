function pattern(pat, str) {
    const goBack = [ -1, 0];
    let pos = 2,
        cnd = 0;

    while (pos < pat.length) {
        if (pat[pos - 1] === pat[cnd]) {
            cnd++;
            goBack[pos] = cnd;
            pos++;
        } else if (cnd > 0) {
            cnd = goBack[cnd];
        } else {
            goBack[pos] = 0;
            pos++;
        }
    }

    let pIdx = 0,
        sIdx = 0;
    while (pIdx < pat.length && sIdx < str.length) {
        if (str[sIdx] === pat[pIdx]) {
            pIdx++;
            sIdx++;
        } else {
            sIdx -= goBack[pIdx];
            pIdx = 0;
        }
    }

    if (pIdx == pat.length) {
        return true;
    }

    return false;
}

let res = pattern('abc', 'abcabcabdabc');
console.log(res);