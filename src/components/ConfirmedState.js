import React from 'react';

const ConfirmedState = ({name, onDelete, onReset}) => {
  return (
    <div>
      <h2>¿Seguro que quieres eliminar {name}?</h2>
      <button
        onClick={() => {
          onDelete();
        }}
      >Si, eliminar</button>
      <button
        onClick={() => {
          onReset();
        }}
      >No, volver</button>
    </div>
  )
}

export { ConfirmedState }