// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCNYHeCxpa2wADhMMlQkzb718G9_pdcGII',
  authDomain: 'pred-d2bf3.firebaseapp.com',
  projectId: 'pred-d2bf3',
  storageBucket: 'pred-d2bf3.appspot.com',
  messagingSenderId: '266819439674',
  appId: '1:266819439674:web:0731251dc9c00f4dc2f903'
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

const itemsCollection = db.collection('items')
const heroesCollection = db.collection('heroes')

export { auth, db, itemsCollection, heroesCollection }
