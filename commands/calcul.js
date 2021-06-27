module.exports = {
  run: (message, args) => {
    if (!isNaN(args[0])) {
      var niveau = parseFloat(args[0]);
      var niveauOK = false;

      var operations = [" + ", " - ", " * ", " / "];
      var resultat = 0;
      var calcul = "";

      if (niveau === 1) {
        niveauOK = true;
        var n1 = Math.floor(Math.random() * (10 + 1));
        var n2 = Math.floor(Math.random() * (10 + 1));

        resultat = n1 * n2;
        calcul = n1 + operations[2] + n2;
      } else if (niveau === 2) {
        niveauOK = true;
        var n1 = Math.floor(Math.random() * 100);
        var n2 = Math.floor(Math.random() * 100);
        var operation = operations[Math.floor(Math.random() * (3 + 1))];

        if (operation === operations[0]) {
          resultat = n1 + n2;
          calcul = n1 + operations[0] + n2;
        } else if (operation === operations[1]) {
          resultat = n1 - n2;
          calcul = n1 + operations[1] + n2;
        } else if (operation === operations[2]) {
          resultat = n1 * n2;
          calcul = n1 + operations[2] + n2;
        } else if (operation === operations[3]) {
          resultat = n1 / n2;
          resultat = Number.isInteger(resultat)
            ? parseInt(resultat)
            : resultat.toFixed(1);
          calcul = n1 + operations[3] + n2;
        }
      } else if (niveau === 3) {
        niveauOK = true;
        var n1 = Math.floor(Math.random() * 1000);
        var n2 = Math.floor(Math.random() * 1000);
        var n3 = Math.floor(Math.random() * 1000);
        var operation1 = operations[Math.floor(Math.random() * (3 + 1))];
        var operation2 = operations[Math.floor(Math.random() * (3 + 1))];

        if (operation1 === operations[0]) {
          resultat = n1 + n2;
          calcul = n1 + operations[0] + n2;
        } else if (operation1 === operations[1]) {
          resultat = n1 - n2;
          calcul = n1 + operations[1] + n2;
        } else if (operation1 === operations[2]) {
          resultat = n1 * n2;
          calcul = n1 + operations[2] + n2;
        } else if (operation1 === operations[3]) {
          resultat = n1 / n2;
          resultat = Number.isInteger(resultat)
            ? parseInt(resultat)
            : parseFloat(resultat).toFixed(1);
          calcul = n1 + operations[3] + n2;
        }

        if (operation2 === operations[0]) {
          resultat = resultat + n3;
          resultat = Number.isInteger(resultat)
            ? parseInt(resultat)
            : parseFloat(resultat).toFixed(1);
          calcul += operations[0] + n3;
        } else if (operation2 === operations[1]) {
          resultat = resultat - n3;
          resultat = Number.isInteger(resultat)
            ? parseInt(resultat)
            : parseFloat(resultat).toFixed(1);
          calcul += operations[1] + n3;
        } else if (operation2 === operations[2]) {
          resultat = resultat * n3;
          resultat = Number.isInteger(resultat)
            ? parseInt(resultat)
            : parseFloat(resultat).toFixed(1);
          calcul += operations[2] + n3;
        } else if (operation2 === operations[3]) {
          resultat = resultat / n3;
          resultat = Number.isInteger(resultat)
            ? parseInt(resultat)
            : parseFloat(resultat).toFixed(1);
          calcul += operations[3] + n3;
        }
      }

      if (niveauOK) {
        const resultatFiltre = (m) =>
          parseFloat(m.toString()) === parseFloat(resultat) &&
          m.author.id !== "856568392710225950";

        message.channel.send(
          "5 minutes pour résoudre le calcul. Lors d'un nombre à virgule, arrondissez à 1 chiffre après la virgule. Pas de priorité : calcul de gauche à droite.\nBon courage !  ⏲️\n\n**" +
            calcul +
            "**"
        );

        message.channel
          .awaitMessages(resultatFiltre, {
            max: 1,
            time: 300000,
            errors: ["time"],
          })
          .then(async (collected) => {
            message.reply(
              "Félicitations Einstein !  🔢\nTu as été le plus rapide à trouver la solution."
            );
          })
          .catch((err) => {
            message.channel.send(
              "**TOP !**  ⏲️\nÇa fait 5 min, vous êtes vraiment lents... Le résultat était *" +
                resultat +
                "*."
            );
            console.log(err);
          });
      } else {
        message.channel.send("Saisis le niveau de difficulté (1, 2, 3).");
      }
    } else {
      message.channel.send("Saisis le niveau de difficulté (1, 2, 3).");
    }
  },
  name: "calcul",
};
