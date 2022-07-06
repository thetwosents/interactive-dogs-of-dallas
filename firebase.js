import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCOTHeRQtARcXK7gu-AO5_pb2NMNMhPJTE",
  authDomain: "paw-pack-872f4.firebaseapp.com",
  databaseURL: "https://paw-pack-872f4-default-rtdb.firebaseio.com",
  projectId: "paw-pack-872f4",
  storageBucket: "paw-pack-872f4.appspot.com",
  messagingSenderId: "875611849576",
  appId: "1:875611849576:web:9bd552cbfa141a18a20cdd",
  measurementId: "G-X5RXQKM5RM"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

module.exports = {
  app,
  database
}