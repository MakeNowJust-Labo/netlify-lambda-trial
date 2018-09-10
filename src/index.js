import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

const nyanpass = async () => {
  const {data} = await axios.get('/.netlify/functions/nyanpass');
  alert(data.count);
};

const App = () => (
  <div>
    <button onClick={nyanpass}>nyanpass</button>
  </div>
);

const el = document.createElement('div');
document.body.append(el);

ReactDOM.render(<App />, el);
