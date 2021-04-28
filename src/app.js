
//import {BOT_USERNAME, OAUTH_TOKEN, CHANNAL_NAME} from './constants';
//const tmi = require('tmi.js');


//function runbotTwtich(){
	const option = {
		options: { debug: true },
		connection: {
			reconnect: true,
			secure: true
		},
		identity: {
			username: 'ligoligo12',
			password: 'oauth:2adeuj6p5ui8ujtxmqwkf55sk5janf'
		},
		channels: [ 'ligoligo12' ]
	}
	
	const client = new tmi.Client(option);
	
	client.connect();
	
	let p1Click = false;
	let p2Click = false;
	client.on('message', (channel, tags, message, self) => {
		// Ignore echoed messages.
		if(self) return;
		
		if(p1Click === true)
		{
			client.say(channel, `@${tags.username}, p1+: Fighting`);
		}
		else if (p2Click === true)
		{
			client.say(channel, `@${tags.username}, p2-: Loser`);
		}
		//else if(message.toLowerCase() === '!hello') {
			// "@alca, heya!"

			//console.log(channel, tags, message, self);
			
			
		//}
	});

    function sentMessageBotP1(){
        var name = document.getElementById('input-text-twitch').value;
        if(name === "")
        {
            alert("Please type your Twitch name");
        }
        else{
            client.say(`#ligoligo12`, `@${name}, p1+: Fighting`);
        }
        
    }
	function sentMessageBotP2(){
		var name = document.getElementById('input-text-twitch').value;

		if(name === "")
        {
			alert("Please type your Twitch name");

		}
		else{
			client.say(`#ligoligo12`, `@${name}, p2-: Loser`);
		}


    }
//}



		
