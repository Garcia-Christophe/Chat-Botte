module.exports = {
  run: (message) => {
    const messages = [
      "Yo le reuf !",
      "Salut.",
      "Hey ! Bien ou bien ?",
      "T'as quoi ?",
      "BONSOOOOIIIIRR !!! (comme diraient McCly & Farlito)",
      "Bonjour, une nouvelle journée et donc une nouvelle occassion de passer du bon temps avec toi.",
      `bonjour ${message.member}, comment vas-tu ?`,
      "Ta gueule.",
      "Hello my friend 😀",
      "Holà amigo, t'aurais pas des chats féminins à me présenter ? 😏",
      `Bon... Bonjour M.${message.member}, me trouvez-vous mignon ? 🥺`,
    ];

    var i = Math.floor(Math.random() * 11);
    message.channel.send(messages[i]);
  },
  name: "salut",
};
