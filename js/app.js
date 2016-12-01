function handleClick(x){

	if(document.getElementById(x).value === 'Ready'){
		document.getElementById(x).src = "padRed.png";
		document.getElementById(x).value = 'Rec';
        //Record loop
        libLoop.CreateTrack(x);
	}
	else if(document.getElementById(x).value === 'Off' || document.getElementById(x).value ==='Rec'){
        document.getElementById(x).src = "padOrange.png";
        document.getElementById(x).value = 'On';
        //Play loop
    }
    else{
        document.getElementById(x).src = "padYellow.png";
        document.getElementById(x).value = 'Off';
        //pause loop
    }
}

function eraseLoop(x){
	document.getElementById(x).src = "padGreen.png";
	document.getElementById(x).value = 'Ready';
    //Erase loop
}

//document.getElementById("looper").onkeydown =


