import * as qs from 'querystring';

import axios from 'axios';

const handler = async (event, context) => {
  const {data} = await axios.post(
    'http://nyanpass.com/add.php',
    qs.stringify({nyan: 'pass'}),
  );
  return {count: data.cnt};
};

exports.handler = (event, context, callback) => {
  handler(event, context)
    .then(
      result => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(result),
        });
      },
      error => callback(error),
    );
};
