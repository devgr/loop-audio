/*
*   Dev: AMP--> ToDo: implement functions for AudioLibrary.
*/
"use strict"

//AudioLibrary for looplib.ts
module AudioLibrary{
    //global AudioCtx
    export var AudioCtx;

    //TrackCollection Class
    export class TrackCollection{
        private Tracks: TrackCollectionClasses.Track[];
        private MixChannels: TrackCollectionClasses.MixChannel[];
        constructor(){
            AudioCtx = new AudioContext();
            this.Tracks = [];
            for(let i = 0; i < 16; i++){
                this.Tracks.push( new TrackCollectionClasses.Track());
            }
        }

        //Creates new track from given padNum.
        public CreateTrack( padNum : number){
            
        }

        //Plays the track contained in padNum
        public Play( padNum : number, startTime : number){
        }

        // plays and repeats selected pad
        public LoopPlay( padNum : number, startTime : number, endTime : number){

        }

        // Stops selected pad
        public Stop( padNum : number){

        }
    } //end of TrackCollection

    // Nested Class of TrackCollection
    module TrackCollectionClasses{
        
        //Track Class implementing AudioNode of TrackCollection
        export class Track implements AudioNode{
            private Regions : TrackClasses.Region[];

            constructor(){
                document.write( "created a new Track\n");   
            }

            //Deletes current Track
            public Delete(){

            }

            //Creates new Region
            public AddAudio(){

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

            }

            //
            public UnSetForRecording(){

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
                private buffer : AudioBuffer;
                private sourceNode : AudioBufferSourceNode;

                public AddContentFile( ArrayBuffer){

                }

                public Stop(){

                }

                public TrimRegion( newStart : number, newEnd : number){

                }

                public SplitRegion( position){

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
            } // end of SignalChain Module
        } // end of MixChannelClasses Module
    } // end of TrackCollectionClasses Module
} // end of AudioLibrary Module

//Testing
let test = new AudioLibrary.TrackCollection();
test.CreateTrack(1);
test.Play(1,0);