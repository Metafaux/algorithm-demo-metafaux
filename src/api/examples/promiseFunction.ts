const wait = (ms: number) => {
  return new Promise((resolve, reject) => {
    if (ms > 1000) {
      reject('Too long');
    }
    setTimeout(() => {
      resolve('Successfully waited');
    }, ms);
  });
};

// catch method is to catch *network errors*
// only catches responses in 200 range

wait(1500)
  .then((result) => console.log('then > ', result))
  .catch((error) => console.log('catch > ', error));

const someWork = async () => {
  try {
    const result = await wait(500);
    console.log(result);
  } catch (ex) {
    console.log(ex);
  }
};

someWork();

export {};
