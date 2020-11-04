import React, { Component } from 'react';
import firebase from 'firebase';
import { spawn } from 'child_process';

class ManipulandoDb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nomeInput: '',
      idadeInput:'',
      tokenInput:'',
      token: 'Carregando',
      nome:'',
      idade: ''
    };

    this.cadastrar = this.cadastrar.bind(this);

    let firebaseConfig = {
      apiKey: "AIzaSyBgJfuGH9BcSiaKkAOtUAsQLQrxW0zMtt0",
      authDomain: "reactapp-53fd2.firebaseapp.com",
      databaseURL: "https://reactapp-53fd2.firebaseio.com",
      projectId: "reactapp-53fd2",
      storageBucket: "reactapp-53fd2.appspot.com",
      messagingSenderId: "841382590506",
      appId: "1:841382590506:web:4dedbf6cbc456e60806b53",
      measurementId: "G-KVF4XKDCH6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    /* Olheiro (on = monitora, onde = busca uma vez)
    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    })
    */

    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

    firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });

  }

  cadastrar(e){
    // Inserindo um novo dado!
    //firebase.database().ref('token').set(this.state.tokenInput);
    //firebase.database().ref('token').set(this.state.tokenInput);
    //firebase.database().ref('usuarios').child(1).child('idade').set(this.state.tokenInput);
    //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput);
    //removendo um dado específico
    //firebase.database().ref('usuarios').child(1).child('cargo').remove();

    let usuarios = firebase.database().ref('usuarios');
    let chave = usuarios.push().key;

    if (this.state.nomeInput && this.state.idadeInput) {
      usuarios.child(chave).set({
        nome: this.state.nomeInput,
        idade: this.state.idadeInput
      })
    } else {
      alert('Todos os input devem serem preenchidos')
    }

    e.preventDefault()
  }


  render() {
    const { token, nome, idade } = this.state;
    return(
      <div>

        <form onSubmit={this.cadastrar}>
          <input type='text' value={this.state.nomeInput}
              onChange={(e) => this.setState({nomeInput: e.target.value})} /><br/>
          <input type='text' value={this.state.idadeInput}
              onChange={(e) => this.setState({idadeInput: e.target.value})} /><br/>
          <button type='submit'>Cadastrar</button>
        </form>

        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
      </div>
    );
  }
}

export default ManipulandoDb;