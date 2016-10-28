/*
*	TODO: 
*		(amp)	-- Implement CreateTrack() by 30/10/16
*
*/

/*
*	Web Audio Looper
*	File: looplib.ts
*	Version: very alpha
*/

//module AudioLibrary{

/*
*	Class: TrackCollection instantiates user code
*/
class TrackCollection {
	AudioCtx : AudioContext;
	Tracks : Track[]
	MixChannels : MixChannel[];

/*
*	TrackCollection Constructor:
*		create a AudioContext and initialize all 16 tracks for pads
*/
	constructor(){
		this.AudioCtx = new AudioContext();
		this.Tracks = [];
		for( let i = 0; i < 16; i++)
			this.Tracks.push( new Track());
	}

/*
*	Creates Track:
*/
	CreateTrack( PadNum : number){
		//testing sound my creating sound 
		Sound = this.AudioCtx.createOscillator();
		GainNode = this.AudioCtx.createGain();
		
	}

/*
*	Play:
*		Plays track at provided time
*/
	Play(startTime : number, padNum : number){
		//testing sound by creating sound
		Sound.connect(GainNode);
		GainNode.connect(this.AudioCtx.destination);
		GainNode.gain.value = 0.2;
		Sound.start();
	
		// call current Track Play
		this.Tracks[padNum].Play( startTime);
	
	}
	
/*
*	Stop:
*		stops all tracks
*/	
	Stop( padNum : number){

		// call current Track Stop
		this.Tracks[padNum].Stop();
	}

}

//* TO BE IMPLEMENTED
class Track implements AudioNode{
	Play(startTime){
	}

	Stop(){
	}
}
//*/

/* TO BE IMPLEMENTED
class Region implements AudioNode{
}
*/

//* TO BE IMPLEMENTED
class MixChannel implements AudioNode{
}
//*/

/* TO BE IMPLEMENTED
class SignalChain implements AudioNode{
}
*/

/* TO BE IMPLEMENTED
class Plugin implements AudioNode{
}
*/

//} // end of Module: AudioLibrary




let Test = new TrackCollection;
Test.CreateTrack(1);
Test.Play( 1, 1);