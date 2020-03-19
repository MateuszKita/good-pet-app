// @ts-ignore
import {API_KEY, AUTH_DOMAIN, DATABASE_URL} from "react-native-dotenv"
import {initializeApp} from "firebase";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL
};

const Firebase = initializeApp(firebaseConfig);

export default Firebase
