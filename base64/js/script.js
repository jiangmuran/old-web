function encode(){
	document.getElementById("inp").value=Base64.encode(document.getElementById("inp").value);
}
function decode(){
	document.getElementById("inp").value=Base64.decode(document.getElementById("inp").value);
}