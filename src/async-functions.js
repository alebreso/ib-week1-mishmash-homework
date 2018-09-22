function giveItBackLater(value, callback) {
  //setTimeout for the callback
  setTimeout(() => {
    callback(value)
  }, 1000);
}

function promiseToGiveItBackLater(value) {
  //return a new promise that contains 'value'
  //and resolve it with the callback function 'giveItBackLater'
  return new Promise((resolve, reject) => {
    giveItBackLater(value, resolve);
  });
}

function addSomePromises(somePromise) {
  //some promise is a promise that can be 'fullfilled or rejeccted'
  //and it contains the value of 'myString'
  //if somePromise is fullfilled then concat 'myString' twice
  return somePromise
    .then((value) => {
      return value + value;
    })
    //if somePromise is rejeccted then concat 'myString' three times'
    .catch((value) => {
      return value + value + value;
    });
}



module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}
