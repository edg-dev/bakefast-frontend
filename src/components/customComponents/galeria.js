import React from 'react'

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
            <button onClick={this.handleClick}>
                Visualizar Galeria
            </button>
        );
    }
}
