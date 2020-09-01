  
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 't/';



 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }






  client.login('NzMwNTY1MDYzODExMDA2NTI2.XxTsLw.Pig3Xj3l12Tgjil-rN968_PHfHg');



