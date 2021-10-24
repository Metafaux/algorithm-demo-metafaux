interface Result {
  success: boolean;
  error?: any;
}

// React w/ Typescript 3, loc. 5979

let result: Result = { success: true };
setTimeout(() => {
  try {
    throw new Error('something went wrong');
  } catch (ex) {
    result.success = false;
    result.error = ex;
  }
}, 1000);
console.log(result);

export {};
