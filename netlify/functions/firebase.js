const admin = require("firebase-admin");

if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_KEY);

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    });
}

const db = admin.firestore();
module.exports = db;