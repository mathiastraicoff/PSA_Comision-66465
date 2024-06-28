import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBM2-Ud0ZmEDkiaiYUXXuVcl6S_bvt-VtU",
	authDomain: "psa-ecommerce-9fdc6.firebaseapp.com",
	projectId: "psa-ecommerce-9fdc6",
	storageBucket: "psa-ecommerce-9fdc6.appspot.com",
	messagingSenderId: "373570399440",
	appId: "1:373570399440:web:60886dc3eaae6e57b502d5",
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)