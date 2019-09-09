function toBig(){
	var oBox = document.getElementById('box');
	oBox.style.width="200px";
	oBox.style.height="200px";
	oBox.style.background="red";
}

var oBox = document.getElementById('box');
oBox.onclick = toBig;