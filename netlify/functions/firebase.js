// netlify/functions/firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./tu-archivo-de-clave.json"); // 🔐 Aquí va tu JSON

if (!admin.apps.length) {
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
}

const db = admin.firestore();
module.exports = db;