function first() {
    console.log("fisrt function started");
    setTimeout(() => {
        console.log("first function running");
        return new Promise((res, rej) => {

        });
    }, 2000);
    console.log("first function ended");
    return "first value returned";
}

function second() {
    console.log("second function started");
    setTimeout(() => {
        console.log("second function running");
    }, 2000);
    console.log("second function ended")
    return "second value returned";
}

function third() {
    console.log("third function started");
    setTimeout(() => {
        console.log("third function running");
    }, 2000);
    console.log("third function ended")
    return "third value returned";
}

async function* series() {
    yield await first();
    yield await second();
    yield await third();
}


const it = series();
it.next();
it.next();
it.next();
