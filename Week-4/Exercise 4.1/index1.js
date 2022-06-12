window.onload = () => {
  const button = document.getElementById("button");
  const text = document.getElementById("text");
  button.addEventListener("click", clickHandler);
};


class CustomPromise {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => { };

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }

  then(handleSuccess) {
    this.promiseChain.push(handleSuccess);

    return this;
  }

  catch(handleError) {
    this.handleError = handleError;

    return this;
  }

  onResolve(value) {
    let storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
      });

      return storedValue;
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

const getNumber = () =>
  new CustomPromise((res, rej) => {
    const randomNum = parseInt(Math.random() * 100, 10);
    const str =
      randomNum % 5 === 0
        ? "rejected number :-" + randomNum
        : "Resolved number :- " + randomNum;
    console.log(str)
    setTimeout(() => {
      if (randomNum % 5 === 0) {
        rej({ str, num: randomNum });
      } else
        res({ str, num: randomNum });
    }, randomNum * 10);
  });

const incrementBy = (originalValue, incrementQuantity = 1) => {
  return originalValue + incrementQuantity;
};

const clickHandler = () => {
  display({ str: "loading" });
  const numberPromise = getNumber();
  numberPromise
    .then((val) => { 
      let old = val.num; 
      val.num = incrementBy(val.num, 10); 
      val.str = val.str.replace(old, val.num); 
      console.log(val); 
      return val; 
    })
    .then(display)
    .catch(display);
};

const display = (content) => {
  if (this.text) {
    text.innerText = content.str;
  }
};
