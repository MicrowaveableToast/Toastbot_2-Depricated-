const Discord = require('discord.js');
const client = new Discord.Client();
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
const prefix = 't/';
const fetch = require('node-fetch');
const randomPuppy = require('random-puppy');
var subreddit = "hentai";


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
   if (message.content.startsWith(prefix + "puppy")) {
    randomPuppy()
    .then(url => {
        message.channel.send(url);
    })

}  
    if (message.content.startsWith(prefix + "Hentai")) {
    randomPuppy(subreddit)
    .then(url => {
        message.channel.send(url);
    })
	  module.exports.run = async (bot, message, args) => {

    let reddit = [
        "meme",
        "animemes",
        "MemesOfAnime",
        "animememes",
        "AnimeFunny",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "AdviceAnimals"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};
}  
  
});




client.login(process.env.token);


