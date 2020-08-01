  
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 't/';



client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("yes master toast");
  } 
  if (message.content.startsWith(prefix + "toastpic")) {
    message.channel.send("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Toast-2.jpg/1024px-Toast-2.jpg");
  }
   if (message.content.startsWith(prefix + "toastbot")) {
    
   }
   
   if (message.content.startsWith(prefix + "Game")) {
    message.channel.send("Pick a number (PN)  , and thats what I've decided program");
	if (message.content.startsWith(PN); {		
		var Number = Math.floor(Math.random() * 100) + 1;
		message.channel.send( Number );
	}
   }
   
    });






  client.login('NzMwNTY1MDYzODExMDA2NTI2.XxTsLw.Pig3Xj3l12Tgjil-rN968_PHfHg');






