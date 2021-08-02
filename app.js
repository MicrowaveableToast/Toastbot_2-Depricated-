﻿require('dotenv').config();

const HMfull = require("hmfull");
const { Client, Message } = require('discord.js');
const Discord = require('discord.js');
const client = new Client();
const prefix = "t/";
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const mongoose = require('mongoose')
var kasuNhentaiapiJs = require("kasu.nhentaiapi.js")
const API = require('kasu.nhentaiapi.js');
const api = new API();
const settings = {
    prefix: "t/",
    
};
const profileModel = require('./models/proflieSchema.js')
const hmtai = require("hmtai");
const cool = new Set();

client.on('ready', async () => {
    
    console.log('TOASTBOT READY');
});

client.on('message', async message => {
    const embed = new Discord.MessageEmbed();
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
    } catch (err) {
        console.log(err);
    }
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    if (command == 'give') {
        if (message.author.id == 693702960189800498) {
            const amount = args[1]
            const target = message.mentions.members.first();
            try {
                const targetData = await profileModel.findOne({ userID: target.id })
                await profileModel.findOneAndUpdate({
                    userID: target.id

                }, {
                        $inc: {
                        coins: amount,
                    }
                    
                })
            } catch (err) {
                console.log(err);
            }

        } else {
            message.channel.send(`your are not Toast#0215`)
        }
    }
    if (command == 'setbook') {
        id = args[0]
        const response = await profileModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $set: {
                    book: id,
                    page: -1,
                },
            }
        );

    }
    if (command == 'randbook') {
        const number = Math.floor(Math.random() * 367870) + 1;
        id = number
        const response = await profileModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $set: {
                    book: id,
                    page: -1,
                },
            }
        );
    }
    if (command == 'nextpage') {
        if (message.channel.nsfw) {
            const idd = profileData.book
            ID = idd
            
            const response = await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        page: 1,
                    },
                }
            );
            api.getID(ID).list(data=>{
                message.channel.send ( data.page_pics[profileData.page] )
                
                
                
            })  
        }

    
    
    }
    if (command == 'gamble') {
        const amound = args[0]
        const number = Math.floor(Math.random() * 100) + 1;
        if (amound % 1 != 0 || amound <= 0) {
            return message.channel.send('no');
        }
        if (amound > profileData.coins) return message.channel.send(`you're trying to scew then bank`);
        if (number >= 12) {
            await profileModel.findOneAndUpdate({
                userID: message.author.id

            }, {
                $inc: {
                    coins: -amound,
                }

            })
            message.channel.send(`you lost ${amound} bagels. Sucks to suck`)
        } else {
            const win = amound * 2;
            await profileModel.findOneAndUpdate({
                userID: message.author.id

            }, {
                $inc: {
                    coins: win,
                }

            })
            message.channel.send(`you won ${win} bagels.`)
        }
    }
    if (command == 'jobs') {
        if (profileData.job == null) {
            message.channel.send('Dev 2000, Toast 1500, Moderator 3000, Gamer 1000, Twitch Thot 5000');
        } else {
            return message.channel.send('You already have a job')
        }
    }
    if (command == 'job') {
        const job = args[0]
        if (job == null) message.channel.send('no job specified');
        if (job == 'dev') {
            await profileModel.findOneAndUpdate({
                userID: message.author.id

            }, {
               
                 job: 'dev',
                 jobpay: 2000
                

            })
        }
        if (job == 'toast') {
            await profileModel.findOneAndUpdate({
                userID: message.author.id

            }, 
                {
                    job: 'Toast',
                    jobpay: 1500
                

            })
        }
        if (job == 'moderator') {
            await profileModel.findOneAndUpdate({
                userID: message.author.id

            }, {
                
                    job: 'Moderator',
                    jobpay: 3000
                

                })
        }
        if (job == 'gamer') {
            await profileModel.findOneAndUpdate({
                userID: message.author.id

            }, {
                 job: 'Gamer',
                 jobpay: 1000
                   
                

            })
        }
        if (job == 'twitch') {
            await profileModel.findOneAndUpdate({
                userID: message.author.id

            }, {
                job: 'Twitch Thot',
                jobpay: 5000

            })
            
        }
        message.channel.send(`Your new job is a ${profileData.job}, and you make ₿${profileData.jobpay}`);
    }
    if (command == 'init') {
        
        let profile = await profileModel.create({
            userID: message.author.id,
            serverID: message.guild.id,
            coins: 0,
            bank: 0,
            job: null,
            page: 0,
            book: 0,
        })
        profile.save();
    }
    if (command == 'bal') {
        
        
        if (args[0] == null) {
            return message.channel.send(`your wallet bal is ₿${profileData.coins}, your bank bal is ₿${profileData.bank}`)
        } else {
            
            userID = message.mentions.members.first.id
            return message.channel.send(`your wallet bal ₿${profileData.coins}, your bank bal is ₿${profileData.bank}`)
        }
        


    }
    if (command == 'imstilljustgonnausemrfrog') {
        message.reply('fuck you');
    }
    if (command == 'beg') {
        if (cool.has(message.author.id)) {
            message.reply('You have to wait 5m')
        } else {

        const poor = Math.floor(Math.random() * 10) + 1;
        const response = await profileModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $inc: {
                    coins: poor,
                },
            }
        );
        return message.channel.send(`${message.author.username}, you begged and received ${poor} **bagels**`);

        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 300000)
        }
    }
    if (command == 'dep') {
        const amount = args[0]
        if (amount % 1 != 0 || amount <= 0) {
            return message.channel.send('no');
        }
        try {
            if (amount > profileData.coins) return message.channel.send(`you're trying to scew the bank`)
            await profileModel.findOneAndUpdate({
                userID: message.author.id,


            }, {
                $inc: {
                    coins: -amount,
                    bank: amount,
                }

            })
            return message.channel.send(`You deposited ₿${amount}`
        )} catch (err) {
            console.log(err);
        }
    }
    if (command == 'with') {
        const amount = args[0]
        if (amount % 1 != 0 || amount <= 0) {
            return message.channel.send('no');
        }
        try {
            if (amount > profileData.bank) return message.channel.send(`you're trying to scew the bank`)
            await profileModel.findOneAndUpdate({
                userID: message.author.id,


            }, {
                $inc: {
                    coins: amount,
                    bank: -amount,
                }

            })
            return message.channel.send(`You withdrew ₿${amount}`
            )
        } catch (err) {
            console.log(err);
        }
    }
	if (command == 'del') {
		
		let fuck = args[0]
		message.channel.bulkDelete(fuck)
		
		
		
		
	
	
		
		
		
		
		
	}
   if (command == 'nicoroles'){
	 let perms = message.member.permissions;
	 
	 
     const eee = message.mentions.members.first();
	   
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
		eee.roles.add(r1);
		eee.roles.add(r2);
		eee.roles.add(r3);
		eee.roles.add(r4);
		eee.roles.add(r5);
		eee.roles.add(r6);
		eee.roles.add(r7);
		eee.roles.add(r9);
		eee.roles.add(r10);
		eee.roles.add(r11);
		
        
		
       
       
       
       
       
       
       
       
       
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
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 2) {
                embed.setImage(hmtai.nsfw.ass());
                return message.channel.send(embed);
            }
            if (numb == 1){
                const image = await nsfw.hentaiass();
                const embed = new Discord.MessageEmbed()
                .setImage(image);
                message.channel.send(embed)
                
            }
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
            return message.channel.send("setbook (use numbers), randbook, nextpage, 4k, irlass, irlpussy, irlboobs, irlthighs, irllewd, irlgif,  sfwneko, mid,  computerwallpaper, ass, bdsm, manga, orgy, pantsu, glasses, cuckold, thighs, uniform, gangband, tentacles, gif, ZettaiRyouiki, nsfwMobileWallpaper, boobs, irlanal, trap ( ͡° ͜ʖ ͡°), tits, nekotits, nekofeet, neko pussy keta, nsfwavatar, wallpaper, hentai, nsfwneko, yuri, femdom, (kinky one arent ya), feet (hereatic), pussy, ero, blowjob, masturbation, cum, ahegao");
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
            let numb = Math.floor(Math.random() * 2) + 1
            if (numb == 1) {
                embed.setImage(hmtai.nsfw.thighs());
                return message.channel.send(embed);
            }
            if (numb == 2) {
               const image = await nsfw.hentaithigh();
               const embed = new Discord.MessageEmbed()
               .setImage(image);
               message.channel.send(embed)     
            }
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

     
    if (command == 'irlgif') {
        const image = await nsfw.pgif();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);
    }

    if (command == 'irlpussy') {
        const image = await nsfw.pussy();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);
        
    }
    if (command == "irlthigh")   {
        const image = await nsfw.thigh();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);


    }
    if (command == "irlboobs") {
        const image = await nsfw.boobs();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);

    }
    if (command == 'irllewd') {
        const image = await nsfw.lewd();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);
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

    if (command == 'irlass') {

        const image = await nsfw.ass();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);
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
     if (command == "irlgonewild") {
        const image = await nsfw.gonewild();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);
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

    if (command == '4k') {
        const image = await nsfw.fourk();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);


    }
    if (command == 'nekofeet') {
        const image = await nsfw.nekofeet();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);


    }
    if (command == "mid") {
        const image = await nsfw.hmidriff();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed)

    }
    if (command == 'nekopussy'){
        const image = await nsfw.nekopussy();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);



    }
    if (command == 'nekotits') {
        const image = await nsfw.nekotits();
        const embed = new Discord.MessageEmbed()
        .setImage(image);
        message.channel.send(embed);


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
     if (command == 'irlanal') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 2) + 1
            async function Nekos() {
                
                let res = await HMfull.Nekos.nsfw.anal()
                message.channel.send(res.url); 
            } 
            
            if (numb >0) {
                const image = await nsfw.anal();
                const embed = new Discord.MessageEmbed()
                embed.setImage(image);
                message.channel.send(embed); 
            
                
            }
        }

     }
    if (command == 'hentai') {
        if (message.channel.nsfw) {
            message.delete();
            let numb = Math.floor(Math.random() * 5) + 1
            if (numb = 2) {
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
            if (numb >= 3) {
              const image = await nsfw.hentai();
              const embed = new Discord.MessageEmbed()
              .setImage(image);
              message.channel.send(embed)

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
//mongoose.connect(process.env.SRV, {
 //   useNewUrlParser: true,
 //   useUnifiedTopology: true
//}).then(() => {
   // console.log('sucsesfull connection');
//});
mongoose.connect('mongodb+srv://toast:Maddox64@toastbot.ewug8.mongodb.net/tostbot', { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Database Online');
client.login(process.env.TOKEN);

