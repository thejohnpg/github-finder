import React from 'react';
import './../App.css';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';

import './container.css'


class Container extends React.Component {
        constructor() {
            super();
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);

            this.state = {
                usergithub: [],
                userfind: [],
                userurl: [],
                imgavatar: [],
                public_repos: []
            }
        }

        
        componentDidMount() {
            
          }
          
        

        handleSubmit(event) {
            event.preventDefault();
            fetch(`https://api.github.com/users/${this.state.usergithub}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                    }
            })
              .then(data => data.json())
              .then(data => this.setState({ 
                  userfind: data.login,
                  userurl: data.html_url,
                  imgavatar: data.avatar_url,
                  public_repos: data.public_repos
                 }));
              console.log(this.state.usergithub)
        }

        handleChange(event) {
            event.preventDefault();
            this.setState({usergithub: event.target.value});
          }
    

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <Grid item xs={12}>

                        <TextField
                        id="standard-name"
                        label="GitHub Username"
                        className=""
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="@user"
                        />

                        <Button 
                        type="submit"
                        variant="contained" 
                        color="primary" 
                        className="btnAdd">
                        Buscar
                        </Button>
                        <h4> { this.state.userfind } </h4>
                        <h4> { this.state.userurl } </h4>
                        <h4> {`Repositórios Públicos ${this.state.public_repos}` } </h4>
                        <img
                        className="imgAvatarGithub"
                        src={ 
                            this.state.imgavatar 
                        }/>
                        

                    </Grid>
                </form>
                );
            }
        }
    


    export default Container
        
    

