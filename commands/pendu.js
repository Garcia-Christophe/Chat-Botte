module.exports = {
  run: (message, args) => {
    message.channel.send(
      "**Oh chouette, le pendu !** " +
        "\n  \\_\\_\\_\\_\\_\\_\\_" +
        "\n  |      |" +
        "\n  |    💀" +
        "\n  |    /|\\" +
        "\n  |    / \\" +
        "\n\\_|\\_" +
        "\n\nLes règles sont très simples :" +
        "\n\t- Vous avez le droit à 10 erreurs, et 30s pour écrire une réponse" +
        "\n\t- Chaque réponse peut contenir soit une lettre, soit une tentative du mot à trouver" +
        "\n\t- Je prends en compte le premier message après ma réponse" +
        "\n\t- Chaque mot à deviner est un mot français (donc que des lettres)" +
        "\n\t- A 3 réponses de la défaite, je vous donne un indice" +
        "\n\nJ'espère que vous êtes prêts, le jeu commence à votre **top** !" +
        '\n*("stop" pour stopper le jeu)*'
    );

    // if (isNaN(args[0]) && args[0] !== undefined && args[0].length === 1) {
    //   message.channel.send(
    //     "Attends, mon maître est en train de m'apprendre le jeu !"
    //   );
    // } else {
    //   message.channel.send("Saisis une lettre cabrón.");
    // }
  },
  name: "pendu",
};
