import React from 'react'

import Button from '@material-ui/core/Button';
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

            <Button onClick={this.handleClick} style={{color: 'blue'}}>
                Visualizar <NavigationIcon />
            </Button>
        );
    }
}
