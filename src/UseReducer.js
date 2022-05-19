import React from "react";
import { InitialState } from "./containers/InitialState";
import { EndState } from "./components/EndState";
import { ConfirmedState } from "./components/ConfirmedState";

const SECURITY_CODE = "paradigma";

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
});

const actionTypes = {
  confirm: "CONFIRM",
  check: "CHECK",
  reset: "RESET",
  error: "ERROR",
  delete: "DELETE",
  write: "WRITE",
};

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onCheck = () => dispatch({ type: actionTypes.check })
  const onDelete = () => dispatch({ type: actionTypes.delete });
  const onReset = () => dispatch({ type: actionTypes.reset });

  const onConfirm = () => {
    dispatch({
      type:
        state.value === SECURITY_CODE ? actionTypes.confirm : actionTypes.error,
    });
  };

  const onWrite = ({target: { value }}) => {
    dispatch({
      type: "WRITE",
      payload: value,
    });
  };

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        onConfirm();
      }, 3000);
    }
  }, [state.loading]);

  if (state.confirmed && !state.deleted && !state.error) {
    return <ConfirmedState name={name} onDelete={onDelete} onReset={onReset} />;
  } else if (state.deleted && state.confirmed && !state.error) {
    return <EndState name={name} onReset={onReset} />;
  } else {
    return (
      <InitialState
        name={name}
        error={state.error}
        loading={state.loading}
        value={state.value}
        onWrite={onWrite}
        onCheck={onCheck}
      />
    );
  }
}

export { UseReducer };
