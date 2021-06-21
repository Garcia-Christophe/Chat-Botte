const Discord = require("discord.js"),
  client = new Discord.Client({
    fetchAllMembers: true,
  }),
  config = require("./config.json"),
  fs = require("fs");

client.login(config.token);
client.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;

    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  });
});

client.on("message", (message) => {
  if (message.type !== "DEFAULT" || message.author.bot) return;

  const args = message.content.trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  if (!commandName.startsWith(config.prefix)) return;

  const command = client.commands.get(commandName.slice(config.prefix.length));

  if (!command) return;

  command.run(message, args, client);
});

client.on("guildMemberAdd", (member) => {
  member.guild.channels.cache
    .get(config.greeting.channel)
    .send(`Ahhhhh... Bah te voilà ${member} ! On t'attendait 🔥`);
  member.roles.add(config.greeting.role);
});

client.on("guildMemberRemove", (member) => {
  member.guild.channels.cache
    .get(config.greeting.channel)
    .send(`Allez ciao ${member.user.tag}, gros nullos !`);
  member.roles.add(config.greeting.role);
});

client.on("ready", () => {
  client.user.setActivity("Poussin Piou", {
    type: "LISTENING",
    url: "https://open.spotify.com/track/0hqkg636uXeU5I9l6wzbuX?si=91e923a2a4a3452e",
  });
});
