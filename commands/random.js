module.exports = {
  run: (message, args) => {
    if (!isNaN(args[0]) && !isNaN(args[1])) {
      var min = parseInt(args[0]);
      var max = parseInt(args[1]);
      var random = Math.floor(Math.random() * (max - min + 1)) + min;

      message.channel.send(
        "Min: " + min + "\nMax: " + max + "\nRésultat: **" + random + "**"
      );
    } else {
      message.channel.send("Saisis ton min et ton max (ex: .random 1 10)");
    }
  },
  name: "random",
};
