import React from "react";

import api from "./../../api";
import User from "../User/User";

import "./Container.css";

class Container extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      usergithub: "",
      listaUsuarios: [],
      msgErro: "",
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.state.msgErro = "";
    try {
      if (this.state.usergithub == "") return;

      const response = await api.get(`/${this.state.usergithub}`);

      const {
        avatar_url,
        login,
        name,
        bio,
        company,
        location,
        html_url,
        node_id,
      } = response.data;

      let tempData = {
        avatar_url,
        login,
        name,
        bio,
        company,
        location,
        html_url,
        node_id,
      };

      this.state.listaUsuarios.push(tempData);
      this.state.usergithub = '';
      
      this.setState({ listaUsuarios: this.state.listaUsuarios });

    } catch (error) {
      this.setState({ msgErro: "O usuário pesquisado não consta no Github !" });
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ usergithub: event.target.value });
  }

  handleClean = event => {
    event.preventDefault();
    this.setState({ usergithub: '' });
    this.setState({ msgErro: '' });
    this.state.listaUsuarios = [];
    this.setState({ listaUsuarios: this.state.listaUsuarios });
  }

  render() {
    
    let dadosAtualizados = [];
    for (let i = 0; i < this.state.listaUsuarios.length; i++) {
      dadosAtualizados.push(
        <User key={i} listaUsuarios={this.state.listaUsuarios[i]} />
      );
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            className="inputFinderGithub"
            value={this.state.usergithub}
            onChange={this.handleChange}
            placeholder="@username"
          />
          <div className="errorMsg">{this.state.msgErro}</div>

          <div className="buttonGoAndClean">
            <button className="buttonAdd">Buscar</button>
            <button className="buttonClean" onClick={this.handleClean}>Limpar</button>
          </div>
          {dadosAtualizados}
        </form>
      </div>
    );
  }
}

export default Container;
