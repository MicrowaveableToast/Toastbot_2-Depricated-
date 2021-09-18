const Discord = require('discord.js');
const spdl = require('spdl-core');
function formatDuration(duration) {
    let seconds = duration / 1000;
    return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`;
}
const { MessageEmbed } = require('discord.js');

const { Client, Message } = require('discord.js');
const client = new Client();
client.login('NzkzOTczMTc2NjE0NjQ5OTQ2.X-0DJA.sLs6ucSln9FFee6UC5HYVE3mrM0');
client.on('ready', () => console.log('Ready'));

client.on('message', async (msg) => {
    if (!msg.content.startsWith('!play')) return;
    const url = msg.content.split('!play ')[1];
    if (!spdl.validateURL(url)) return msg.channel.send('Invalid URL');
    const channel = msg.member.voice.channel;
    if (!channel) return msg.channel.send('Not in a voc channel');
    try {
        const connection = await channel.join();
        connection
            .play(await spdl(url))
            .on('error', e => console.error(e));
        const infos = await spdl.getInfo(url);
        const embed = new MessageEmbed()
            .setTitle(`Now playing: ${infos.title}`)
            .setURL(infos.url)
            .setColor('#1DB954')
            .addField('Artist', infos.artist, true)
            .addField('Duration', formatDuration(infos.duration), true)
            .setThumbnail(infos.thumbnail);
        msg.channel.send(embed);
    } catch (err) {
        console.error(err);
        msg.channel.send(`An error occurred: ${err.message}`);
    }
});
