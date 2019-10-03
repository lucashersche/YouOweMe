cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-audiorecorder/www/client.js",
        "id": "cordova-plugin-audiorecorder.client",
        "pluginId": "cordova-plugin-audiorecorder",
        "clobbers": [
            "community.audiorecorder"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-audiorecorder": "1.0.0"
}
// BOTTOM OF METADATA
});