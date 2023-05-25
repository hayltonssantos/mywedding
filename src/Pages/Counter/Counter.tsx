import Background from '../../components/ComponentsCounter/Background/Background'
import Container from '../../components/ComponentsCounter/Container/Container'
import React from 'react';
import './Counter.css'

function Counter() {
  return (
    <div className="App">
      <Background/>
      <Container/>
    </div>
  );
}

export default Counter;
