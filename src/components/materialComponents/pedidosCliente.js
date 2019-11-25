import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();
  const pedidos = props.pedidos;
  const status = props.status;
  let descStatus;
  let styleStatus;

  if(status === 0){ descStatus = 'Pedido Entregue'; styleStatus = { borderColor: 'rgb(14, 183, 46)', borderRadius: 20};}
  if(status === 1){ descStatus = 'Pedido Ativo'; styleStatus = { borderColor: '#00b4ffcf', borderRadius: 20};}
  if(status === 2){ descStatus = 'Pedido Cancelado'; styleStatus = { borderColor: 'red', borderRadius: 20};}

  return (
    
    <Box style={{ paddingBottom: '20px' }}>
       <Box border={10} style={styleStatus}>         
            <Paper className={classes.root}>

            {pedidos.map(produto =>         
                <Typography component="p">
                    {produto.nome} - {produto.quantidade}un.
                </Typography>
            )}

              <Typography component="p">
                {descStatus}
              </Typography>
            </Paper>
        </Box>
    </Box>

  );
}