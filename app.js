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
const client = new Discord.Client();
const { Users, CurrencyShop } = require('./dbObjects');
const { Op } = require('sequelize');
const currency = new Discord.Collection();

Reflect.defineProperty(currency, 'add', {
    /* eslint-disable-next-line func-name-matching */
    value: async function add(id, amount) {
        const user = currency.get(id);
        if (user) {
            user.balance += Number(amount);
            return user.save();
        }
        const newUser = await Users.create({ user_id: id, balance: amount });
        currency.set(id, newUser);
        return newUser;
    },
});

Reflect.defineProperty(currency, 'getBalance', {
    /* eslint-disable-next-line func-name-matching */
    value: function getBalance(id) {
        const user = currency.get(id);
        return user ? user.balance : 0;
    },
});



client.on('ready', async () => {
    const storedBalances = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));
    console.log('TOASTBOT READY');
});

client.on('message', async message => {
    const embed = new Discord.MessageEmbed();

    var command = message.content.toLowerCase().slice(settings.prefix.length).split(" ")[0];
    
    if (message.author.bot) return;
    currency.add(message.author.id, 1);
    








    if (command === 'balance') {
        const target = message.mentions.users.first() || message.author;
        return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}💰`);
    } if (command === 'inventory') {
        const target = message.mentions.users.first() || message.author;
        const user = await Users.findOne({ where: { user_id: target.id } });
        const items = await user.getItems();

        if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
        return message.channel.send(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
    } if (command === 'transfer') {
        const currentAmount = currency.getBalance(message.author.id);
        const transferAmount = commandArgs.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
        const transferTarget = message.mentions.users.first();

        if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`);
        if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author}, you only have ${currentAmount}.`);
        if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

        currency.add(message.author.id, -transferAmount);
        currency.add(transferTarget.id, transferAmount);

        return message.channel.send(`Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${currency.getBalance(message.author.id)}💰`);
    } if (command === 'buy') {
        const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: commandArgs } } });
        if (!item) return message.channel.send(`That item doesn't exist.`);
        if (item.cost > currency.getBalance(message.author.id)) {
            return message.channel.send(`You currently have ${currency.getBalance(message.author.id)}, but the ${item.name} costs ${item.cost}!`);
        }

        const user = await Users.findOne({ where: { user_id: message.author.id } });
        currency.add(message.author.id, -item.cost);
        await user.addItem(item);

        message.channel.send(`You've bought: ${item.name}.`);
    } if (command === 'shop') {
        const items = await CurrencyShop.findAll();
        return message.channel.send(items.map(item => `${item.name}: ${item.cost}💰`).join('\n'), { code: true });
    } if (command === 'leaderboard') {
        return message.channel.send(
            currency.sort((a, b) => b.balance - a.balance)
                .filter(user => client.users.cache.has(user.user_id))
                .first(10)
                .map((user, position) => `(${position + 1}) ${(client.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
                .join('\n'),
            { code: true }
        );
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
    if (command == 'help') {
        if (message.channel.nsfw) {
            return message.channel.send("sfwneko, computerwallpaper, ass, bdsm, manga, orgy, pantsu, glasses, cuckold, thighs, uniform, gangband, tentacles, gif, ZettaiRyouiki, nsfwMobileWallpaper, boobs, anal, trap ( ͡° ͜ʖ ͡°), tits, keta, nsfwavatar, wallpaper, hentai, nsfwneko, yuri, femdom, (kinky one arent ya), feet (hereatic), pussy, ero, blowjob, masturbation, cum, ahegao");
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
    if (command == 'masturbation') {
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
client.login(process.env.TOKEN);
