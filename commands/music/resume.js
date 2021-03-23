const {
  Client,
  MessageEmbed,
  displayAvatarURL,
  Presence,
  User,
} = require("discord.js");
module.exports = {
  name: "resumen",
  aliases: [],
  description: "Reanuda las canciones",
  category: "music",
  usage: "resumen",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
  userPermissions: [],
  cooldown: 3,
  run: async (client, msg, args) => {
    const queue = client.queue;
    const serverQueue = queue.get(msg.guild.id);

    if (!msg.member.voice.channel)
      return msg.channel.send("No estas conectando en un canal de voz.");
    if (!serverQueue)
      return msg.channel.send("No hay canciones reproduciendo.");

    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      console.log("Reanudando");
      serverQueue.connection.dispatcher.resume();

      return msg.channel.send("Canción reanudada.");
    }

    msg.channel.send("No hay canciones detenidas.");
  },
};
