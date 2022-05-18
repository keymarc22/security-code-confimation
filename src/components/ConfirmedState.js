import React from 'react';

const ConfirmedState = ({name, onDelete, onBack}) => {
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
          onBack();
        }}
      >No, volver</button>
    </div>
  )
}

export { ConfirmedState }