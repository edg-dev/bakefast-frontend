import React from 'react'

import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

export default class Galeria extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        localStorage.setItem('@bakefast/idGaleria', this.props.idGaleria);
        localStorage.setItem('@bakefast/nomeGaleria', this.props.nomeGaleria);
        this.props.history.push('/VisualizarGaleria');
    }

    render() {
        return (

            <Fab
            onClick={this.handleClick}
            variant="extended"
            size="small"
            color=""
            aria-label="add"
            >
            <NavigationIcon />
            Visualizar
            </Fab>
        );
    }
}
