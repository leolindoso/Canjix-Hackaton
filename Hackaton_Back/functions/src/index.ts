import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp(functions.config().firebase);

const app = express()
const main = express()

main.use('MyApi', app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))

main.post('/api/login', (req, res) => {
    res.send(db.collection('LOGIN').add(req.body.data))
})
// main.post('/api/usuario', (req, res) => {
//     res.send(db.collection('USUARIO').add(req.body.data))
// })
// main.post('/api/reporte', (req, res) => {
//     res.send(db.collection('REPORTE').add(req.body.data))
// })

main.get('/api/login', async (req, res) => {

    return await db.collection('LOGIN').get();
})

const db = admin.firestore();

export const webApi = functions.https.onRequest(main)
