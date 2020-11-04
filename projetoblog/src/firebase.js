import app from 'firebase/app';
import 'firebase/database';
import  'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBgJfuGH9BcSiaKkAOtUAsQLQrxW0zMtt0",
    authDomain: "reactapp-53fd2.firebaseapp.com",
    databaseURL: "https://reactapp-53fd2.firebaseio.com",
    projectId: "reactapp-53fd2",
    storageBucket: "reactapp-53fd2.appspot.com",
    messagingSenderId: "841382590506",
    appId: "1:841382590506:web:4dedbf6cbc456e60806b53",
    measurementId: "G-KVF4XKDCH6"
};


class Firebase {
    constructor(){
        // Initialize Firebase
        app.initializeApp(firebaseConfig);

        this.app = app.database()
    }

    login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    async register(name, email, password) {
        await app.auth().createUserWithEmailAndPassword(email, password)

        const uid = app.auth().currentUser.uid;

        return app.database().ref('usuarios').child(uid).set({
            nome: name
        })
    }

    isInialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }
}

export default new Firebase();