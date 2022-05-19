import React from "react";
import { InitialState } from "./containers/InitialState";
import { EndState } from "./components/EndState";
import { ConfirmedState } from "./components/ConfirmedState";

const SECURITY_CODE = "paradigma";

const initialState = {
  value: "paradigma",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const reducerObject = (state, payload) => ({
  ERROR: {
    ...state,
    error: true,
    loading: false,
  },
  CHECK: {
    ...state,
    loading: true,
  },
  CONFIRM: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  DELETE: {
    ...state,
    deleted: true,
  },
  RESET: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
  WRITE: {
    ...state,
    value: payload
  }
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        dispatch({
          type: state.value === SECURITY_CODE ? "CONFIRM" : "ERROR",
        });
      }, 3000);
    }
  }, [state.loading]);

  if (state.confirmed && !state.deleted && !state.error) {
    return (
      <ConfirmedState
        name={name}
        onDelete={() => {
          dispatch({ type: "DELETE" })
        }}
        onReset={() => {
          dispatch({ type: "RESET" })
        }}
      />
    );
  } else if (state.deleted && state.confirmed && !state.error) {
    return <EndState name={name} onReset={() => {
      dispatch({ type: "RESET" })
    }} />;
  } else {
    return (
      <InitialState
        name={name}
        error={state.error}
        loading={state.loading}
        value={state.value}
        onWrite={dispatch}
        onCheck={() => {
          dispatch({ type: "CHECK" })
        }}
      />
    );
  }
}

export { UseReducer };
