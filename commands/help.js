const Discord = require("discord.js");
const pagination = require("discord.js-pagination");

module.exports = {
  run: (message) => {
    const botInfo = new Discord.MessageEmbed()
      .setColor(0xffcc4d)
      .setTitle("Informations du Chat Botté  😺")
      .addField("**Préfixe**", "Le préfixe du bot est : `.`")
      .addField("**Pages**", "`1. Commandes utiles`\n`2. Commandes jeux`")
      .addField(
        "**Aide navigation**",
        "Utilisez les flèches ci-dessous pour naviguer entre les pages !"
      );

    const commandesUtiles = new Discord.MessageEmbed()
      .setColor(0xf4900c)
      .setTitle("Commandes utiles  🛠️")
      .addField("`.salut`", "Saluer le chat botté.")
      .addField("`.tg NOM`", "Faire taire une personne.")
      .addField("`.random X Y`", "Générer un nombre aléatoire entre X et Y.");

    const commandesJeux = new Discord.MessageEmbed()
      .setColor(0xea596e)
      .setTitle("Commandes jeux  🎲")
      .addField("`.chifoumi`", "Faire un pierre-feuille-ciseaux contre le bot.")
      .addField("`.pendu`", "Jouer au pendu avec le chat.")
      .addField(
        "`.calcul X`",
        "Résoudre le calcul (de niveau X = 1/2/3) le plus vite possible."
      )
      .addField(
        "`.persohp`",
        "Le chat essaye de deviner le personnage auquel tu penses dans l'univers Harry Potter."
      );

    const pages = [botInfo, commandesUtiles, commandesJeux];

    const emojiList = ["⬅️", "➡️"];

    const timeout = "600000";

    pagination(message, pages, emojiList, timeout);
  },
  name: "help",
};
