import React, {Component} from 'react';
import firebase from '../../firebaseConection'

class Listas extends Component {

    constructor(props){
        super(props);
        this.state = {
            lista: []
        }

        firebase.database().ref('usuarios').on('value', (snapshot) => {
            let state = this.state;
            state.lista = [];

            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    nome: childItem.val().nome,
                    idade: childItem.val().idade
                })
            });

            this.setState(state);
        })

        
    }
    
    render() {
        return(
            <div>
                {this.state.lista.map((item) => {
                    return(
                        <div key={item.key}>
                            <h2>ID: {item.key}</h2>
                            <h1>Olá {item.nome}</h1>
                            <h1>Idade: {item.idade}</h1>
                            <hr/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Listas