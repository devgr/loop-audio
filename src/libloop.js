/*
*   Dev: AMP--> ToDo: implement functions for AudioLibrary.
*/
"use strict";
//AudioLibrary for looplib.ts
var AudioLibrary;
(function (AudioLibrary) {
    //global AudioCtx
    AudioLibrary.AudioCtx;
    //TrackCollection Class
    var TrackCollection = (function () {
        function TrackCollection() {
            AudioLibrary.AudioCtx = new AudioContext();
            this.Tracks = [];
            for (let i = 0; i < 16; i++) {
                this.Tracks.push(new TrackCollectionClasses.Track());
            }
        }
        //Creates new track from given padNum.
        TrackCollection.prototype.CreateTrack = function (padNum) {
        };
        //Plays the track contained in padNum
        TrackCollection.prototype.Play = function (padNum, startTime) {
        };
        // plays and repeats selected pad
        TrackCollection.prototype.LoopPlay = function (padNum, startTime, endTime) {
        };
        // Stops selected pad
        TrackCollection.prototype.Stop = function (padNum) {
        };
        return TrackCollection;
    })();
    AudioLibrary.TrackCollection = TrackCollection; //end of TrackCollection
    // Nested Class of TrackCollection
    var TrackCollectionClasses;
    (function (TrackCollectionClasses) {
        //Track Class implementing AudioNode of TrackCollection
        var Track = (function () {
            function Track() {
                document.write("created a new Track\n");
            }
            //Deletes current Track
            Track.prototype.Delete = function () {
            };
            //Creates new Region
            Track.prototype.AddAudio = function () {
            };
            //Output to the provided MixChannels
            Track.prototype.OutputToMixChannnel = function (mixChannel) {
            };
            //Undos Output
            Track.prototype.UnOutputToMixChannel = function (mixChannel) {
            };
            //calculates the start of region and calls play function
            Track.prototype.Play = function (startTime) {
            };
            //stops playback on region
            Track.prototype.Stop = function () {
            };
            //creates MediaStreamAudioSourceNode
            Track.prototype.SetForRecording = function (stream) {
            };
            //
            Track.prototype.UnSetForRecording = function () {
            };
            return Track;
        })();
        TrackCollectionClasses.Track = Track; // end of TrackCollectionClasses.Track
        //Nested Classes of track
        var TrackClasses;
        (function (TrackClasses) {
            //Region Class of Track
            var Region = (function () {
                function Region() {
                }
                Region.prototype.AddContentFile = function (ArrayBuffer) {
                };
                Region.prototype.Stop = function () {
                };
                Region.prototype.TrimRegion = function (newStart, newEnd) {
                };
                Region.prototype.SplitRegion = function (position) {
                };
                return Region;
            })();
            TrackClasses.Region = Region; // end of Region
        })(TrackClasses || (TrackClasses = {})); // end of TrackClasses Module
        //MixChannel class of TrackCollection.
        var MixChannel = (function () {
            function MixChannel() {
            }
            MixChannel.prototype.ConnectToOutput = function (outputDevice) {
            };
            MixChannel.prototype.DisconnectOutput = function () {
            };
            MixChannel.prototype.OutputToMixChannel = function (mixChannel) {
            };
            MixChannel.prototype.UnOutputToMixChannel = function (mixChannel) {
            };
            return MixChannel;
        })();
        TrackCollectionClasses.MixChannel = MixChannel; // end of MixChannel
        //Nested classes of MixChannel
        var MixChannelClasses;
        (function (MixChannelClasses) {
            //SignalChain Class of MixChannel
            var SignalChain = (function () {
                function SignalChain() {
                }
                SignalChain.prototype.AddPlugin = function (pluginName, order) {
                };
                SignalChain.prototype.RemovePlugin = function (pluginId) {
                };
                SignalChain.prototype.ReorderPlugin = function (pluginIds) {
                };
                return SignalChain;
            })();
            MixChannelClasses.SignalChain = SignalChain; // end of SignalChain
            //Nested Class of SignalChain
            var SignalClasses;
            (function (SignalClasses) {
                //Plugin Class of MixChannel
                var Plugin = (function () {
                    function Plugin() {
                    }
                    return Plugin;
                })();
                SignalClasses.Plugin = Plugin; // end of Plugin
            })(SignalClasses || (SignalClasses = {})); // end of SignalChain Module
        })(MixChannelClasses || (MixChannelClasses = {})); // end of MixChannelClasses Module
    })(TrackCollectionClasses || (TrackCollectionClasses = {})); // end of TrackCollectionClasses Module
})(AudioLibrary || (AudioLibrary = {})); // end of AudioLibrary Module
//Testing
let test = new AudioLibrary.TrackCollection();
test.CreateTrack(1);
test.Play(1, 0);
