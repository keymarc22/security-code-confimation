import React from 'react';

const ConfirmedState = ({name, state, setState}) => {
  return (
    <div>
      <h2>¿Seguro que quieres eliminar {name}?</h2>
      <button
        onClick={() => {
          setState({
            ...state,
            deleted: true,
          }
          )
        }}
      >Si, eliminar</button>
      <button
        onClick={() => {
          setState({
            ...state,
            deleted: false,
            confirmed: false
          })
        }}
      >No, volver</button>
    </div>
  )
}

export { ConfirmedState }