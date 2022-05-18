import React from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";

const SECURITY_CODE = 'paradigma';

// js class
class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
      value: '',
    };
  }

  componentDidUpdate() {
    if(this.state.loading) {
      setTimeout(() => {
        this.setState({
          error: !(this.state.value === SECURITY_CODE), loading: false
        })
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el codigo de seguridad</p>

        {this.state.error && !this.state.loading && <Error />}

        {this.state.loading && <Loading />}

        <input placeholder="Codigo de seguridad" value={this.state.value} 
          onChange={(event) => {
            this.setState({value: event.target.value})
          }}
        />
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
