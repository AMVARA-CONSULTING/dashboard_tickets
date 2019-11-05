function classifyByIndex(array, index) {
    return array.reduce((r, a) => {
        r[a[index]] = r[a[index]] || [];
        r[a[index]].push(a);
        return r;
    }, {});
}