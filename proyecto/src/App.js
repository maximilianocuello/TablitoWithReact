
import React, {Component} from 'react';

import Form from './Form';
import FormRadio from './FormRadio';

class App extends Component {
  render() {
  return (
    <div className="app container">
      <div className='jumbotron'>
        <p className='lead text-center'>Tablito</p>
        <Form />
        <FormRadio />
      </div>
    </div>
  );
}
}
export default App;
