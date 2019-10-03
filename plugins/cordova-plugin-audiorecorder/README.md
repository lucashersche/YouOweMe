Audio Recorder Plugin for Cordova
==================

Author: James Grisdale

This plugin allows use of the native audio recorder features
It includes all of the features necessary to make an audio recording, although there is further work that can be done to this plugin to add more functionality.

## Including the feature in your application

This API can be installed from source or NPM. Installation from NPM is done through the following:

	cordova plugin add cordova-plugin-audiorecorder

Installation from source is the same but instead of the id ("cordova-plugin-audiorecorder"), use the file system path to the source plugin folder.

## Functions Involved in This Plugin (currently)

record() - Prepares the recorder and begins recording audio.

pause() - Pauses the recorder

reset() - Stops the recording

setOuput(String filename) - Takes a file path for the recording to be saved. Must be called before calling record the first time.

mediaState() - Returns the state of the recorder

	0 - Unprepared - All media resources have not been acquired.
	1 - Prepared - All media resources have been acquired. 
	2 - Started - Media is actively progressing. 
	3 - Paused - Media progress is interrupted and will resume from its current position. 
	4 - Stopped - Media progress is stopped. 
	Values are returned as a string.
	
duration() - The current duration of the recording (returns 0 if in an unprepared or stopped state). values are returned as a string


### Permissions

The record_audio permission will be added when the plugin is installed. You will likely also want to add the access_shared permission if you intend to save the files to a shared location on the filesystem. This permission is not added for you, since it may not be necessary for all applications.
	
```xml	
	<rim:permissions>
		<rim:permit>access_shared</rim:permit>
	</rim:permissions>
```

### Using the Extension in an Application

Before attempting to record, a file path for the recording must be set, this is easy:
```javascript
var file = "file:///accounts/1000/shared/voice/recording.m4a";
ommunity.audiorecorder.setOutput(file);
```
Parameter: file - The file path where you want to save the recording

To prepare the recorder and begin recording:
```javascript
community.audiorecorder.record();
```

If you wish to pause the recording, use:
```javascript
community.audiorecorder.pause();
```

To end and save your recording and free up the recorder resources
```javascript
community.audiorecorder.reset();
```

mediaState returns the state of the recording, for example so you know when it is recording or paused.
```javascript
if (community.audiorecorder.mediaState() == "2")
	community.audiorecorder.pause();//pause only if currently recording
```

duration can be called while the recording is being made to keep track of how long the recording is in milliseconds.
```javascript
document.write(community.audiorecorder.duration());//returns as a string
```


## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.