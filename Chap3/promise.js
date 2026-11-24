const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolved('I completed succesffuly')
    reject('I failed');
  }, 500);
});

myPromise
  .then((done) => {
    console.log(done);
  })
  .catch((err) => {
    console.log(err);
  });
