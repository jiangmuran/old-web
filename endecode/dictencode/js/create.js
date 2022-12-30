//字符串去重：
function quchong(str){
	var newStr="";
	for(var i=0;i<str.length;i++){
		if(newStr.indexOf(str[i])==-1){
			newStr+=str[i];
		}
	}
	return newStr;
}

//字符串转列表：
function str_to_list(stra){
	return stra.split("")
}

function list_to_str(lista){
	return lista.join("")
}

//删除字符串特定项：
function deletelist(lista,i){
	lista.splice(i,1);
	return lista;
}

function submit(argument) {
	
}

function appends(types) {
	if (types == "A~Z")
	{
		document.getElementById("have").value+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	if (types == "a~z")
	{
		document.getElementById("have").value+="abcdefghijklmnopqrstuvwxyz";
	}
	if (types == "0~9")
	{
		document.getElementById("have").value+="0123456789";
	}
	if (types == "teshu")
	{
		document.getElementById("have").value+="~`!@#$%^&*()_+-={}|:\"<>?[]\\;',./";
	}
}