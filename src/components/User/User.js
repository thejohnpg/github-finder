import React from "react";

import { MdBusiness, MdLocationOn, MdPerson } from "react-icons/md";

import "./User.css";

class User extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <div className="containerUser">
          <div className="imgList">
            <img
              alt={this.props.listaUsuarios.name}
              src={this.props.listaUsuarios.avatar_url}
              className="imgGitHub"
            />
          </div>

          <div className="card">
            <div className="headerCard">
              <MdPerson size={14} color="#fff" />

              <span className="nameGithub">
                {this.props.listaUsuarios.name}
              </span>

              <span className="loginGithub">
                @{this.props.listaUsuarios.login}
              </span>
            </div>

            <span className="cardUserBio">{this.props.listaUsuarios.bio}</span>

            <div className="companyCard">
              <MdBusiness size={14} color="#fff" />
              <span className="cardUserCompany">
                {this.props.listaUsuarios.company}
              </span>
              
              <MdLocationOn size={14} color="#fff" />
              <span className="cardUserLocation">
                {this.props.listaUsuarios.location}
              </span>
            </div>

            <div className="companyCard">
                <a href={this.props.listaUsuarios.html_url} target="_blank" rel="noopener noreferrer" className="buttonGo">
                    <span className="linkGitHub"> Acessar </span>
                </a>
            </div>
          </div>

        </div>
      </form>
    );
  }
}

export default User;
