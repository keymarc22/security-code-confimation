import React from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { InitialState } from "./InitialState";
import { EndState } from "./EndState";
import { ConfirmedState } from "./ConfirmedState";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  })

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        setState({
          ...state,
          error: !(state.value === SECURITY_CODE),
          loading: false,
          confirmed: true,
          value: ''
        })
        // setError()
        // setLoading(false);
      }, 3000);
    }
  }, [state.loading]);

  if (state.confirmed && !state.deleted && !state.error) {
    return(
      <ConfirmedState name={name} state={state} setState={setState}/>
    )
  } else if (state.deleted && state.confirmed && !state.error) {
    return (
      <EndState name={name} state={state} setState={setState}/>
    );
  } else {
    return (
      <InitialState name={name} state={state} setState={setState}/>
    );
  }
}

// named export
export { UseState };
