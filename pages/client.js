

window.onload=function(){
	document.getElementById("msg-send").addEventListener('click',postMessage);
	//setInterval(makeRequest,1000);
  }


function pollMessages()
{
	var xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			populateMessageBox(JSON.parse(xhr.response));		
		}
	
	
	}
	
	xhr.open('POST','poll-messages');
	xhr.send();

}

function populateMessageBox(messages)
{
	var content = "";
	messages.forEach(element => {
		console.log(element.body);
		console.log(Date(element.date));
		content +=
		`<div id = "msg">
			<div id = "msg-body">${element.body}</div>
			<dic id = "msg-time">${Date(element.date)}</div>
		</div>`;
	});
	
	document.getElementById('msg-box').innerHTML  = content;

	

}



function postMessage()
{
	var msg;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			console.log("send succsessfull");

		}
	};
	document.getElementById('msg-box').innerHTML = xhr.responseText;
	body = document.getElementById("msg-body").value;
	msg = { body: body, date: (new Date()).getTime() };
	xhr.open('POST', 'post-message');
	xhr.setRequestHeader("Content-Type", "application/json");
	console.log(msg);
    xhr.send(JSON.stringify(msg));
	
}

