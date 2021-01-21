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

client.on('message', message => {
    const embed = new Discord.MessageEmbed();

    var command = message.content.toLowerCase().slice(settings.prefix.length).split(" ")[0];
    
    if (message.author.bot) return;
    if (command == 'bonk') {
      message.channel.send('NO horny');
      ClientUser.setAFK();
      
    }

    if (command == 'sfwneko') {
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
  
    if (command == 'manga') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.manga());
            return message.channel.send(embed);
        }

    }
   
    
    
    
    if (command == 'orgy') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.orgy());
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
   
   
    if (command == 'thighs') {
        if (message.channel.nsfw) {
            embed.setImage(hmtai.nsfw.thighs());
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




 
        
    
    
    
    if (command == 'kuni') {
        if (message.channel.nsfw) {
            async function Nekos() {
                let res = await HMfull.Nekos.nsfw.kuni()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    

    if (command == 'boobs') {
        if (message.channel.nsfw) {
            async function Nekos() {
                let res = await HMfull.Nekos.nsfw.boobs()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }
    if (command == 'anal') {
        if (message.channel.nsfw) {
            async function Nekos() {
                let res = await HMfull.Nekos.nsfw.anal()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }
    if (command == 'trap') {
        if (message.channel.nsfw) {
            async function Nekos() {
                let res = await HMfull.Nekos.nsfw.trap()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    

    
       if (command == 'tits') {
        if (message.channel.nsfw) {
            async function Nekos() {
                let res = await HMfull.Nekos.nsfw.tits()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    

    
       if (command == 'keta') {
        if (message.channel.nsfw) {
            async function Nekos() {
                let res = await HMfull.Nekos.nsfw.keta()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    


    
       if (command == 'nsfwavatar') {
        if (message.channel.nsfw) {
            async function Nekos() {
                let res = await HMfull.Nekos.nsfw.avatar()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }

    

    if (command == 'wallpaper') {
        if (message.channel.nsfw) {
            async function Nekos() {
                let res = await HMfull.Nekos.nsfw.wallpaper()
                message.channel.send(res.url); 
            } 
            Nekos();
        }

     }
    if (command == 'hentai') {
        if (message.channel.nsfw) {
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(HMfull.HMtai.nsfw.hentai());
                return message.channel.send(embed);
            }
            if (numb == 2) {
                async function Nekos() {
                    let res = await HMfull.Nekos.nsfw.hentai()
                    message.channel.send(res.url);
                }
                Nekos();

            }

        }
    }
    if (command == 'nsfwneko') {
        if (message.channel.nsfw) {
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
    if (command == 'masterbation') {
        if (message.channel.nsfw) {
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
client.login(process.env.DISCORDJS_BOT_TOKEN);
