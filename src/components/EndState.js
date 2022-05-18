import React from 'react';

const EndState = ({name, onBack}) => {
  return (
    <div>
      <h2>{name} ha sido eliminado</h2>

      <button onClick={() => {
        onBack();
      }}>Recuperar {name}</button>
    </div>
    )
}

export { EndState }