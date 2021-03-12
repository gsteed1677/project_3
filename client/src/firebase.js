import firebase from 'firebase/app'
import 'firebase/auth'
console.log(process.env.REACT_APP_FIREBASE_API_KEY )
const app = firebase .initializeApp({
    apiKey: "AIzaSyDjuz83t88hINTQ35vgO2_TgkE6ijTDy2E",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()

export default app