require('dotenv').config();
const HMfull = require("hmfull");
const { Client, Message } = require('discord.js');
const Discord = require('discord.js');
const client = new Client();
const prefix = "t/";
const settings = {
    prefix: "t/",
    
};
const hmtai = require("hmtai");





client.on('ready', async () => {
    
    console.log('TOASTBOT READY');
});

client.on('message', async message => {
    const embed = new Discord.MessageEmbed();

    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.author.bot) return;
    
    








   if (command == 'nicoroles'){
	 let perms = message.member.permissions;
	 let has_kick = perms.has("MANAGE_ROLES_OR_PERMISSIONS");
	 
     const eee = message.mentions.members.first();
	   if (eee == has_kick){ 
		 let r1 = message.guild.roles.cache.get('789590032981032961');
		 let r2 = message.guild.roles.cache.get('744990295686381578');
		 let r3 = message.guild.roles.cache.get('731761245744791602');
	     let r4 = message.guild.roles.cache.get('742538257971150889');
		 let r5 = message.guild.roles.cache.get('744403163989278772');
		 let r6 = message.guild.roles.cache.get('763913909333393429');
		 let r7 = message.guild.roles.cache.get('788298281595305984');
		 let r9 = message.guild.roles.cache.get('796476848649404497');
		 let r10 = message.guild.roles.cache.get('798652684390891530');
		 let r11 = message.guild.roles.cache.get('799844710784172042');
		 eee.roles.add([r1, r2, r3, r4, r5, r6, r7, r9, r10, r11]);
        }
		else { 
			message.reply('no');
		}
		
       
       
       
       
       
       
       
       
       
   }


















  







    if (command == 'executeorder66') {
        var numb = Math.floor(Math.random() * 999999999999) + 1
        message.channel.send(numb + " users banned");
        
        
        
    }

    if (command == 'test') {
        message.delete();
        message.reply('test');
    }


    if (command === 'bonk') {
        if (!message.member.permissions.has("MOVE_MEMBERS")) return message.channel.send(':x: **You do not have the permission to use this command!**');
        const horny = 737890062347272206
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const mem = message.mentions.members.first()
        let move = args[1]; // Remember arrays are 0-based!.
        let move2 = args[2];
        let idcheckchannel1 = client.channels.cache.get(move)
        let idcheckchannel2 = client.channels.cache.get(move2)
        if (!args[0]) return message.channel.send('Please mention user and voice channel ID/IDs')
        if (!args[1]) {
            mem.voice.setChannel(`737890062347272206`)
        }
        if(args[0] === 'everyone' && !move2) {
        let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
        for (const [memberID, member] of channel.members)
            member.voice.setChannel(`${move}`);
  }

  if (mem != null) { // << ensure that mem is not undefined
    if (!mem.voice.channel) return message.channel.send('User is not in voice channel')

    if (!move2) {
      
      mem.voice.setChannel(`${move}`)
    } else {
      
      mem.voice.setChannel(`${move}`)
      mem.voice.setChannel(`${move2}`)
    }
    }
    }

    if (command == 'sfwneko') {
        message.delete();
        let res = HMfull.HMtai.sfw.neko()
        message.channel.send(res.url);

    }
    if (command == 'computerwallpaper') {
        message.delete();
        let res = HMfull.HMtai.sfw.wallpaper();
        message.channel.send(res.url);
    }
    if (command == 'mobilewallpaper') {
        let res = HMfull.HMtai.sfw.mobileWallpaper();
        message.channel.send(res.url);
    }

    if (command == 'ass') {
        message.delete();
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.ass());
            return message.channel.send(embed);
        }

    }
    if (command == 'bdsm') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.bdsm());
            return message.channel.send(embed);
        }

    }
  
    if (command == 'manga') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.manga());
            return message.channel.send(embed);
        }
        
    }
    if (command == 'help') {
        if (message.channel.nsfw) {
            let res = HMfull.HMtai.sfw.neko()
            return message.channel.send("sfwneko, computerwallpaper, ass, bdsm, manga, orgy, pantsu, glasses, cuckold, thighs, uniform, gangband, tentacles, gif, ZettaiRyouiki, nsfwMobileWallpaper, boobs, anal, trap ( ͡° ͜ʖ ͡°), tits, keta, nsfwavatar, wallpaper, hentai, nsfwneko, yuri, femdom, (kinky one arent ya), feet (hereatic), pussy, ero, blowjob, masturbation, cum, ahegao");
            message.channel.send(res.url);
        }

    }
    
    
    
    if (command == 'orgy') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.orgy());
            return message.channel.send(embed);
        }

    }
    
    if (command == 'pantsu') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.pantsu());
            return message.channel.send(embed);
        }

    }
    if (command == 'glasses') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.glasses());
            return message.channel.send(embed);
        }

    }
    if (command == 'cuckold') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.cuckold());
            return message.channel.send(embed);
        }

    }
   
   
    if (command == 'thighs') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.thighs());
            return message.channel.send(embed);
        }

    }
   
    
    if (command == 'uniform') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.uniform());
            return message.channel.send(embed);
        }

    }
    if (command == 'gangbang') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.gangbang());
            return message.channel.send(embed);
        }

    }
    if (command == 'tentacles') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.tentacles());
            return message.channel.send(embed);
        }

    }
    if (command == 'gif') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.gif());
            return message.channel.send(embed);
        }
        else {
            message.reply('BONK go to horny jail');
        }
    }
   

    if (command == 'zettaiRyouiki') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.zettaiRyouiki());
            return message.channel.send(embed);
        }

    }
    if (command == 'nsfwmobilewallpaper') {
        if (message.channel.nsfw) {
            message.delete();
            embed.setImage(hmtai.nsfw.nsfwMobileWallpaper());
            return message.channel.send(embed);
        }
    }




 
        
    
    
    
    if (command == 'kuni') {
        if (message.channel.nsfw) {
            async function Nekos() {
                message.delete();
                let res = await HMfull.Nekos.nsfw.kuni()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    

    if (command == 'boobs') {
        if (message.channel.nsfw) {
            async function Nekos() {
                message.delete();
                let res = await HMfull.Nekos.nsfw.boobs()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }
    if (command == 'anal') {
        if (message.channel.nsfw) {
            async function Nekos() {
                message.delete();
                let res = await HMfull.Nekos.nsfw.anal()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }
    if (command == 'trap') {
        if (message.channel.nsfw) {
            async function Nekos() {
                message.delete();
                let res = await HMfull.Nekos.nsfw.trap()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    

    
       if (command == 'tits') {
        if (message.channel.nsfw) {
            async function Nekos() {
                message.delete();
                let res = await HMfull.Nekos.nsfw.tits()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    

    
       if (command == 'keta') {
        if (message.channel.nsfw) {
            async function Nekos() {
                message.delete();
                let res = await HMfull.Nekos.nsfw.keta()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    


    
       if (command == 'nsfwavatar') {
        if (message.channel.nsfw) {
            async function Nekos() {
                message.delete();
                let res = await HMfull.Nekos.nsfw.avatar()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    

    if (command == 'wallpaper') {
        if (message.channel.nsfw) {
            async function Nekos() {
                message.delete();
                let res = await HMfull.Nekos.nsfw.wallpaper()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }
    if (command == 'hentai') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 3) + 1
            if (numb >= 2) {
                let res = HMfull.HMtai.nsfw.hentai()
                message.channel.send(res.url);
            }
            if (numb == 1) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.classic()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'nsfwneko') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.neko());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.nsfwNeko()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'yuri') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.yuri());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.yuri()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'femdom') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.femdom());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.femdom()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'feet') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.foot());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.feet()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'pussy') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.vagina());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.pussy()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'ero') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.ero());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.ero()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'blowjob') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.blowjob());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.blowjob()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'masturbation') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.masterbation());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.pwankg()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'cum') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.cum());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.cum()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'ahegao') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.ahegao());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.gasm()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    
    

    


    



 
    
}

);
client.login(process.env.TOKEN);

