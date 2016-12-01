/*
*   Dev: AMP--> ToDo: implement functions for AudioLibrary.
*/
"use strict";
//AudioLibrary for looplib.ts
var AudioLibrary;
(function (AudioLibrary) {
    AudioLibrary.constraints = { audio: true, video: false };
    //TrackCollection Class
    class TrackCollection {
        /*
        *   Contructor()
        *       --initialize AudioCtx( AudioContext)
        */
        constructor() {
            try {
                console.log("Init audioContext|\n");
                AudioLibrary.AudioCtx = new AudioContext();
                console.log("Finished Init audioContext|\n");
            }
            catch (e) {
                alert('Browser does not support Web Audio API');
            }
            console.log("Init Track\n");
            this.Tracks = [];
            for (let i = 0; i < 16; i++)
                this.Tracks.push(new TrackCollectionClasses.Track());
            console.log("finished Init Track|\n");
        }
        //Creates new track from given padNum.
        CreateTrack(padNum) {
            console.log("before navigator|\n");
            navigator.getUserMedia = navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia;
            console.log("attempting the gUM|\n");
            if (navigator.getUserMedia) {
                console.log('getUserMedia supported.');
                navigator.getUserMedia(AudioLibrary.constraints, function (stream) {
                    let recordedAudio = [];
                    let recordingTime = 45000; //milliseconds
                    //plays sound in the background
                    let source = AudioLibrary.AudioCtx.createMediaStreamSource(stream);
                    source.connect(AudioLibrary.AudioCtx.destination);
                    console.log("creating mediaRecorder|\n");
                    let mediaRecorder = new MediaRecorder(stream);
                    console.log("created mediaRecorder...creating ondataavailable|\n");
                    function AudioDataFromInput(event) {
                        try {
                            console.log("Recording in session");
                            recordedAudio.push(event.data);
                        }
                        catch (err) {
                            console.log("Error in data input\n" + err);
                        }
                    }
                    /*
                        Onstop loops and plays audio after recording.
                    */
                    mediaRecorder.onstop = function () {
                        let audioBlob = new Blob(recordedAudio, { 'type': 'audio/ogg; codecs=opus' });
                        let audioURL = URL.createObjectURL(audioBlob);
                        let source1 = AudioLibrary.AudioCtx.createBufferSource();
                        source1.connect(AudioLibrary.AudioCtx.destination);
                        let aReq = new XMLHttpRequest();
                        aReq.open('GET', audioURL, true);
                        aReq.responseType = 'arraybuffer';
                        aReq.onload = function () {
                            AudioLibrary.AudioCtx.decodeAudioData(aReq.response, function (aBuf) {
                                source1.buffer = aBuf;
                                source1.start(0);
                                source1.loop = true;
                            }, function () {
                                console.log('The LoopPlay request failed.');
                            });
                        };
                        aReq.send();
                        console.log("Playing Audio");
                    };
                    //stops recording sound
                    let StopRecording = function () {
                        mediaRecorder.stop();
                        console.log("Stopped Recording");
                    };
                    mediaRecorder.ondataavailable = AudioDataFromInput;
                    console.log("Start mediaRecorder|\n");
                    mediaRecorder.start();
                    //stop recording after specified time
                    setTimeout(function () {
                        StopRecording();
                    }, recordingTime);
                    console.log("Stopped Recording|\n");
                }, function (err) {
                    console.log('The following gUM error occured: ' + err);
                });
            }
            else {
                console.log('getUserMedia not supported on your browser!');
            }
        }
        //Plays All Track
        Play(startTime) {
        }
        // plays and repeats all pads
        LoopPlay(startTime, endTime) {
        }
        // Stops all pads
        Stop() {
        }
        //Accesses Individual Tracks
        Track(padNum) {
            return this.Tracks[padNum];
        }
    }
    AudioLibrary.TrackCollection = TrackCollection; //end of TrackCollection
    // Nested Class of TrackCollection
    var TrackCollectionClasses;
    (function (TrackCollectionClasses) {
        //Track Class implementing AudioNode of TrackCollection
        class Track {
            constructor() {
            }
            //Deletes current Track
            Delete() {
            }
            //Creates new Region
            AddAudio() {
                /*
                                this.Regions = [];
                                this.Regions.push( new TrackClasses.Region());
                */
            }
            //Output to the provided MixChannels
            OutputToMixChannnel(mixChannel) {
            }
            //Undos Output
            UnOutputToMixChannel(mixChannel) {
            }
            //calculates the start of region and calls play function
            Play(startTime) {
            }
            //stops playback on region
            Stop() {
            }
            //creates MediaStreamAudioSourceNode
            SetForRecording(stream) {
                /*
                let inputSource = AudioCtx.createMediaStreamSource(stream);
                let mediaStream = new MediaStream();
                this.Regions.push(new TrackClasses.Region( inputSource, mediaStream));
                */
            }
            //x
            UnSetForRecording() {
            }
            Region(regionNumber) {
                return this.Region[regionNumber];
            }
        }
        TrackCollectionClasses.Track = Track; // end of TrackCollectionClasses.Track
        //Nested Classes of track
        var TrackClasses;
        (function (TrackClasses) {
            //Region Class of Track
            class Region {
                constructor(createdSource, newMediaStream, audioBuf) {
                    this.audioBuffer = audioBuf;
                    this.sourceNode = createdSource;
                    this.mediaRecorder = newMediaStream;
                    document.write("new region created");
                }
                AddContentFile(ArrayBuffer) {
                }
                Stop() {
                }
                TrimRegion(newStart, newEnd) {
                }
                SplitRegion(position) {
                }
                get MediaRecorder() {
                    return this.mediaRecorder;
                }
                SourceNode() {
                    return this.sourceNode;
                }
                TrackBuffer() {
                    return this.audioBuffer;
                }
            }
            TrackClasses.Region = Region; // end of Region
        })(TrackClasses || (TrackClasses = {})); // end of TrackClasses Module
        //MixChannel class of TrackCollection.
        class MixChannel {
            ConnectToOutput(outputDevice) {
            }
            DisconnectOutput() {
            }
            OutputToMixChannel(mixChannel) {
            }
            UnOutputToMixChannel(mixChannel) {
            }
        }
        TrackCollectionClasses.MixChannel = MixChannel; // end of MixChannel
        //Nested classes of MixChannel
        var MixChannelClasses;
        (function (MixChannelClasses) {
            //SignalChain Class of MixChannel
            class SignalChain {
                AddPlugin(pluginName, order) {
                }
                RemovePlugin(pluginId) {
                }
                ReorderPlugin(pluginIds) {
                }
            }
            MixChannelClasses.SignalChain = SignalChain; // end of SignalChain
            //Nested Class of SignalChain
            var SignalClasses;
            (function (SignalClasses) {
                //Plugin Class of MixChannel
                class Plugin {
                }
                SignalClasses.Plugin = Plugin; // end of Plugin
            })(SignalClasses || (SignalClasses = {})); // end of SignalChainClasses Module
        })(MixChannelClasses || (MixChannelClasses = {})); // end of MixChannelClasses Module
    })(TrackCollectionClasses || (TrackCollectionClasses = {})); // end of TrackCollectionClasses Module
})(AudioLibrary || (AudioLibrary = {})); // end of AudioLibrary Module
console.log("Starting program|\n\n");
console.log("Commencing Program Audio Looper using Web Audio API|\n");
let Pad1 = new AudioLibrary.TrackCollection();
console.log("Constructor has ended AudioContext initialized|\n");
let x = 1;
Pad1.CreateTrack(x);
