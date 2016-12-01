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
                    let recordingTime = 5000; //milliseconds
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
                    //on media recorder stop asks to download api. written for testing
                    //need to implement into track and region classes
                    mediaRecorder.onstop = function () {
                        console.log("Download the audio file");
                        let audioBuf = new Blob(recordedAudio, {
                            type: 'audio/ogg; codecs=opus'
                        });
                        let AudioURL = URL.createObjectURL(audioBuf);
                        let a = document.createElement('a');
                        document.body.appendChild(a);
                        a.style = 'display: none';
                        a.href = AudioURL;
                        a.download = 'test.ogg';
                        a.click();
                        window.URL.revokeObjectURL(AudioURL);
                    };
                    mediaRecorder.ondataavailable = AudioDataFromInput;
                    console.log("Start mediaRecorder|\n");
                    mediaRecorder.start(recordingTime);
                    console.log("Stopped mediaRecorder|\n");
                    //mediaRecorder.stop();
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
                this.Regions = [];
                this.Regions.push(new TrackClasses.Region());
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
                constructor(createdSource, newMediaStream) {
                    /*
                    this.sourceNode = createdSource;
                    this.mediaRecorder = newMediaStream;
                    */
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
let trackCol = new AudioLibrary.TrackCollection();
console.log("Constructor has ended AudioContext initialized|\n");
//let x = 1;
//Pad1.CreateTrack(x);

function handleClick(x){

    if(document.getElementById(x).value === 'Ready'){
        document.getElementById(x).src = "padRed.png";
        document.getElementById(x).value = 'Rec';
        //Record loop
        trackCol.CreateTrack(x);

    }
    else if(document.getElementById(x).value === 'Off' || document.getElementById(x).value ==='Rec'){
        document.getElementById(x).src = "padOrange.png";
        document.getElementById(x).value = 'On';
        //Play loop
        //trackCol.Track(x).Play(0);
    }
    else{
        document.getElementById(x).src = "padYellow.png";
        document.getElementById(x).value = 'Off';
        //pause loop
        trackCol.Stop();
    }
}

function eraseLoop(x){
    document.getElementById(x).src = "padGreen.png";
    document.getElementById(x).value = 'Ready';
    //Erase loop

}

$(function($) {

    $(".knob").knob({
        change: function (value) {
            //console.log("change : " + value);
        },
        release: function (value) {
            //console.log(this.$.attr('value'));
            console.log("release : " + value);
        },
        cancel: function () {
            console.log("cancel : ", this);
        },
        /*format : function (value) {
         return value + '%';
         },*/
        draw: function () {

            // "tron" case
            if (this.$.data('skin') == 'tron') {

                this.cursorExt = 0.3;

                var a = this.arc(this.cv)  // Arc
                    , pa                   // Previous arc
                    , r = 1;

                this.g.lineWidth = this.lineWidth;

                if (this.o.displayPrevious) {
                    pa = this.arc(this.v);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                    this.g.stroke();
                }

                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                this.g.stroke();

                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();

                return false;
            }
        }
    });
});