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

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 


function submit(argument) {
	var passwdstr=str_to_list(Base64.decode(document.getElementById("passwd").value));
	document.getElementById("passwd").value='';
	var list1=[],list2=[];
	document.getElementById("log").innerHTML+="正在处理，稍安勿躁<br>"
	for (var i=0;i<passwdstr.length;i++)
	{
		list2.push(passwdstr[i]);
		i++;
		list1.push(passwdstr[i]);
	}
	for (var i=0;i<list1.length;i++)
	{
		document.getElementById("passwd").value+=list1[i];
		document.getElementById("passwd").value+="<-->";
		document.getElementById("passwd").value+=list2[i];
		document.getElementById("passwd").value+="   ";
		if ((i%document.getElementById("entercount").value == 0 && i != 0) )
		{
			document.getElementById("passwd").value+="\n";
		}
	}
	
	
	
	console.log(done);
	document.getElementById("text").value=done;
	document.getElementById("log").innerHTML+="处理完成！<br>";
}