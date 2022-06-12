function add(...args) {
    return args.reduce((a, b) => a + b);
}

function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}
//Create a method called memoize such that:
const memoizeAdd = memoize(add);
//then calling...
console.time();
console.log("For Parameter (100,100) :- ", memoizeAdd(100, 100)); //returns 200
console.timeEnd();
console.time();
console.log("\nFor Parameter (100) :- ", memoizeAdd(100)); //returns 100
console.timeEnd();
console.time();
console.log("\nFor Parameter (100,200) :- ", memoizeAdd(100, 200)); //returns 300
console.timeEnd();
console.time();
console.log("\nFor Parameter (100,300,200) :- ", memoizeAdd(100, 300, 200)); //returns 600
console.timeEnd();
console.time();
console.log("\nFor Parameter (100,100) :- ", memoizeAdd(100, 100)); //returns 200 without computing
console.timeEnd();
