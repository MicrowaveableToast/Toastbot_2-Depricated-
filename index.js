  
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
    message.channel.send("toastbot version 1.1.0");
   }
   

    });


  client.login('NzMwNTY1MDYzODExMDA2NTI2.XxTsLw.Pig3Xj3l12Tgjil-rN968_PHfHg');






