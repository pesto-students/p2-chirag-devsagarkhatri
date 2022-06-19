function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelMap = new Map();
    for (let alph of str.toLowerCase()) {
        if (vowels.includes(alph)) {
            let id = vowels.indexOf(alph);
            // console.log(id);
            if (vowelMap.has(id)) {
                vowelMap.set(id, vowelMap.get(id) + 1)
            } else {
                vowelMap.set(id, 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount('Sagar Khatri is a budding developer'));
