function message() {
	 x = prompt("Welcome to my page , please enter your nick name");
	 document.getElementById('name').innerHTML = 'hello'+" "+x;
}

function goodd(){
	if (document.getElementById('good').checked){
		document.getElementById('go').style.display="inline";
		document.getElementById('ba').style.display="none";
		document.getElementById('b').removeAttribute('required');
		document.getElementById('a').removeAttribute('required');
		document.getElementById('av').style.display="none";
	
	}
	else{ 
			document.getElementById('go').style.display="none";
		}
}
function avgg(){
	if (document.getElementById('avg').checked){
		document.getElementById('av').style.display="inline";
        document.getElementById('a').setAttribute('required',true);
        document.getElementById('ba').style.display="none";
        document.getElementById('b').removeAttribute('required');
        document.getElementById('go').style.display="none";

	}
	else{ 
			document.getElementById('a').removeAttribute('required');
			document.getElementById('av').style.display="none";
		}

}
function badd(){
	if (document.getElementById('bad').checked){
		document.getElementById('ba').style.display="inline";
       document.getElementById('b').setAttribute('required',true);
       	document.getElementById('a').removeAttribute('required');
	    document.getElementById('av').style.display="none";
	    document.getElementById('go').style.display="none";

	}
	else{ 
			document.getElementById('b').removeAttribute('required');
			document.getElementById('ba').style.display="none";
		}

}

function printbb() {
	document.getElementById('printb').style.display="block";
}

function printaa(){
	document.getElementById('printa').style.display="block";

}