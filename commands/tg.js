module.exports = {
  run: (message, args) => {
    const messagesToBot = [
      "Chef, Oui Chef !",
      `Oui pardon ${message.member}`,
      "Tu veux que je te démarre ?",
      "Vazy tu veux quoi, j'suis là pour t'amuser et tu m'insultes ? *tchip* vazy tu m'as saoulé j'me casse",
      "D'où tu me parles comme ça toi ? Y'a que <@!373473933405454339> qui a le droit !",
      `@everyone, regardez ce mec qui s'en prend à un bot (ouais j'everyone, t'avais qu'à pas m'insulter sale chien ${message.member})`,
    ];

    const messagesToTof = [
      `<@!373473933405454339>, ${message.member} m'a dit de te dire que tu es le boss.`,
      `Personne ne peut insulter l'insultable.`,
      "Ah c'est con.",
      `Ta gueule ${message.member} (ah c'est pas ce que t'espérais hein, carapolla)`,
      `@everyone, ${message.member} souhaite insulter Christophe, qu'est-ce qu'on fait ? On l'empale ?`,
      `T'es un baisé toi à vouloir l'insulter`,
    ];

    const messagesToOthers = [
      args + " ? Ta gueule.",
      "On s'en fout " + args + ".",
      "Ta gueule " + args,
      "On s'en balecouuuuuuuuuuilles " + args + " ! Putain...",
      "Yo soy obligé dé vénir ici pourrr te dirrre qu'on s'en tap ? Ti fais pitié toi hein... ",
      "🎵 AH... Si tu pouvais fermer ta gueule ! 🎵",
    ];

    const bot = [
      "Chat",
      "El gato",
      "Gato",
      "Chat botté",
      "Chat potté",
      "Chat botte",
      "Chat potte",
      "M.Botte",
      "M.Botté",
      "M. Botte",
      "M. Botté",
      "M.Potte",
      "M.Potté",
      "M. Potte",
      "M. Potté",
      "@Chat Botté",
      "@Chat Botte",
      "@Chat Potté",
      "@Chat Potte",
      "@ChatBotté",
      "@ChatBotte",
      "@ChatPotté",
      "@ChatPotte",
      "@Chat Botté#8692",
      "<@!856568392710225950>",
    ];

    const tof = [
      "Scorpius",
      "RioPucs",
      "Rio",
      "Christophe",
      "Garcia",
      "Christophe Garcia",
      "Chris",
      "Tof",
      "Christo",
      "@Scorpius",
      "CG",
      "Scorpius#0319",
      "@Scorpius#0319",
      "Christof",
      "Kristof",
      "Krystof",
      "Kristoff",
      "Krystoff",
      "Kristofe",
      "Krystofe",
      "Kristoffe",
      "Krystoffe",
      "Christoph",
      "Chrystophe",
      "Cristofe",
      "Cristophe",
      "Kristophe",
      "@Le Boss du SW",
      "<@!373473933405454339>",
    ];

    message.delete();

    var random = Math.floor(Math.random() * 6);
    var personneTue = "";
    args.forEach((arg) => (personneTue += arg));

    if (personneTue.length > 0) {
      let insulteTof = false;
      let i = 0;

      while (!insulteTof && i < tof.length) {
        if (
          tof[i].replace(" ", "").toUpperCase() ===
          personneTue.replace(" ", "").toUpperCase()
        ) {
          insulteTof = true;
        }

        i++;
      }

      if (!insulteTof) {
        let insulteBot = false;
        let j = 0;

        while (!insulteBot && j < bot.length) {
          if (
            bot[j].replace(" ", "").toUpperCase() ===
            personneTue.replace(" ", "").toUpperCase()
          ) {
            insulteBot = true;
          }

          j++;
        }

        if (!insulteBot) {
          message.channel.send(messagesToOthers[random]);
        } else {
          message.channel.send(messagesToBot[random]);
        }
      } else {
        message.channel.send(messagesToTof[random]);
      }
    } else {
      message.channel.send(
        "Dis-moi le nom de la personne dont tu veux rabattre le caquet."
      );
    }
  },
  name: "tg",
};
