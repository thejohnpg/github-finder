import React from 'react';

import Alert from 'react-bootstrap/Alert'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import api from './../api'
import './container.css'
import User from './User'

class Container extends React.Component {
    constructor() {
        super();
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            usergithub:'',
            listaUsuarios:[],
            msgErro:''
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.state.msgErro = '';
        try{

            if (this.state.usergithub == '')
            return

            const response = await api.get(`/${this.state.usergithub}`)

            const { avatar_url, login, name, bio,  company, location, html_url, node_id } = response.data;

            let tempData = {
                avatar_url,
                login,
                name,
                bio,
                company,
                location,
                html_url,
                node_id,
                }


            this.state.listaUsuarios.push(tempData)

            this.setState({listaUsuarios: this.state.listaUsuarios})
            // não sei deveria usar isso rs =)

            console.log(this.state.listaUsuarios)
        }

        catch(error){
            this.setState({msgErro: "Errrou !"})
    }
}
    

    handleChange(event) {
        event.preventDefault();
        
        this.setState({usergithub: event.target.value});
    }

    

    

      render() {
        let dadosAtualizados = [];
        for (let i = 0; i < this.state.listaUsuarios.length ; i++) {
            dadosAtualizados.push(<User key={i} listaUsuarios={this.state.listaUsuarios[i]} />)
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid item xs={12}>

                    <TextField
                    id="standard-name"
                    label="GitHub Username"
                    className="standard-name"
                    value={this.state.usergithub}
                    onChange={this.handleChange}
                    placeholder="@username"
                    onClick={this.btnsubmit}
                    />

                    <Button 
                    type="submit"
                    variant="contained" 
                    color="primary" 
                    className="btnAdd">
                    Buscar
                    </Button>

                    { dadosAtualizados }

                    <div className="msgErro">
                        {this.state.msgErro}
                    </div>
   

                </Grid>


            </form>
            );
        }
        
    }

    
   
export default Container
        
    

