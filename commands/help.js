const { RichEmbed } = require('discord.js');
exports.run = (client, msg, args) => {
  const image = new RichEmbed()
     .setTitle("Commands:")
     .addField("s!help","This embed.")
     .addField("s!ass","Send ass image.")
     .addField("s!pussy","Send pussy image.")
     .addField("s!hentai","Send hentai image.")
     .addField("s!holo","Send holo image.")
     .addField("s!lewd","Send lewd image.")
     .addField("s!thigh","Send thigh image.")
     .addField("s!gif","Send porn gif.")
     .addField("s!4k","Send 4k porn image.")
     .addField("s!anal","Send anal image.")
     .setTimestamp()
     .setFooter(`SheldoNSFW: Made by MrSheldon#0001`)
   msg.channel.send(embed);
};