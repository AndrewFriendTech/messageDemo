
window.onload=function(){
	document.getElementById("msg-send").addEventListener('click',makeRequest);
	setInterval(makeRequest,250);
  }


var request;

function makeRequest()
{
	console.log("made");
	request = new XMLHttpRequest();
	request.onreadystatechange = function()
	{
		if(request.readyState == 4 && request.status == 200)
		{
			document.getElementById('msg-box').innerHTML = request.responseText;
			//console.log(request);
		}
	};
	request.open('POST', 'post-message');
    request.send();

}

