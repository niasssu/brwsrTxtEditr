let name = document.getElementById('name');
let fltp = document.getElementById('fileType')
let txtBody = document.getElementById('tux');


function download(filename, txt) {
	var fil = document.createElement('a');
	fil.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt));
	fil.setAttribute('download', filename);
	fil.style.display = 'none';
	document.body.appendChild(fil);
	fil.click();
	document.body.removeChild(fil);
}

function sound(audia, tip) {
	var snd = document.createElement('audio');
	snd.setAttribute('src', audia);
	snd.setAttribute('type', 'audio/' + tip);
	snd.style,display = 'none';
	document.body.appendChild(snd);
	snd.play();
}

function actio() {
download(name.value + '_' + fileNumber + fltp.value, txtBody.value);
sound('./hypergem_creation.ogg', 'ogg');
}


/*
messing with the Date() object down below ---------
*/

let now = new Date();
let dy = now.getDay().toString();
let yr = now.getFullYear().toString();
let mt = now.getMonth().toString();
let dt = now.getDate().toString();
let ymt = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let wkdy = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];


let st = new Date(now.getFullYear(),0,0);
let dayLength = 24*3600000;
let fileNumber = now - st;
let logTime = Math.floor((now - st)/dayLength);
console.log(fileNumber);

document.getElementById('time').innerHTML = `${wkdy[dy]}day, ${dt} ${ymt[mt]} ${yr}<br>${yr}.${logTime}`;