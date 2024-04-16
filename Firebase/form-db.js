const firebaseConfig = {
    apiKey: "AIzaSyBDbs7uw2DfjQk1xfnGR_mjhAcGdawYxVs",
    authDomain: "projectofinalweb.firebaseapp.com",
    projectId: "projectofinalweb",
    storageBucket: "projectofinalweb.appspot.com",
    messagingSenderId: "420840222473",
    appId: "1:420840222473:web:7f3c50aac77a1cfa6b2dd8"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const coleccionStr = "contactos";


const frm = document.querySelector("#frm");

const post = objeto => db.collection(coleccionStr).doc().set(objeto);

frm.addEventListener("submit", async event => {
    event.preventDefault();
    
    const newContacto = {
        nombre: frm.nombreContacto.value,
        email: frm.emailContacto.value,
        direccion: frm.temaContacto.value,
        correo: frm.msgContacto.value,
    };

    try{
        await post(newContacto);
        $('#successModal').modal('show');
        Limpiar();
    }
    catch(error){
        console.error(error);
        $('#errorModal').modal('show');
    }     
    
});

function Limpiar(){
    frm.reset();
}