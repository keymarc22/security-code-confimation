import React from 'react';

const EndState = ({name, onReset}) => {
  return (
    <div>
      <h2>{name} ha sido eliminado</h2>

      <button onClick={() => {
        onReset();
      }}>Recuperar {name}</button>
    </div>
    )
}

export { EndState }