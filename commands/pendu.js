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
        "\n\t- Chaque mot à deviner est un mot français (donc que des lettres)" +
        "\n\t- Vous avez le droit à 10 erreurs, et 30s pour écrire une réponse (je prends dans l'ordre)" +
        "\n\t- Chaque réponse peut contenir soit une lettre, soit une tentative du mot à trouver" +
        "\n\nJ'espère que vous êtes prêts, le jeu commence à votre **top** !  🔥" +
        '\n*("stop" pour stopper le jeu)*'
    );

    // 835 mots
    const dictionnaire = [
      "ANGLE",
      "ARMOIRE",
      "BANC",
      "BUREAU",
      "CABINET",
      "CARREAU",
      "CHAISE",
      "CLASSE",
      "CLEF",
      "COIN",
      "COULOIR",
      "DOSSIER",
      "EAU",
      "ECOLE",
      "ENTRER",
      "ESCALIER",
      "ETAGERE",
      "EXTERIEUR",
      "FENETRE",
      "INTERIEUR",
      "LAVABO",
      "LIT",
      "MARCHE",
      "MATELAS",
      "MATERNELLE",
      "MEUBLE",
      "MOUSSE",
      "MUR",
      "PELUCHE",
      "PLACARD",
      "PLAFOND",
      "PORTE",
      "POUBELLE",
      "RADIATEUR",
      "RAMPE",
      "RIDEAU",
      "ROBINET",
      "SALLE",
      "SALON",
      "SERRURE",
      "SERVIETTE",
      "SIEGE",
      "SIESTE",
      "SILENCE",
      "SOL",
      "SOMMEIL",
      "SONNETTE",
      "SORTIE",
      "TABLE",
      "TABLEAU",
      "TABOURET",
      "TAPIS",
      "TIROIR",
      "TOILETTE",
      "VITRE",
      "ALLER",
      "AMENER",
      "APPORTER",
      "APPUYER",
      "ATTENDRE",
      "BAILLER",
      "COUCHER",
      "DORMIR",
      "ECLAIRER",
      "EMMENER",
      "EMPORTER",
      "ENTRER",
      "FERMER",
      "FRAPPER",
      "INSTALLER",
      "LEVER",
      "OUVRIR",
      "PRESSER",
      "RECHAUFFER",
      "RESTER",
      "SONNER",
      "SORTIR",
      "VENIR",
      "ABSENT",
      "ASSIS",
      "BAS",
      "HAUT",
      "PRESENT",
      "GAUCHE",
      "DROITE",
      "DEBOUT",
      "DEDANS",
      "DEHORS",
      "FACE",
      "LOIN",
      "PRES",
      "TARD",
      "TOT",
      "APRES",
      "AVANT",
      "CONTRE",
      "DANS",
      "DE",
      "DERRIERE",
      "DEVANT",
      "DU",
      "SOUS",
      "SUR",
      "CRAYON",
      "STYLO",
      "FEUTRE",
      "MINE",
      "GOMME",
      "DESSIN",
      "COLORIAGE",
      "RAYURE",
      "PEINTURE",
      "PINCEAU",
      "COULEUR",
      "CRAIE",
      "PAPIER",
      "FEUILLE",
      "CAHIER",
      "CARNET",
      "CARTON",
      "CISEAUX",
      "DECOUPAGE",
      "PLIAGE",
      "PLI",
      "COLLE",
      "AFFAIRE",
      "BOITE",
      "CASIER",
      "CAISSE",
      "TROUSSE",
      "CARTABLE",
      "JEU",
      "JOUET",
      "PION",
      "DOMINO",
      "PUZZLE",
      "CUBE",
      "PERLE",
      "CHOSE",
      "FORME",
      "CARRE",
      "ROND",
      "PATE",
      "MODELER",
      "TAMPON",
      "LIVRE",
      "HISTOIRE",
      "BIBLIOTHEQUE",
      "IMAGE",
      "ALBUM",
      "TITRE",
      "CONTE",
      "DICTIONNAIRE",
      "MAGAZINE",
      "CATALOGUE",
      "PAGE",
      "LIGNE",
      "MOT",
      "ENVELOPPE",
      "ETIQUETTE",
      "CARTE",
      "APPEL",
      "AFFICHE",
      "ALPHABET",
      "APPAREIL",
      "CAMESCOPE",
      "CASSETTE",
      "CHAINE",
      "CHANSON",
      "CHIFFRE",
      "CONTRAIRE",
      "DIFFERENCE",
      "DOIGT",
      "ECRAN",
      "ECRITURE",
      "FILM",
      "FOIS",
      "FOI",
      "IDEE",
      "INSTRUMENT",
      "INTRUS",
      "LETTRE",
      "LISTE",
      "MAGNETOSCOPE",
      "MAIN",
      "MICRO",
      "MODELE",
      "MUSIQUE",
      "NOM",
      "NOMBRE",
      "ORCHESTRE",
      "ORDINATEUR",
      "PHOTO",
      "POINT",
      "POSTER",
      "POUCE",
      "PRENOM",
      "QUESTION",
      "RADIO",
      "SENS",
      "TAMBOUR",
      "TELECOMMANDE",
      "TELEPHONE",
      "TELEVISION",
      "TRAIT",
      "TROMPETTE",
      "VOIX",
      "XYLOPHONE",
      "ZERO",
      "CHANTER",
      "CHERCHER",
      "CHOISIR",
      "CHUCHOTER",
      "COLLER",
      "COLORIER",
      "COMMENCER",
      "COMPARER",
      "COMPTER",
      "CONSTRUIRE",
      "CONTINUER",
      "COPIER",
      "COUPER",
      "DECHIRER",
      "DECOLLER",
      "DECORER",
      "DECOUPER",
      "DEMOLIR",
      "DESSINER",
      "DIRE",
      "DISCUTER",
      "ECOUTER",
      "ECRIRE",
      "EFFACER",
      "ENTENDRE",
      "ENTOURER",
      "ENVOYER",
      "FAIRE",
      "FINIR",
      "FOUILLER",
      "GOUTER",
      "IMITER",
      "LAISSER",
      "LIRE",
      "METTRE",
      "MONTRER",
      "OUVRIR",
      "PARLER",
      "PEINDRE",
      "PLIER",
      "POSER",
      "PRENDRE",
      "PREPARER",
      "RANGER",
      "RECITER",
      "RECOMMENCER",
      "REGARDER",
      "REMETTRE",
      "REPETER",
      "REPONDRE",
      "SENTIR",
      "SOULIGNER",
      "TAILLER",
      "TENIR",
      "TERMINER",
      "TOUCHER",
      "TRAVAILLER",
      "TRIER",
      "AMI",
      "ATTENTION",
      "CAMARADE",
      "COLERE",
      "COPAIN",
      "COQUIN",
      "DAME",
      "DIRECTEUR",
      "DIRECTRICE",
      "DROIT",
      "EFFORT",
      "ELEVE",
      "ENFANT",
      "FATIGUE",
      "FAUTE",
      "FILLE",
      "GARCON",
      "GARDIEN",
      "MADAME",
      "MAITRE",
      "MAITRESSE",
      "MENSONGE",
      "ORDRE",
      "PERSONNE",
      "RETARD",
      "JOUEUR",
      "SOURIRE",
      "TRAVAIL",
      "AIDER",
      "DEFENDRE",
      "DESOBEIR",
      "DISTRIBUER",
      "ECHANGER",
      "EXPLIQUER",
      "GRONDER",
      "OBEIR",
      "OBLIGER",
      "PARTAGER",
      "PRETER",
      "PRIVER",
      "PROMETTRE",
      "PROGRES",
      "PROGRESSER",
      "PUNIR",
      "QUITTER",
      "RACONTER",
      "EXPLIQUER",
      "REFUSER",
      "SEPARER",
      "BLOND",
      "BRUN",
      "CALME",
      "CURIEUX",
      "DIFFERENT",
      "DOUX",
      "ENERVER",
      "GENTIL",
      "GRAND",
      "HANDICAPE",
      "INSEPARABLE",
      "JALOUX",
      "MOYEN",
      "MUET",
      "NOIR",
      "NOUVEAU",
      "PETIT",
      "POLI",
      "PROPRE",
      "ROUX",
      "SAGE",
      "SALE",
      "SERIEUX",
      "SOURD",
      "TRANQUILLE",
      "ARROSOIR",
      "ASSIETTE",
      "BALLE",
      "BATEAU",
      "BOITE",
      "BOUCHON",
      "BOUTEILLE",
      "BULLES",
      "CANARD",
      "CASSEROLE",
      "CUILLERE",
      "CUVETTE",
      "DOUCHE",
      "ENTONNOIR",
      "GOUTTES",
      "LITRE",
      "MOULIN",
      "PLUIE",
      "POISSON",
      "PONT",
      "POT",
      "ROUE",
      "SAC",
      "PLASTIQUE",
      "SALADIER",
      "SEAU",
      "TABLIER",
      "TASSE",
      "TROUS",
      "VERRE",
      "AGITER",
      "AMUSER",
      "ARROSER",
      "ATTRAPER",
      "AVANCER",
      "BAIGNER",
      "BARBOTER",
      "BOUCHER",
      "BOUGER",
      "DEBORDER",
      "DOUCHER",
      "ECLABOUSSER",
      "ESSUYER",
      "ENVOYER",
      "COULER",
      "PARTIR",
      "FLOTTER",
      "GONFLER",
      "INONDER",
      "JOUER",
      "LAVER",
      "MELANGER",
      "MOUILLER",
      "NAGER",
      "PLEUVOIR",
      "PLONGER",
      "POUSSER",
      "POUVOIR",
      "PRESSER",
      "RECEVOIR",
      "REMPLIR",
      "RENVERSER",
      "SECHER",
      "SERRER",
      "SOUFFLER",
      "TIRER",
      "TOURNER",
      "TREMPER",
      "VERSER",
      "VIDER",
      "VOULOIR",
      "AMUSANT",
      "CHAUD",
      "FROID",
      "HUMIDE",
      "INTERESSANT",
      "MOUILLE",
      "SEC",
      "TRANSPARENT",
      "MOITIE",
      "AUTANT",
      "BEAUCOUP",
      "ENCORE",
      "MOINS",
      "PEU",
      "PLUS",
      "TROP",
      "ANORAK",
      "ARC",
      "BAGAGE",
      "BAGUETTE",
      "BARBE",
      "BONNET",
      "BOTTE",
      "BOUTON",
      "BRETELLE",
      "CAGOULE",
      "CASQUE",
      "CASQUETTE",
      "CEINTURE",
      "CHAPEAU",
      "CHAUSSETTE",
      "CHAUSSON",
      "CHAUSSURE",
      "CHEMISE",
      "CIGARETTE",
      "COL",
      "COLLANT",
      "COURONNE",
      "CRAVATE",
      "CULOTTE",
      "ECHARPE",
      "EPEE",
      "FEE",
      "FLECHE",
      "FUSIL",
      "GANT",
      "HABIT",
      "JEAN",
      "JUPE",
      "LACET",
      "LAINE",
      "LINGE",
      "LUNETTES",
      "MAGICIEN",
      "MAGIE",
      "MAILLOT",
      "MANCHE",
      "MANTEAU",
      "MOUCHOIR",
      "MOUFLE",
      "NOEUD",
      "PAIRE",
      "PANTALON",
      "PIED",
      "POCHE",
      "PRINCE",
      "PYJAMA",
      "REINE",
      "ROBE",
      "ROI",
      "RUBAN",
      "SEMELLE",
      "SOLDAT",
      "SOCIERE",
      "TACHE",
      "TAILLE",
      "TALON",
      "TISSU",
      "TRICOT",
      "UNIFORME",
      "VALISE",
      "VESTE",
      "VETEMENT",
      "CHANGER",
      "CHAUSSER",
      "COUVRIR",
      "DEGUISER",
      "DESHABILLER",
      "ENLEVER",
      "HABILLER",
      "LACER",
      "PORTER",
      "RESSEMBLER",
      "CLAIR",
      "COURT",
      "ETROIT",
      "FONCE",
      "JOLI",
      "LARGE",
      "LONG",
      "MULTICOLORE",
      "NU",
      "USE",
      "BIEN",
      "MAL",
      "MIEUX",
      "PRESQUE",
      "AIGUILLE",
      "AMPOULE",
      "AVION",
      "BOIS",
      "BOUT",
      "BRICOLAGE",
      "BRUIT",
      "CABANE",
      "CARTON",
      "CLOU",
      "COLLE",
      "CROCHET",
      "ELASTIQUE",
      "FICELLE",
      "FIL",
      "MARIONNETTE",
      "MARTEAU",
      "METAL",
      "METRE",
      "MORCEAU",
      "MOTEUR",
      "OBJET",
      "OUTIL",
      "PEINTURE",
      "PINCEAU",
      "PLANCHE",
      "PLATRE",
      "SCIE",
      "TOURNEVIS",
      "VIS",
      "VOITURE",
      "ARRACHER",
      "ATTACHER",
      "CASSER",
      "COUDRE",
      "DETRUIRE",
      "ECORCHER",
      "ENFILER",
      "ENFONCER",
      "FABRIQUER",
      "MESURER",
      "PERCER",
      "PINCER",
      "REPARER",
      "REUSSIR",
      "SERVIR",
      "TAPER",
      "TROUER",
      "TROUVER",
      "ADROIT",
      "DIFFICILE",
      "DUR",
      "FACILE",
      "LISSE",
      "MALADROIT",
      "POINTU",
      "TORDU",
      "ACCIDENT",
      "AEROPORT",
      "CAMION",
      "ENGIN",
      "FEU",
      "FREIN",
      "FUSEE",
      "GARAGE",
      "GARE",
      "GRUE",
      "HELICOPTERE",
      "MOTO",
      "PANNE",
      "PARKING",
      "PILOTE",
      "PNEU",
      "QUAI",
      "TRAIN",
      "VIRAGE",
      "VITESSE",
      "VOYAGE",
      "WAGON",
      "ZIGZAG",
      "ARRETER",
      "ATTERRIR",
      "BOUDER",
      "CHARGER",
      "CONDUIRE",
      "DEMARRER",
      "DISPARAITRE",
      "DONNER",
      "ECRASER",
      "ENVOLER",
      "GARDER",
      "GARER",
      "MANQUER",
      "PARTIR",
      "POSER",
      "RECULER",
      "ROULER",
      "TENDRE",
      "TRANSPORTER",
      "VOLER",
      "ABIME",
      "ANCIEN",
      "BLANC",
      "BLEU",
      "CASSE",
      "CINQ",
      "DERNIER",
      "DEUX",
      "DEUXIEME",
      "DIX",
      "GRIS",
      "GROS",
      "HUIT",
      "JAUNE",
      "MEME",
      "NEUF",
      "PAREIL",
      "PREMIER",
      "QUATRE",
      "ROUGE",
      "SEPT",
      "SEUL",
      "SIX",
      "SOLIDE",
      "TROIS",
      "TROISIEME",
      "UN",
      "VERT",
      "DESSUS",
      "AUTOUR",
      "VITE",
      "VERS",
      "ACROBATE",
      "ARRET",
      "ARRIERE",
      "BARRE",
      "BARREAU",
      "BORD",
      "BRAS",
      "CERCEAU",
      "CHAISE",
      "CHEVILLE",
      "CHUTE",
      "COEUR",
      "CORDE",
      "CORPS",
      "COTE",
      "COU",
      "COUDE",
      "CUISSE",
      "DANGER",
      "DOIGTS",
      "DOS",
      "ECHASSES",
      "ECHELLE",
      "EPAULE",
      "EQUIPE",
      "ESCABEAU",
      "FESSE",
      "FILET",
      "FOND",
      "GENOU",
      "GYMNASTIQUE",
      "HANCHE",
      "JAMBE",
      "JEU",
      "MAINS",
      "MILIEU",
      "MONTAGNE",
      "MUR",
      "ESCALADE",
      "MUSCLE",
      "NUMERO",
      "ONGLE",
      "PARCOURS",
      "PAS",
      "PASSERELLE",
      "PENTE",
      "PEUR",
      "PIED",
      "PLONGEOIR",
      "POIGNET",
      "POING",
      "PONT",
      "SIGNE",
      "SINGE",
      "POUTRE",
      "EQUILIBRE",
      "PRISE",
      "RIVIERE",
      "CROCODILE",
      "ROULADE",
      "PIROUETTE",
      "SAUT",
      "SERPENT",
      "SPORT",
      "SUIVANT",
      "TETE",
      "TOBOGGAN",
      "TOUR",
      "TRAMPOLINE",
      "TUNNEL",
      "VENTRE",
      "ACCROCHER",
      "APPUYER",
      "ARRIVER",
      "BAISSER",
      "BALANCER",
      "BONDIR",
      "BOUSCULER",
      "COGNER",
      "COURIR",
      "DANSER",
      "DEPASSER",
      "DESCENDRE",
      "ECARTER",
      "ESCALADER",
      "GAGNER",
      "GENER",
      "GLISSER",
      "GRIMPER",
      "MARCHER",
      "PATTES",
      "DEBOUT",
      "MONTER",
      "MONTRER",
      "PENCHER",
      "PERCHER",
      "PERDRE",
      "RAMPER",
      "RATER",
      "REMPLACER",
      "RESPIRER",
      "RETOURNER",
      "REVENIR",
      "SAUTER",
      "SOULEVER",
      "SUIVRE",
      "TOMBER",
      "TRANSPIRER",
      "TRAVERSER",
      "DANGEUREUX",
      "EPAIS",
      "FORT",
      "GROUPE",
      "IMMOBILE",
      "ROND",
      "SERRE",
      "SOUPLE",
      "ENSEMBLE",
      "ICI",
      "JAMAIS",
      "TOUJOURS",
      "SOUVENT",
      "BAGARRE",
      "BALANCOIRE",
      "BALLON",
      "BANDE",
      "BICYCLETTE",
      "BILLE",
      "CAGE",
      "ECUREUIL",
      "CERF",
      "VOLANT",
      "CHATEAU",
      "COUP",
      "COUR",
      "COURSE",
      "ECHASSE",
      "FLAQUE",
      "EAU",
      "PAIX",
      "PARDON",
      "PARTIE",
      "PEDALE",
      "PELLE",
      "POMPE",
      "PREAU",
      "RAQUETTE",
      "RAYON",
      "RECREATION",
      "SABLE",
      "SIFFLET",
      "SIGNE",
      "TAS",
      "TRICYCLE",
      "TUYAU",
      "VELO",
      "FILE",
      "RANG",
      "BAGARRER",
      "BATTRE",
      "CACHER",
      "CRACHER",
      "CREUSER",
      "CRIER",
      "DEGONFLER",
      "DISPUTE",
      "EMPECHER",
      "GALOPER",
      "HURLER",
      "JONGLER",
      "LANCER",
      "PEDALER",
      "PLAINDRE",
      "PLEURER",
      "POURSUIVRE",
      "PROTEGER",
      "SAIGNER",
      "SALIR",
      "SIFFLER",
      "SURVEILLER",
      "TRAINER",
      "TROUVER",
      "FOU",
      "MECHANT",
    ];

    // 10 dessins
    const dessins = [
      "\n" + "\n" + "\n" + "\n" + "\n" + "\n",
      "\n" + "\n" + "\n" + "\n" + "\n" + "\n\\_\\_",
      "\n" + "\n  |" + "\n  |" + "\n  |" + "\n  |" + "\n\\_|\\_",
      "\n  \\_\\_\\_\\_\\_\\_\\_" +
        "\n  |" +
        "\n  |" +
        "\n  |" +
        "\n  |" +
        "\n\\_|\\_",
      "\n  \\_\\_\\_\\_\\_\\_\\_" +
        "\n  |      |" +
        "\n  |" +
        "\n  |" +
        "\n  |" +
        "\n\\_|\\_",
      "\n  \\_\\_\\_\\_\\_\\_\\_" +
        "\n  |      |" +
        "\n  |" +
        "\n  |      |" +
        "\n  |" +
        "\n\\_|\\_",
      "\n  \\_\\_\\_\\_\\_\\_\\_" +
        "\n  |      |" +
        "\n  |" +
        "\n  |    /|" +
        "\n  |" +
        "\n\\_|\\_",
      "\n  \\_\\_\\_\\_\\_\\_\\_" +
        "\n  |      |" +
        "\n  |" +
        "\n  |    /|\\" +
        "\n  |" +
        "\n\\_|\\_",
      "\n  \\_\\_\\_\\_\\_\\_\\_" +
        "\n  |      |" +
        "\n  |" +
        "\n  |    /|\\" +
        "\n  |    /" +
        "\n\\_|\\_",
      "\n  \\_\\_\\_\\_\\_\\_\\_" +
        "\n  |      |" +
        "\n  |" +
        "\n  |    /|\\" +
        "\n  |    / \\" +
        "\n\\_|\\_",
      "\n  \\_\\_\\_\\_\\_\\_\\_" +
        "\n  |      |" +
        "\n  |    💀" +
        "\n  |    /|\\" +
        "\n  |    / \\" +
        "\n\\_|\\_",
    ];

    const idBot = "856568392710225950";
    const topFiltre = (m) =>
      (m.toString().toUpperCase() === "TOP" ||
        m.toString().toUpperCase() === "STOP") &&
      m.author.id !== idBot;
    const jeuFiltre = (m) => m.author.id !== idBot;

    message.channel
      .awaitMessages(topFiltre, { max: 1, time: 60000, errors: ["time"] })
      .then(async (collected) => {
        const msg = collected.first().toString();

        if (msg.toUpperCase() === "STOP") {
          message.channel.send("OK ! A la prochaine alors !");
        } else {
          var motADeviner =
            dictionnaire[Math.floor(Math.random() * (dictionnaire.length + 1))];
          var lettresTrouvees = [];
          var lettresTenteesFausses = [];

          var motTrouve = false;
          var abandon = false;
          var nbErreurs = 0;
          var motCache = "";
          var tentative = "";

          message.channel.send("Ok c'est parti !");

          while (!motTrouve && !abandon && nbErreurs < 10) {
            let lettreTrouvee = "";
            let lettresTenteesFaussesString = "";
            motCache = "";

            for (let i = 0; i < motADeviner.length; i++) {
              lettreTrouvee = "";

              for (let j = 0; j < lettresTrouvees.length; j++) {
                if (
                  motADeviner[i].toUpperCase() ===
                  lettresTrouvees[j].toUpperCase()
                ) {
                  lettreTrouvee = lettresTrouvees[j];
                }
              }

              motCache +=
                lettreTrouvee.length > 0 ? lettreTrouvee.toUpperCase() : "\\_ ";
            }

            for (let i = 0; i < lettresTenteesFausses.length; i++) {
              lettresTenteesFaussesString +=
                i === lettresTenteesFausses.length - 1
                  ? lettresTenteesFausses[i].toUpperCase()
                  : lettresTenteesFausses[i].toUpperCase() + ", ";
            }

            message.channel.send(
              "Mot à deviner : **" +
                motCache +
                "**\n" +
                dessins[nbErreurs] +
                "\nDernière tentative (" +
                (tentative.length > 1
                  ? "mot"
                  : tentative.length === 1
                  ? "lettre"
                  : "aucune") +
                ") : " +
                tentative.toUpperCase() +
                "\nLettres tentées (mais fausses) : " +
                lettresTenteesFaussesString +
                "\nNombre d'erreur(s) : " +
                nbErreurs +
                "/10"
            );
            await message.channel
              .awaitMessages(jeuFiltre, {
                max: 1,
                time: 30000,
                errors: ["time"],
              })
              .then((collected2) => {
                var proposition = collected2.first().toString();
                tentative = proposition;

                if (proposition.toUpperCase() === "STOP") {
                  message.channel.send("OK ! A la prochaine alors !  ✌️");
                  abandon = true;
                } else {
                  if (proposition.length > 1) {
                    if (
                      proposition.toUpperCase() === motADeviner.toUpperCase()
                    ) {
                      motTrouve = true;
                    } else {
                      nbErreurs++;
                    }
                  } else {
                    let dejaTrouvee = false;
                    let dejaEssayee = false;

                    for (let i = 0; i < lettresTrouvees.length; i++) {
                      if (
                        lettresTrouvees[i].toUpperCase() ===
                        proposition.toUpperCase()
                      ) {
                        dejaTrouvee = true;
                      }
                    }

                    for (let i = 0; i < lettresTenteesFausses.length; i++) {
                      if (
                        lettresTenteesFausses[i].toUpperCase() ===
                        proposition.toUpperCase()
                      ) {
                        dejaEssayee = true;
                      }
                    }

                    if (dejaTrouvee) {
                      message.reply("La lettre a déjà été trouvée !");
                    } else if (dejaEssayee) {
                      message.reply("La lettre a déjà été essayée !");
                    } else {
                      var dansLeMot = false;

                      for (let i = 0; i < motADeviner.length; i++) {
                        if (
                          motADeviner[i].toUpperCase() ===
                          proposition.toUpperCase()
                        ) {
                          dansLeMot = true;
                        }
                      }

                      if (dansLeMot) {
                        lettresTrouvees.push(proposition);

                        let nbLettresTrouvees = 0;
                        for (let i = 0; i < motADeviner.length; i++) {
                          for (let j = 0; j < lettresTrouvees.length; j++) {
                            if (
                              motADeviner[i].toUpperCase() ===
                              lettresTrouvees[j].toUpperCase()
                            ) {
                              nbLettresTrouvees++;
                            }
                          }
                        }

                        if (nbLettresTrouvees === motADeviner.length) {
                          motTrouve = true;
                        }
                      } else {
                        lettresTenteesFausses.push(proposition);
                        nbErreurs++;
                      }
                    }
                  }
                }
              })
              .catch((err) => {
                abandon = true;
                message.channel.send(
                  "**TOP !**  ⏲️\nÇa fait 30s, vous êtes vraiment lents... Le mot était *" +
                    motADeviner +
                    "*."
                );
                console.log(err);
              });
          }

          if (motTrouve) {
            message.channel.send(
              "**BRAVO !**  🎉\nVous avez réussi à trouver le mot " +
                motADeviner.toUpperCase() +
                ". À très bientôt j'espère..."
            );
          } else if (nbErreurs >= 10) {
            message.channel.send(
              dessins[10] +
                "\n\nQuel dommage...  💀 Vous n'avez pas réussi à trouver le mot " +
                motADeviner.toUpperCase() +
                " ! || Bande de nuls ||\nÀ très vite j'espère..."
            );
          }
        }
      })
      .catch((err) => {
        message.channel.send(
          "Bon... Vous vous décidez ?  🥱\nRéécrivez la commande pour relancer."
        );
        console.log(err);
      });
  },
  name: "pendu",
};
