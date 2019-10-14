import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import './User.css'

class User extends React.Component {
    constructor() {
        super(); 
}

render() {
    return (
                <div className="divConteudo">
                    <div className="divList">
                        <div className="imgList">
                                <Avatar alt={this.props.listaUsuarios.name} src={this.props.listaUsuarios.avatar_url} className="imgGitHub" />
                        </div>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.listaUsuarios.name}
                                <span className="spanSubTitle">  @{this.props.listaUsuarios.login }</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">{this.props.listaUsuarios.bio}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">{this.props.listaUsuarios.company}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">{this.props.listaUsuarios.location}</Typography>
                            
                            <div className="divBtn">
                            <IconButton aria-label="play/pause" target="_blank" a href={this.props.listaUsuarios.html_url} className="btnAcessar"> Acessar GitHub
                                <PlayArrowIcon className="" />
                            </IconButton>
                            </div>
                            
                            
                        </CardContent>
                        
                        

                    </div>                    
                </div>
                
        );
    }
}

   
export default User
        
    

