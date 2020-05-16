function indexOf (str) {
    let i = 0;
    for (let item of str) {
        if (item == 'a') {
            return i;
        }
        i++;
    }
    return -1;
}