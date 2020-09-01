const Discord = require('discord.js');
const client = new Discord.Client();
const Tag = 't/'



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === Tag+'ping') {
    msg.reply('Pong!')
  if (message.content.startsWith(Tag + "toastpic")) {
    message.channel.send("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Toast-2.jpg/1024px-Toast-2.jpg"); 
  
  }
});

client.login('NzMwNTY1MDYzODExMDA2NTI2.XwZVvA.fkAxqRMQSCSWE4dO7Seoa7lAQQ0');
