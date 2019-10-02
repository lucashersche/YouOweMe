var address = {
    'longitude': 45435234,
    'latitude': 345934859,
    'street': 'thundorferstrasse',
    'zip': 8512,
    'city': 'St.gallen',
    'type': 'privat'
}

const schuldenList = document.querySelector('#schulden.list');

function renderSchulden(doc){
    let li = document.createElement('li');
    let nameSchuldner = document.createElement('span');
    let betrag = document.createElement('span');
    let fälligkeitsdatum = document.createElement('span');
}

var app = {
    // Application Constructor
    initialize: function () {
        console.log('app.initialize()');
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        //Toolbar
        document.addEventListener('prechange', function (event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyDOsfvKDt632U1rqdYpQRy9O1E6rpzRnMQ",
            authDomain: "youoweme-4eb28.firebaseapp.com",
            databaseURL: "https://youoweme-4eb28.firebaseio.com",
            projectId: "youoweme-4eb28",
            storageBucket: "youoweme-4eb28.appspot.com",
            messagingSenderId: "312190186855",
            appId: "1:312190186855:web:b529ace118d847df972bc2",
            measurementId: "G-4K2JXVNHR4"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        const db = firebase.firestore();
        //db.settings({ timestampsInSnapshots: true });
        db.collection('SchuldNr').get().then((snapshot) => {
            snapshot.docs.forEach(doc =>{
                renderSchulden(doc);
            });
        })
    },



    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        console.log('onDeviceReady()');
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    helloworld: function (data) {
        console.log('helloworld() Hello ' + data);
        console.log(address);
    }
};

app.initialize();
app.helloworld('World');
