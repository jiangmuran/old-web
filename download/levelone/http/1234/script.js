var c=0,d=0;
function a(argument) {
	c+=1;
}
function b(argument) {
	d+=1;
	if(c >= 10 && b >= 10)
	{
		document.getElementById("e").innerHTML="密钥：jishufhreolhufihdsuifhgiufkhgilkjshgnlkjfhn,下一关tips：./2345fast"
	}
}

function jump(argument) {
window.location="https://web.62148310.xyz/games";
}
if(window.localStorage.t1234 == 1)
{
	jump();
}
else
{
	setTimeout(jump,2000);
	window.localStorage.t1234=1;
}
