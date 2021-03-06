const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "say",
  category: "general",
  description: "Bot repeats what you tell it to.",
  usage: `say {message}`,
  run: async (client, message, args) => {
    console.log(
      "ACTIVITY: " +
        message.author.username +
        " ran the command: " +
        message.content
    );
    message.delete();
    if (args.length < 1) {
      message.delete();
      const saysomething = new Discord.MessageEmbed()
        .setColor(process.env.FAIL_COLOR)
        .setAuthor("You must specify something for the bot to repeat.");
      message.channel
        .send(saysomething)
        .then((m) => m.delete({ timeout: 3000 }));
      return;
    }

    const say = new Discord.MessageEmbed()
      .setColor(process.env.GENERAL_COLOR)
      .setAuthor(args.join(" ") + " - " + message.author.username);
    message.channel.send(say);
  },
};
