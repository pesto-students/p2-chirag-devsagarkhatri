window.onload = () => {
  const button = document.getElementById("button");
  const text = document.getElementById("text");
  button.addEventListener("click", clickHandler);
};

const CustomPromiseState = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

class CustomPromise {
  constructor(fn) {
    this.CustomPromiseState = CustomPromiseState.PENDING;
    this.resolver = this.resolver.bind(this);
    this.rejector = this.rejector.bind(this);
    this.thenFns = [];
    this.catchFn = null;
    fn(this.resolver, this.rejector);
  }

  resolver(resolvedData) {
    if (this.CustomPromiseState === CustomPromiseState.PENDING) {
      //   this.thenFn && this.thenFN(resolvedData);
      return;
    }
    this.CustomPromiseState = CustomPromiseState.RESOLVED;
    while (this.thenFns.length) {
      const thenFn = this.thenFns.shift();
      this.resolvedData = thenFn(this.resolvedData || resolvedData);
    }
  }

  rejector(rejectedData) {
    if (this.CustomPromiseState === CustomPromiseState.PENDING) {
      this.catchFn && this.catchFn(rejectedData);
    }
    this.CustomPromiseState = CustomPromiseState.REJECTED;
  }

  then(thenFn) {
    this.thenFn = thenFn;
    return this;
  }

  catch(catchFn) {
    this.catchFn = catchFn;
    return this;
  }
}

const getNumber = () =>
  new CustomPromise((res, rej) => {
    const randomNum = parseInt(Math.random() * 100, 10);
    const str =
      randomNum % 5 === 0
        ? "rejected number :-" + randomNum
        : "Resolved number :- " + randomNum;
    setTimeout(() => {
      if (randomNum % 5 === 0) {
        rej(str);
      }
      res(str);
    }, randomNum * 10);
  });

const incrementBy = (originalValue, incrementQuantity = 1) => {
  return originalValue + incrementQuantity;
};

const clickHandler = () => {
  display("loading");
  const numberPromise = getNumber();
  numberPromise
    .then((val) => incrementBy(val, 10))
    .then((val) => incrementBy(val, 20))
    .then((val) => incrementBy(val, 30))
    .then(display)
    .catch(display);
};

const display = (content) => {
  if (this.text) {
    text.innerText = content;
  }
};
