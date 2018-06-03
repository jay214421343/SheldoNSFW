const { Client } = require("discord.js")
const client = new Client({
    disableEveryone: true
});
const fs = require("fs");
const config = require("./config.json");
const snekfetch = require('snekfetch');
client.on('ready', () => {
    console.log('beep boop')
    client.user.setPresence({game: { name: "l!help | " + client.guilds.size +" Guilds",type:0}});
});
client.on('guildCreate', (guild) => {
    client.user.setPresence({game: { name: "l!help | " + client.guilds.size +" Guilds",type:0}});
});

client.on('guildRemove', (guild) => {
  client.user.setPresence({game: { name: "l!help | " + client.guilds.size +" Guilds",type:0}});
});

client.on("message", msg => {
  if(msg.author.bot) return;
  if(msg.content.indexOf(config.prefix) !== 0) return;
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, msg, args, starttime);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.token);
