import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0srMJSwNlbfTqkLcJCXWjiPyjFq1sPCA",
  authDomain: "portfolio-34970.firebaseapp.com",
  projectId: "portfolio-34970",
  storageBucket: "portfolio-34970.appspot.com",
  messagingSenderId: "325450451228",
  appId: "1:325450451228:web:22451034ba575ca492d2d9",
  measurementId: "G-ZK03JYEV7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
