
var address = {
    'longitude': 45435234,
    'latitude': 345934859,
    'street': 'thundorferstrasse',
    'zip': 8512,
    'city': 'St.gallen',
    'type': 'privat'
}

var app = {
    // Application Constructor
    initialize: function() {
        console.log('app.initialize()');
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log('onDeviceReady()');
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    helloworld: function(data){
        console.log('helloworld() Hello ' + data);
        console.log(address);
    }
};

app.initialize();
app.helloworld('World');