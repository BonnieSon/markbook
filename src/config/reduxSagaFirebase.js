import firebaseConf from './firebase.conf';
import firebase from 'firebase'
import '@firebase/firestore' // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp(firebaseConf);
const firebaseAuth = firebaseApp.auth();

export const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp);