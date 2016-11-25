function togglePic(x){
    if(document.getElementById(x).value === 'Off'){
        document.getElementById(x).src = "padRed.png"
        document.getElementById(x).value = 'On'
    }
    else{
        document.getElementById(x).src = "padOrange.png"
        document.getElementById(x).value = 'Off'
    }
}

function eraseLoop(x){
	document.getElementById(x).src = "padGreen.png"
	document.getElementById(x).value = 'Off'
}



/*new Vue({
	el: '#looper',
	data: {
	    counter: 0
    },
	methods: {
		toggle: function (x) {
			if(x.className == "Off"){
				x.src = "padOn.png";
				x.className = "On";
			}
			else{
				x.src = "padOff.png";
				x.className = "Off";
			}
			return false;
		}
	}
})();*/
