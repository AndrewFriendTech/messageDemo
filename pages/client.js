

window.onload=function(){
	document.getElementById("msg-send").addEventListener('click',postMessage);
	setInterval(pollMessagesFetch,1000);
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

async function pollMessagesFetch()
{
	fetch('poll-messages').then(res => res.json()).then(res => populateMessageBox(res));
	// req = await fetch('poll-messages');
	// string = await req.json();
	// console.log(string);
}

function populateMessageBox(messages)
{
	var content = "";
	messages.forEach(element => {
		content +=
		`<div class = "msg">
			<div class = "msg-body">${element.body}</div>
			<dic class = "msg-time">${generarteDateString(element.time)}</div>
		</div>`;
	});
	
	document.getElementById('msg-box').innerHTML  = content;
}

function generarteDateString(time)
{
	var string = "";
	var currentDate = new Date();
	var inputDate = new Date(time);
	const milsInADay = 86_400_000;
	 
	if ((currentDate - inputDate) /milsInADay > 7)
	{
		string = currentDate.getDate() + " " + currentDate.getHours() +":" + currentDate.getMinutes();
	}
	if ((currentDate - inputDate )/milsInADay > 1 && (currentDate - inputDate) /milsInADay < 7  )
	{
	    string = toDay(currentDate.getDay()) + " " + currentDate.getHours() +":" + currentDate.getMinutes();
	}
	else
	{
		string = currentDate.getHours() +":" + currentDate.getMinutes();
	}

	return string;

}

function toDay(number)
{
	var string;
	switch(number)
	{
		case 0:
			string = "Sunday";
			break;
		case 1:
			string = "Monday";
			break;
		case 2:
			string = "Tuesday";
		case 3:
			string = "Wednesday"
			break;
		case 4:
			string = "Thursday"
			break;
		case 5:
			string = "Friday"
			break;
		case 6:
			string = "Saturday"
			break;
	}
	return string;
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

