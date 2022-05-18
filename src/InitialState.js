import React from 'react';
import { Error } from './Error';
import { Loading } from './Loading';

const InitialState = ({name, state, setState}) => {
  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor, escribe el codigo de seguridad</p>

      {state.error && !state.loading &&
        <Error />
      }

      {state.loading && <Loading />}

      <input
        placeholder="Codigo de seguridad"
        value={state.value}
        onChange={(event) => {
          setState({
            ...state,
            value: event.target.value
          })
        }}
      />
      <button onClick={() => {
        setState({
          ...state,
          loading: true,
        })
      }}>Comprobar</button>
    </div>
  )
}

export { InitialState }