require('dotenv').config();
const HMfull = require("hmfull");
const { Client, Message } = require('discord.js');
const Discord = require('discord.js');
const client = new Client();
const prefix = "t/";
const settings = {
    prefix: "t/",
    token: "YOUR_BOT_TOKEN",
};
const hmtai = require("hmtai");



client.on('ready', () => {
    console.log('TOASTBOT READY');
});

client.on('message', async message => {
    const embed = new Discord.MessageEmbed();

    var command = message.content.toLowerCase().slice(settings.prefix.length).split(" ")[0];
    if (message.author.bot) return;


    if (command == 'test') {
        
      let numb = Math.floor(Math.random() * 2) + 1
        if (numb == 1) {
            message.channel.send('poo poo')
        }
        if (numb == 2) {
            message.channel.send('pee pee')



        }
         

       


        


    }



    if (command == 'neko') {
        let res = HMfull.HMtai.sfw.neko()
        message.channel.send(res.url);

    }    
    if (command == 'computerwallpaper') {
        let res = HMfull.HMtai.sfw.wallpaper();
        message.channel.send(res.url);
    }
    if (command == 'mobilewallpaper') {
        let res = HMfull.HMtai.sfw.mobileWallpaper();
        message.channel.send(res.url);
    }
   
    if (command == 'ass') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.ass());
            return message.channel.send(embed);
        }

    }
    if (command == 'bdsm') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.bdsm());
            return message.channel.send(embed);
        }

    }
    if (command == 'cum') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.cum());
            return message.channel.send(embed);
        }

    }
    if (command == 'manga') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.manga());
            return message.channel.send(embed);
        }

    }
    if (command == 'femdom') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.femdom());
            return message.channel.send(embed);
        }

    }
    if (command == 'hentai') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.hentai());
            return message.channel.send(embed);
        }

    }
    if (command == 'masturbation') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.masturbation());
            return message.channel.send(embed);
        }

    }
    if (command == 'ero') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.ero());
            return message.channel.send(embed);
        }

    }
    if (command == 'orgy') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.orgy());
            return message.channel.send(embed);
        }

    }
    if (command == 'yuri') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.yuri());
            return message.channel.send(embed);
        }

    }
    if (command == 'pantsu') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.pantsu());
            return message.channel.send(embed);
        }

    }
    if (command == 'glasses') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.glasses());
            return message.channel.send(embed);
        }

    }
    if (command == 'cuckold') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.cuckold());
            return message.channel.send(embed);
        }

    }
    if (command == 'blowjob') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.blowjob());
            return message.channel.send(embed);
        }

    }
    if (command == 'foot') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.foot());
            return message.channel.send(embed);
        }

    }
    if (command == 'thighs') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.thighs());
            return message.channel.send(embed);
        }

    }
    if (command == 'vagina') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.vagina());
            return message.channel.send(embed);
        }

    }
    if (command == 'ahegao') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.ahegao());
            return message.channel.send(embed);
        }

    }
    if (command == 'uniform') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.uniform());
            return message.channel.send(embed);
        }

    }
    if (command == 'gangbang') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.gangbang());
            return message.channel.send(embed);
        }

    }
    if (command == 'tentacles') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.tentacles());
            return message.channel.send(embed);
        }

    }
    if (command == 'gif') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.gif());
            return message.channel.send(embed);
        }
        else {
            message.reply('BONK go to horny jail');
        }
    }
    if (command == 'nsfwneko') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.nsfwNeko());
            return message.channel.send(embed);
        }
    }

    if (command == 'zettaiRyouiki') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.zettaiRyouiki());
            return message.channel.send(embed);
        }
    
     }
    if (command == 'nsfwmobilewallpaper') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.nsfwMobileWallpaper());
            return message.channel.send(embed);
        }
    

        


















































































    }
}
);
client.login(process.env.DISCORDJS_BOT_TOKEN);