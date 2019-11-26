import React from 'react';

import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

function handleClick(idGaleria, nomeGaleria){
    localStorage.setItem('@bakefast/idGaleria', idGaleria);
    localStorage.setItem('@bakefast/nomeGaleria', nomeGaleria);
}

export default function padariaGaleria(props) {
  const padarias = props.padarias;

  return (
    <div>
        {padarias.map(padaria =>
            <Card id={padaria._id} style={{marginBottom: '30px', backgroundColor: '#ffc1076e'}}>
                <CardActionArea onClick={() => handleClick(padaria._id, padaria.nome)}>
                <Link to="/VisualizarGaleria/">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {padaria.nome}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {padaria.endereco.rua}, {padaria.endereco.numero}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {padaria.endereco.complemento} {padaria.endereco.bairro}
                        </Typography>

                        
                        <Typography variant="body2" color="textSecondary" component="p">
                            Telefone: {padaria.telefone}
                        </Typography>

                    </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        )}
    </div>
  );
}