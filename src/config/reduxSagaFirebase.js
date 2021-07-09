import firebaseConf from './firebase.conf';
import firebase from 'firebase'
import '@firebase/firestore' // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase'

export const firebaseApp = firebase.initializeApp(firebaseConf);
export const firebaseAuth = firebaseApp.auth();
// localhost 일때 Emulator 실행
if (window.location.hostname === "localhost") {
    firebaseAuth.useEmulator("http://localhost:9099");
}
export const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp);