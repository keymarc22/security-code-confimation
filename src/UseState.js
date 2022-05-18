import React from "react";
import { InitialState } from "./containers/InitialState";
import { EndState } from "./components/EndState";
import { ConfirmedState } from "./components/ConfirmedState";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  const onConfirm = () => {
    setState({
      ...state,
      error: !(state.value === SECURITY_CODE),
      loading: false,
      confirmed: state.value === SECURITY_CODE,
      value: "",
    });
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: true,
    });
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  };

  const onDelete =() => {
    setState({
      ...state,
      deleted: true,
    })
  }

  const onBack = () => {
    setState({
      ...state,
      deleted: false,
      confirmed: false
    })
  }

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        onConfirm();
      }, 3000);
    }
  }, [state.loading]);

  if (state.confirmed && !state.deleted && !state.error) {
    return <ConfirmedState name={name} onDelete={onDelete} onBack={onBack}/>;
  } else if (state.deleted && state.confirmed && !state.error) {
    return <EndState name={name} onBack={onBack} />;
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

// named export
export { UseState };
