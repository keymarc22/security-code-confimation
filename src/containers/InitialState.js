import React from "react";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";

const InitialState = ({ name, error, loading, value, onWrite, onCheck }) => {
  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor, escribe el codigo de seguridad</p>

      {error && !loading && <Error />}

      {loading && <Loading />}

      <input
        placeholder="Codigo de seguridad"
        value={value}
        onChange={(event) => {
          onWrite(event.target.value);
        }}
      />
      <button
        onClick={() => {
          onCheck();
        }}
      >
        Comprobar
      </button>
    </div>
  );
};

export { InitialState };
