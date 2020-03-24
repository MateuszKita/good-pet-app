// @ts-ignore
import {API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, MESSAGE_SENDER_ID, APP_ID} from "react-native-dotenv"
import {app, apps, initializeApp} from "firebase";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    senderId: MESSAGE_SENDER_ID,
    appId: APP_ID
};

let firebaseApp;

try {
    firebaseApp = apps.length > 0
        ? app()
        : initializeApp(firebaseConfig);
} catch (e) {
    console.log(e)
}

export default firebaseApp;
