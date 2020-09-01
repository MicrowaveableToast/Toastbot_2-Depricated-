const Discord = require('discord.js');
const client = new Discord.Client();
const Tag = 't/'



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === Tag+'ping') {
    msg.reply('Pong!')
  }
  if (msg.content === Tag+'MakeMaddoxAdmin') {
    msg.send('Pong!')
  }
});

client.login('NzMwNTY1MDYzODExMDA2NTI2.XwZVvA.fkAxqRMQSCSWE4dO7Seoa7lAQQ0');
