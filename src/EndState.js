import React from 'react';

const EndState = ({name, setState, state}) => {
  return (
    <div>
      <h2>{name} ha sido eliminado</h2>

      <button onClick={() => {
        setState({
          ...state,
          deleted: false,
          confirmed: false
        })
      }}>Recuperar {name}</button>
    </div>
    )
}

export { EndState }