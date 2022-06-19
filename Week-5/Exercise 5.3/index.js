function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}
console.log(hasDuplicate('Sagar'));
