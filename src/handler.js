'use strict';

module.exports.demo_lambda_fn = (event) => {
  const num = Math.random()*1000;
  console.log(num);
  return "Our Random number " + num;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
