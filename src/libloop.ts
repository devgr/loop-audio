/*
*   Dev: AMP--> ToDo: implement functions for AudioLibrary.
*/
"use strict"

//AudioLibrary for looplib.ts
module AudioLibrary{
    //global AudioCtx
    export let AudioCtx : AudioContext;
    export let constraints = { audio: true, video: false};

    //TrackCollection Class
    export class TrackCollection{
        private Tracks: TrackCollectionClasses.Track[];
        private MixChannels: TrackCollectionClasses.MixChannel[];

        /*
        *   Contructor()
        *       --initialize AudioCtx( AudioContext)
        */
        constructor(){
            try{
                console.log("Init audioContext|\n");
                AudioCtx = new AudioContext();
                console.log("Finished Init audioContext|\n");
            } catch(e){
                alert('Browser does not support Web Audio API');
            }
            console.log("Init Track\n");
            this.Tracks = [];
            for( let i = 0; i < 16; i++)
                this.Tracks.push( new TrackCollectionClasses.Track());
            console.log("finished Init Track|\n");
        }

        //Creates new track from given padNum.
        public CreateTrack( padNum : number){
            console.log("before navigator|\n");
            navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;
            console.log("attempting the gUM|\n");
            if (navigator.getUserMedia) {
            console.log('getUserMedia supported.');
            navigator.getUserMedia ( constraints,
                function(stream) {
                    let recordedAudio = [];
                    let recordingTime = 45000; //milliseconds

                    //plays sound in the background
                    let source = AudioCtx.createMediaStreamSource(stream);
                    source.connect(AudioCtx.destination);

                    console.log("creating mediaRecorder|\n");
                    let mediaRecorder = new MediaRecorder(stream);
                    console.log("created mediaRecorder...creating ondataavailable|\n");



                    function AudioDataFromInput(event){
                        try{
                                console.log("Recording in session");
                                recordedAudio.push(event.data);
                        } catch(err) {
                            console.log("Error in data input\n" + err);
                        }
                    }

                    /*
                        Onstop loops and plays audio after recording.
                    */
                    mediaRecorder.onstop = function () {
                        let audioBlob = new Blob(recordedAudio, { 'type': 'audio/ogg; codecs=opus' });
                        let audioURL = URL.createObjectURL(audioBlob);
                        let source1 = AudioCtx.createBufferSource();
                        source1.connect(AudioCtx.destination);
                        let aReq = new XMLHttpRequest();
                        aReq.open('GET', audioURL, true);
                        aReq.responseType = 'arraybuffer';
                        aReq.onload = function () {
                            AudioCtx.decodeAudioData(aReq.response, function (aBuf) {
                                source1.buffer = aBuf;
                                source1.start(0);
                                source1.loop = true;
                            }, function () {
                                console.log('The LoopPlay request failed.');
                            });
                        }
                        aReq.send();
                        console.log("Playing Audio");
                    }

                     //stops recording sound
                    let StopRecording = function(){
                        mediaRecorder.stop();
                        console.log("Stopped Recording");
                    }

                    mediaRecorder.ondataavailable = AudioDataFromInput;
                    console.log("Start mediaRecorder|\n");
                    mediaRecorder.start();

                    //stop recording after specified time
                    setTimeout( function(){
                        StopRecording()
                        },
                        recordingTime
                    );
                    console.log("Stopped Recording|\n");

                },
                function(err) {
                    console.log('The following gUM error occured: ' + err);
                }
            );
            } else {
            console.log('getUserMedia not supported on your browser!');
            }
        }

        //Plays All Track
        public Play(startTime : number){
            
        }

        // plays and repeats all pads
        public LoopPlay(startTime : number, endTime : number){

        }

        // Stops all pads
        public Stop(){

        }
        //Accesses Individual Tracks
        public Track( padNum : number) : TrackCollectionClasses.Track{
            return this.Tracks[padNum];
        }

    } //end of TrackCollection

    // Nested Class of TrackCollection
    module TrackCollectionClasses{
        
        //Track Class implementing AudioNode of TrackCollection
        export class Track implements AudioNode{
            private Regions : TrackClasses.Region[];

            constructor(){
            }

            //Deletes current Track
            public Delete(){

            }

            //Creates new Region
            public AddAudio(){
/*
                this.Regions = [];
                this.Regions.push( new TrackClasses.Region());
*/
            }

            //Output to the provided MixChannels
            public OutputToMixChannnel( mixChannel : MixChannel){

            }

            //Undos Output
            public UnOutputToMixChannel( mixChannel : MixChannel){

            }

            //calculates the start of region and calls play function
            public Play( startTime : number){
            }

            //stops playback on region
            public Stop(){

            }

            //creates MediaStreamAudioSourceNode
            public SetForRecording(stream){
                /*
                let inputSource = AudioCtx.createMediaStreamSource(stream);
                let mediaStream = new MediaStream();
                this.Regions.push(new TrackClasses.Region( inputSource, mediaStream));
                */
            }

            //x
            public UnSetForRecording(){

            }

            public Region( regionNumber){
                return this.Region[regionNumber];
            }

        } // end of TrackCollectionClasses.Track

        //Nested Classes of track
        module TrackClasses{

            //Region Class of Track
            export class Region{
                private index : number;
                private track : Track;
                private startPosition : number;
                private duration : number;
                private audioBuffer : any;
                private sourceNode : MediaStreamAudioSourceNode;
                private mediaRecorder : MediaRecorder;

                constructor( createdSource : MediaStreamAudioSourceNode, newMediaStream : MediaStream, audioBuf : any){
                    this.audioBuffer = audioBuf;
                    this.sourceNode = createdSource;
                    this.mediaRecorder = newMediaStream;
                    document.write("new region created");
                }

                public AddContentFile( ArrayBuffer){

                }

                public Stop(){

                }

                public TrimRegion( newStart : number, newEnd : number){

                }

                public SplitRegion( position){

                }

                get MediaRecorder(){
                    return this.mediaRecorder;
                }

                public SourceNode(){
                    return this.sourceNode;
                }

                public TrackBuffer(){
                    return this.audioBuffer;
                }
            } // end of Region
        } // end of TrackClasses Module

        //MixChannel class of TrackCollection.
        export class MixChannel implements AudioNode{
            private Effects : MixChannelClasses.SignalChain;

            public ConnectToOutput( outputDevice){

            }

            public DisconnectOutput(){

            }

            public OutputToMixChannel( mixChannel : MixChannel){

            }

            public UnOutputToMixChannel( mixChannel : MixChannel){

            }
        } // end of MixChannel

        //Nested classes of MixChannel
        module MixChannelClasses{

            //SignalChain Class of MixChannel
            export class SignalChain{
                private mixChannel : MixChannel;
                private Plugins : Plugin[];

                public AddPlugin( pluginName, order){

                }

                public RemovePlugin( pluginId){

                }

                public ReorderPlugin( pluginIds){

                }
            } // end of SignalChain

            //Nested Class of SignalChain
            module SignalClasses{

                //Plugin Class of MixChannel
                export class Plugin{
                    private static pluginName : string;
                    private pluginId : string;
                } // end of Plugin
            } // end of SignalChainClasses Module
        } // end of MixChannelClasses Module
    } // end of TrackCollectionClasses Module
} // end of AudioLibrary Module


console.log("Starting program|\n\n");
console.log("Commencing Program Audio Looper using Web Audio API|\n");
let Pad1 = new AudioLibrary.TrackCollection();
console.log( "Constructor has ended AudioContext initialized|\n");
let x = 1;
Pad1.CreateTrack(x);