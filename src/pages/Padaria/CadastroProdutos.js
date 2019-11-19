import React from 'react';

import '../../App.css';
import api from '../../config/api';
import Galeria from '../../components/customComponents/galeria';

import { Form, Container, Row, Col } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default class CadastroProdutos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedFiles: []
        }
    }

    multipleFileChangeHandler = event => {
        this.setState({
            selectedFiles: event.target.files
        });
        console.log(event.target.files);
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData();
        const idPadaria = localStorage.getItem('@bakefast/idPadaria');

        let selectedFiles = this.state.selectedFiles;

        if(selectedFiles){
            for (let i = 0; i < selectedFiles.length; i++){
                data.append('galleryImage', selectedFiles[i], selectedFiles[i].name);
            }
        }

        api.post('upload/multiple', data, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en; q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }
        })
        .then(res => {
            if(200 === res.status){
                console.log(res);
                if(res.data.error){
                    if('LIMIT_FILE_SIZE' === res.data.error.code){
                        console.log('Limite máximo excedido');                           
                        this.shoot('Limite máximo: 2mb');

                    } else if ('LIMIT_UNEXPECTED_FILE' === res.data.error.code){
                        console.log('Limite máximo excedido');                           
                        this.shoot('Limite máximo: 6 imagens');

                    } else {
                        this.shoot('Ocoreu um erro ao enviar as imagens');
                    }
                } else {

                    let locationArray = res.data.locationArray;

                    api.post('galeria/', {
                        idPadaria: idPadaria,
                        imagens: locationArray
                    },
                    { headers: { 'Content-type': 'application/json' }})
                    .then(res => {
                        console.log(res);
                    }) 
                    .catch(error => {
                        console.log(error.response);
                    });

                    this.shoot('Upload concluído com sucesso');
                    this.props.history.push('/PerfilPadaria');
                }
            }
        })
        .catch(error => {
            this.shoot('Ocoreu um erro ao enviar as imagens');
        });   
    }

    shoot = (a) => {
        alert(a);
    }

    verGaleria = event => {
        event.preventDefault();
        this.props.history.push('/VisualizarGaleria');
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>
                                        <h4>Cadastre aqui imagens de seus produtos:</h4>
                                    <p>
                                        Quem nunca ficou com vontade de comer aquele pedaço de bolo só de ver o chocolate escorrendo pela massa? Nós entendemos muito bem,
                                        e por isso você pode colocar fotos de seus produtos, para que os clientes tambem fiquem com água na boca!
                                    </p>

                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="formImagem">
                                            <Form.Label>Imagem: </Form.Label>
                                            <br></br>
                                            <Button
                                                    variant="contained"
                                                    color="default"
                                                    startIcon={<CloudUploadIcon />}
                                            >
                                                <Form.Control type="file" multiple name="file" onChange={this.multipleFileChangeHandler}/>
                                            </Button>
                                        </Form.Group>
                                        <br></br>
                                        <div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"                                       
                                            endIcon={<Icon>send</Icon>}
                                            >
                                            Cadastrar
                                        </Button>
                                        </div>
                                    </Form>
                                    <br></br>


                                   <Galeria
                                    idGaleria={localStorage.getItem('@bakefast/idPadaria')} 
                                    nomeGaleria={localStorage.getItem('@bakefast/username')}
                                    history={this.props.history}
                                    onClick={() => this.verGaleria()}>                                  
                                   </Galeria>
                                   

                                </Col>
                                <Col></Col>
                            </Row>
                    </Container>
                </header>
            </div>
        );
    }
}
