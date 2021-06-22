module.exports = {
  run: (message) => {
    message.channel.send("Ok à 3. Pierre... Feuille... Ciseau !");

    const choix = ["Pierre ! 👊", "Feuille ! 🖐️", "Ciseaux ! ✌️"];
    var i = Math.floor(Math.random() * 3);

    setTimeout(function () {
      message.channel.send(choix[i]);
    }, 3000);
  },
  name: "chifoumi",
};
