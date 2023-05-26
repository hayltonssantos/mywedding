import Background from '../../components/ComponentsCounter/Background/Background'
import Container from '../../components/ComponentsCounter/Container/Container'
import React from 'react';
import './Counter.css'

function Counter() {
  return (
    <div className="App">
      <Background/>
      <Container enableTop={undefined} enableMiddle={undefined} enableBottom={undefined}/>
    </div>
  );
}

export default Counter;
