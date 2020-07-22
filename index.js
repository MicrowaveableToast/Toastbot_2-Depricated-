const Discord = require('discord.js');
const client = new Discord.Client();
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
const prefix = 't/';
const fetch = require('node-fetch');
const randomPuppy = require('random-puppy');
var subreddit = "hentai";
const got = require('got');

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
   if (message.content.startsWith(prefix + "meme")) {
		   const embed = new Discord.RichEmbed();
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.addField(`${memeTitle}`, `[View thread](${memeUrl})`);
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);
        msg.channel.send(embed)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
        console.log('Bot responded with: ' + memeImage);
    }).catch(console.error);
}
    })

}
  




client.login(process.env.token);


