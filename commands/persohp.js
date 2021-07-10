module.exports = {
  run: (message) => {
    message.channel.send(
      "**Oh ouiii ! Je vais pouvoir deviner à quel personnage de l'univers Harry Potter tu penses !**  ⚡" +
        "\n\nLes règles sont très simples :" +
        "\n\t- Tu penses à un personnage et je dois essayer de le deviner" +
        "\n\t- Je vais te poser des questions et tu dois répondre par *oui* ou par *non* (2 min par question max)" +
        "\n\t- Tu gagnes si j'ai pas réussi à trouver ton perso (attention à tes réponses) !" +
        "\n\nJ'espère que tu es prêt, le jeu commence quand tu veux : à ton **top** !  🔥" +
        '\n*("stop" pour stopper le jeu)*'
    );

    // 191 persos
    personnages = [
      {
        nom: "Hannah Abbot",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Poufsouffle",
        particularite: "est membre de l'Armée de Dumbledore",
      },
      {
        nom: "Barjow",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "châtains",
        fonction: "commerçant(e)",
        particularite: "gère la boutique Barjow & Beurk",
      },
      {
        nom: "Le Baron Sanglant",
        forme: "fantôme",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "fantôme de Serpentard",
        particularite: "aime faire peur à Peeves",
      },
      {
        nom: "Beedle le Barde",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "auteur(e)",
        livreConnu: "Le Conte des trois frères",
      },
      {
        nom: "Katie Bell",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "a été ensorcellée par Drago Malefoy",
      },
      {
        nom: "Croyance Bellebosse",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "présent(e) uniquement dans Les Animaux Fantastiques",
        particularite: "est peut-être de la famille Dumbledore",
      },
      {
        nom: "Mary Lou Bellebosse",
        forme: "moldu(e)",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "présent(e) uniquement dans Les Animaux Fantastiques",
        particularite: "dirige la Ligue des Fidèles de Salem",
      },
      {
        nom: "Modestie Bellebosse",
        forme: "moldu(e)",
        sexe: "femme",
        cheveux: "chatains",
        fonction: "présent(e) uniquement dans Les Animaux Fantastiques",
        particularite:
          'aime chanter "Ma maman, ta maman, chassent les sorcières..."  🎵',
      },
      {
        nom: "Caractacus Beurk",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "commerçant(e)",
        particularite: "est fondateur de la boutique Barjow & Beurk",
      },
      {
        nom: "Renée Bibine",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "gris",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "enseigne des cours de vol",
      },
      {
        nom: "Cuthbert Binns",
        forme: "fantôme",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          "est le seul enseignant fantôme du personnel de Poudlard",
      },
      {
        nom: "Phineas Nigellus Black",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "est un ancien directeur de Poudlard",
      },
      {
        nom: "Regulus Arcturus Black",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite: "a volé le médaillon de Salazar Serpentard",
      },
      {
        nom: "Sirius Black",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est le parrain de Harry Potter",
      },
      {
        nom: "Susan Bones",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Poufsouffle",
        particularite:
          "est la 1re à être placée par le Choixpeau magique dans HP1",
      },
      {
        nom: "Terry Boot",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serdaigle",
        particularite: "est membre de l'Armée de Dumbledore",
      },
      {
        nom: "Lavande Brown",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est beaucoup trop amoureuse de Ron",
      },
      {
        nom: "Frank Bryce",
        forme: "moldu(e)",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "jardinier",
        particularite: "est jardinier de la maison des Jedusor",
      },
      {
        nom: "Millicent Bulstrode",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "chatains",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite: "porte parfois les poils de son chat sur sa robe",
      },
      {
        nom: "Charity Burbage",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "est dévorée par Nagini dès le début d'un film",
      },
      {
        nom: "Alecto Carrow",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "roux",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          "est une mangemort, professeure de l'étude des Moldus lors de la 7e année de Harry Potter",
      },
      {
        nom: "Amycus Carrow",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          "est un mangemort, professeur de défense contre les forces du Mal lors de la 7e année de Harry Potter",
      },
      {
        nom: "Reginal Cattermole",
        forme: "moldu(e)",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite: "est juste utile pour la métamorphose de Ron dans HP7-1",
      },
      {
        nom: "Mary Cattermole",
        forme: "moldu(e)",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite: "a déjà embrassé Ron",
      },
      {
        nom: "Cho Chang",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serdaigle",
        particularite: "est malheureusement déjà prise pour le Bal de Noël",
      },
      {
        nom: "Pomona Chourave",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "gris",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          "est une petite sorcière joliment potelée ayant des cheveux gris en désordre et des ongles dans un piètre état",
      },
      {
        nom: "Vincent Crabbe",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite: "meurt dans ses propres flammes",
      },
      {
        nom: "Colin Crivey",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est un photographe relou",
      },
      {
        nom: "Dennis Crivey",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est le petit frère d'un photographe relou",
      },
      {
        nom: "Barty Croupton Jr.",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite: "a déjà joué dans Doctor Who",
      },
      {
        nom: "Barty Croupton Sr.",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "gris",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite: "est mort dans le jardin d'Hagrid, transformé en os",
      },
      {
        nom: "Helena Serdaigle",
        forme: "fantôme",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "fantôme de Serdaigle",
        particularite:
          'a déjà dit "Si vous devez demander, jamais vous ne saurez. Si vous savez, il suffit de demander"',
      },
      {
        nom: "Ernie Danlmur",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "conducteur",
        particularite: "aime quand ça secoue",
      },
      {
        nom: "Roger Davies",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serdaigle",
        particularite: "se tape Fleur Delacour durant le Bal de Noël",
      },
      {
        nom: "John Dawlish",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "auror",
        particularite: "a essayé un jour d'arrêter Dumbledore",
      },
      {
        nom: "Pénélope Deauclaire",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serdaigle",
        particularite: "est la petite amie de Percy Weasley",
      },
      {
        nom: "Fleur Delacour",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "personne associée à Beauxbâtons",
        particularite: "est championne de l'Académie Beauxbâtons",
      },
      {
        nom: "Gabrielle Delacour",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "personne associée à Beauxbâtons",
        particularite:
          "est la petite soeur de la championne de l'Académie Beauxbâtons",
      },
      {
        nom: "Dedalus Diggle",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "gris",
        fonction: "sorcier chargé de la protection de la famille Dursley",
        particularite: "est membre de l'Ordre du Phénix",
      },
      {
        nom: "Amos Diggory",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "gris",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite: "a déjà emmené des gens à un portoloin",
      },
      {
        nom: "Cédric Diggory",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Poufsouffle",
        particularite: "a eu le gros pied dégueulasse de Voldemort sur sa joue",
      },
      {
        nom: "Delphi Diggory",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blancs",
        fonction: "autre méchant",
        particularite: "est la fille présumée du Seigneur des ténèbres",
      },
      {
        nom: "Armando Dippet",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "a été directeur de Poudlard avant Dumbledore",
      },
      {
        nom: "Elphias Doge",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite: "est l'un des plus vieux amis d'Albus Dumbledore",
      },
      {
        nom: "Antonin Dolohov",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite: "s'est déjà enfui de la prison Azkaban",
      },
      {
        nom: "Norbert Dragonneau",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "auteur(e)",
        particularite: "a un zoo dans sa valise",
      },
      {
        nom: "Thésée Dragonneau",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "présent(e) uniquement dans Les Animaux Fantastiques",
        particularite: "est auror et frère ainé de Norbert",
      },
      {
        nom: "Olivier Dubois",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite:
          "a fait découvrir les différentes balles du Quidditch à Harry",
      },
      {
        nom: "Abelforth Dumbledore",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "commerçant(e)",
        particularite: "est le grand frère d'Albus Dumbledore",
      },
      {
        nom: "Albus Dumbledore",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "est le plus grand sorcier de tous les temps",
      },
      {
        nom: "Ariana Dumbledore",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "chatains",
        fonction: "de la famille Dumbledore",
        particularite:
          "est morte suite à une dispute entre ses frères et Grindelwald",
      },
      {
        nom: "Kendra Dumbledore",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "de la famille Dumbledore",
        particularite: "est la daronne d'Albus Dumbledore",
      },
      {
        nom: "Perceval Dumbledore",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "de la famille Dumbledore",
        particularite: "est le daron d'Albus Dumbledore",
      },
      {
        nom: "Dudley Dursley",
        forme: "moldu(e)",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "quelqu'un de chiant",
        particularite: "compte ses cadeaux",
      },
      {
        nom: "Pétunia Dursley",
        forme: "moldu(e)",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "quelqu'un de chiant",
        particularite: "est la soeur jalouse de Lily",
      },
      {
        nom: "Vernon Dursley",
        forme: "moldu(e)",
        sexe: "homme",
        cheveux: "gris",
        fonction: "quelqu'un de chiant",
        particularite:
          "est le directeur de Grunnings, une entreprise qui construit des perçeuses",
      },
      {
        nom: "Marjorie Dursley",
        forme: "moldu(e)",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "quelqu'un de chiant",
        particularite:
          "s'envole vers d'autres cieux tel un ballon d'helium (ou la team Rocket)",
      },
      {
        nom: "Marietta Edgecombe",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serdaigle",
        particularite: "a trahi l'Armée de Dumbledore",
      },
      {
        nom: "Arabella Figg",
        forme: "cracmol",
        sexe: "femme",
        cheveux: "gris",
        fonction: "agent de liaison d'Albus Dumbledore",
        particularite:
          "s'est vu confier le rôle de surveiller Harry et sur ordre de Dumbledore",
      },
      {
        nom: "Justin Finch-Fletchley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Poufsouffle",
        particularite:
          "a failli se faire attaqué par un serpent, contrôlé par Harry",
      },
      {
        nom: "Seamus Finnigan",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "se fait explosé la gueule par ses propres sorts",
      },
      {
        nom: "Nicolas Flamel",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "alchimiste",
        particularite:
          "a vécu 665 ans car il a trouvé le secret de fabrication d'une certaine pierre",
      },
      {
        nom: "Mondingus Fletcher",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chauve",
        fonction: "escroc",
        particularite: "est lâche, tête en l'air et escroc",
      },
      {
        nom: "Marcus Flint",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite: "est capitaine de l'équipe de Quidditch de Serpentard",
      },
      {
        nom: "Filius Flitwick",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          'est l\'auteur de la célèbre réplique "On tourne et on abaisse !"',
      },
      {
        nom: "Cornelius Fudge",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "gris",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite:
          "est Ministre de la Magie, et il nie beaucoup le retour de Voldemort",
      },
      {
        nom: "Elvis Marvolo Gaunt",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "autre méchant",
        particularite: "est le grand-père de Voldemort",
      },
      {
        nom: "Merope Gaunt",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "autre méchant",
        particularite: "est la mère de Voldemort",
      },
      {
        nom: "Morfin Gaunt",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "autre méchant",
        particularite: "est le frère de la mère de Voldemort",
      },
      {
        nom: "Wilhelmina Gobe-Planche",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "est la remplaçante d'Hagrid",
      },
      {
        nom: "Anthony Goldstein",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serdaigle",
        particularite: "fait partie de l'Armée de Dumbledore",
      },
      {
        nom: "Tina Goldstein",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "présent(e) uniquement dans Les Animaux Fantastiques",
        particularite: "possède des yeux semblables à ceux des salamandres",
      },
      {
        nom: "Queenie Goldstein",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "présent(e) uniquement dans Les Animaux Fantastiques",
        particularite: "sait exactement ce que tu souhaites manger",
      },
      {
        nom: "Gregory Goyle",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite:
          "fait partie de la brigade inquisitoriale fondée par Ombrage, et lui n'est pas mort par son propre feu",
      },
      {
        nom: "M. Granger",
        forme: "moldu(e)",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "dentiste",
        particularite: "a oublié l'existence de sa fille",
      },
      {
        nom: "Mme Granger",
        forme: "moldu(e)",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "dentiste",
        particularite: "est la mère d'Hermione",
      },
      {
        nom: "Hermione Granger",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "chatains",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "préfère mourir qu'être expulsée de Poudlard",
      },
      {
        nom: "Rose Granger-Weasley",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "a hérité de l'intelligence de sa mère",
      },
      {
        nom: "Hugo Granger-Weasley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est le fils cadet de Ron et Hermione",
      },
      {
        nom: "Percival Graves",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "présent(e) uniquement dans Les Animaux Fantastiques",
        particularite:
          "est le directeur du département de la Justice magique du MACUSA et chef de la division des Aurors",
      },
      {
        nom: "Astoria Greengrass",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite: "est l'épouse de Drago",
      },
      {
        nom: "Mykew Gregorovitch",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "commerçant(e)",
        particularite:
          "est un fabricant de baguettes, et détenait la baguette de Sureau avant de se la faire volée par le best, l'unique, le boss, Grindelwald",
      },
      {
        nom: "Fenrir Greyback",
        forme: "loup-garou",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "autre méchant",
        particularite: "a mordu Remus Lupin",
      },
      {
        nom: "Gellert Grindelwald",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "autre méchant",
        particularite:
          "a beaucoup de flow, beaucoup de puissance, et a malheureusement perdu la bataille contre son ancien meilleur ami Albus Dumbledore",
      },
      {
        nom: "La Grosse Dame",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blancs",
        fonction: "portrait",
        particularite: 'demande souvent "Le MoT dE pAsSe"',
      },
      {
        nom: "Godric Gryffondor",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "fondateur d'une maison de Poudlard",
        particularite: "est le fondateur de la maison Gryffondor",
      },
      {
        nom: "Mme Guipure",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "commerçant(e)",
        particularite:
          'tient la boutique "Madame Guipure prêt-à-porter pour mages et sorciers"',
      },
      {
        nom: "Rubeus Hagrid",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "a un penchant pour les créatures atypiques",
      },
      {
        nom: "Mafalda Hopkrik",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite:
          "a déjà envoyé une lettre à Harry Potter annonçant son exclusion de Poudlard et la prochaine destruction de sa baguette",
      },
      {
        nom: "Tom Jedusor (père)",
        forme: "moldu(e)",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "fournisseur d'os en toute ignorance",
        particularite: "est adepte d'équitation",
      },
      {
        nom: "Angelina Johnson",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est une excellente joueuse de Quidditch",
      },
      {
        nom: "Gwenog Jones",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "dans un cadre chez Slughorn",
        particularite: "est capitaine des Harpies de Holyhead",
      },
      {
        nom: "Lee Jordan",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est un excellent commentateur",
      },
      {
        nom: "Bertha Jorkins",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite:
          "a permis à Voldemort de savoir que l'un de ses plus fervents partisans, Barty Croupton Junior, était encore en vie et en liberté relative",
      },
      {
        nom: "Igor Karkaroff",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite: "a été directeur de Durmstrang",
      },
      {
        nom: "Jacob Kowalski",
        forme: "moldu(e)",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "présent(e) uniquement dans Les Animaux Fantastiques",
        particularite:
          "a une grand-mère tenant un bon nombre de recettes secrètes",
      },
      {
        nom: "Viktor krum",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève de Durmstrang",
        particularite: "compte 88 sélections en équipe bulgare de Quidditch",
      },
      {
        nom: "Bellatrix Lestrange",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite: "est adepte de la torture",
      },
      {
        nom: "Leta Lestrange",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "présent(e) uniquement dans Les Animaux Fantastiques",
        particularite: "est une amie d'enfance de Norbert Dragonneau",
      },
      {
        nom: "Rabastan Lestrange",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "mangemort ou ancien mangemort",
        particularite: "est le frère de Rodolphus Lestrange",
      },
      {
        nom: "Rodolphus Lestrange",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite: "est le mari de Bellatrix Lestrange",
      },
      {
        nom: "Gilderoy Lockhart",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          "est Ordre de Merlin, troisième classe, membre honoraire de la Ligue de Défense contre les Forces du Mal et cinq fois lauréat du sourire le plus charmeur élu par Sorcière-Hebdo",
      },
      {
        nom: "Augusta Londubat",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "grand-mère",
        particularite: "une grand-mère qui ne se laisse pas faire",
      },
      {
        nom: "Frank Londubat",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "auror",
        particularite: "est un daron qui finit sa vie à Sainte-Mangouste",
      },
      {
        nom: "Frank Londubat",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "auror",
        particularite: "est une daronne qui finit sa vie à Sainte-Mangouste",
      },
      {
        nom: "Neville Londubat",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite:
          "est une victime pendant les premiers films, puis un mec hyper badass lors des derniers",
      },
      {
        nom: "Luna Lovegood",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serdaigle",
        particularite: "est perchée",
      },
      {
        nom: "Xenophilius Lovegood",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "auteur(e)",
        particularite: "est le directeur du Chicaneur",
      },
      {
        nom: "Remus Lupin",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "est un loup-garou faisant partie des maraudeurs",
      },
      {
        nom: "Teddy Lupin",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction:
          "orphelin de ses 2 parents morts lors de la bataille de Poudlard",
        particularite: "est le filleul de Harry",
      },
      {
        nom: "Mme Mason",
        forme: "moldu(e)",
        sexe: "femme",
        cheveux: "gris",
        fonction: "invité chez les Dursley",
        particularite:
          "a déjà reçu un gâteau en pleine tête par un elfe de maison",
      },
      {
        nom: "M. Mason",
        forme: "moldu(e)",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "invité chez les Dursley",
        particularite:
          "a déjà vu sa femme recevoir un gâteau en pleine tête par un elfe de maison",
      },
      {
        nom: "Minerva McGonagall",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "gris",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          'a eu le privilège de lancer le sort "Piertotum Locomotor !" sur les soldats de Poudlard',
      },
      {
        nom: "Cormac McLaggen",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite:
          "s'est pris 1 mois de retenu après avoir vomi des couilles de dragons sur Rogue",
      },
      {
        nom: "Ernie MacMillan",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Poufsouffle",
        particularite: "est membre de l'AD",
      },
      {
        nom: "Walden Macnair",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite:
          "s'est vu enlevé son masque de mangemort lorsque le Seigneur des ténèbres renaît",
      },
      {
        nom: "Drago Malefoy",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite:
          "a mis en place un système à l'aide des armoires à disparaître pour faire entrer des mangemorts à Poudlard",
      },
      {
        nom: "Lucius Malefoy",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite:
          "est aussi un mangemort qui fait le mec mais en fait c'est une victime",
      },
      {
        nom: "Narcissa Malefoy",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite: "est un membre de la famille Black",
      },
      {
        nom: "Scorpius Malefoy",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite:
          "possède un prénom plutôt très stylé (objectivement bien sûr... *hum hum*)",
      },
      {
        nom: "Alastor Maugrey",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "auror",
        particularite: "a un oeil qui peut voir jusqu'au fond de la salle",
      },
      {
        nom: "Olympe Maxime",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "chatains",
        fonction: "personne associée à Beauxbâtons",
        particularite: "a une forte ossature",
      },
      {
        nom: "Mimi Geignarde",
        forme: "fantôme",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serdaigle",
        particularite: "pleure beaucoup trop souvent",
      },
      {
        nom: "Le Moine Gras",
        forme: "fantôme",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "fantôme de Poufsouffle",
        maison: "Serdaigle",
        particularite: "participe à la pub du Chaussée aux Moines",
      },
      {
        nom: "Broderick Moroz",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite:
          "est Langue-de-Plomb du département des mystères finissant à Sainte-Mangouste, mort par le filet du diable",
      },
      {
        nom: "Nick Quasi-sans-tête",
        forme: "fantôme",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "fantôme de Gryffondor",
        particularite:
          "ne peut participer au club des Chasseurs sans tête à cause de son bout de peau qui retient sa tête de tomber",
      },
      {
        nom: "Bob Ogden",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite: "a déjà parlé à la famille Gaunt",
      },
      {
        nom: "Garrick Ollivander",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blancs",
        fonction: "commerçant(e)",
        particularite: "se souvient de chaque baguette qu'il a vendue",
      },
      {
        nom: "Dolores Ombrage",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "chatains",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          "hait les hybrides (centaures, loups-garous, demi-géants...)",
      },
      {
        nom: "Pansy Parkinson",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "chatains",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite:
          "tente de remettre Harry à Voldemort lors de son retour à Poudlard",
      },
      {
        nom: "Padma Patil",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serdaigle",
        particularite: "une jumelle Patil",
      },
      {
        nom: "Parvati Patil",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "une jumelle Patil",
      },
      {
        nom: "Peter Pettigrow",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite: "meurt par sa propre main",
      },
      {
        nom: "Antioch Peverell",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "des 3 frères",
        particularite: "est le propriétaire original de la baguette de sureau",
      },
      {
        nom: "Cadmus Peverell",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "des 3 frères",
        particularite:
          "est le propriétaire original de la pierre de résurrection",
      },
      {
        nom: "Ignotus Peverell",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "des 3 frères",
        particularite: "est le propriétaire original de la cape d'invisibilité",
      },
      {
        nom: "Irma Pince",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "est la bibliothécaire de Poudlard",
      },
      {
        nom: "Sturgis Podmore",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite:
          "a tenté de forcer la porte du département des mystères alors qu'il était censé la protéger (sûrement sous l'emprise de l'Imperium)",
      },
      {
        nom: "Poppy Pomfresh",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "gris",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "ne donne pas de jus de citrouille aux malades",
      },
      {
        nom: "Albus Severus Potter",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite: "est le meilleur ami de Scorpius",
      },
      {
        nom: "Harry Potter",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite:
          "est à la fois : perso principal, grand sorcier, grand attrapeur, horcruxe, orphelin, célèbre, binoclard et doté d'une cicatrice sur le front",
      },
      {
        nom: "James Potter",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "porte le surnom de Cornedrue",
      },
      {
        nom: "James Sirius Potter",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est un petit-fils de James Potter",
      },
      {
        nom: "Lily Potter",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "a donné BEAUCOUP d'amour à Harry Potter",
      },
      {
        nom: "Lily Luna Potter",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "roux",
        fonction: "fille Potter",
        particularite: "est la fille cadette de Harry et Ginny",
      },
      {
        nom: "Helga Poufsouffle",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "fondateur d'une maison de Poudlard",
        particularite: "possède une coupe",
      },
      {
        nom: "Eileen Prince",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction:
          "présidente du Club de Bavboules de Poudlard et capitaine de l'équipe de Bavboules de Poudlard",
        particularite: "est la mère de Severus",
      },
      {
        nom: "Quirinus Quirrell",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chauve",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          "a dé... déjà eu 2 vi... 2 visages en même même même temps sur sa-a tête",
      },
      {
        nom: "Stan Rocade",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "contrôleur",
        particularite: "a déjà servi Voldemort (soumis à l'Imperium)",
      },
      {
        nom: "Severus Rogue",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "a **always** aimé une fille",
      },
      {
        nom: "Tobias Rogue",
        forme: "moldu(e)",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "le père d'un prince de sang-mêlé",
        particularite: "est le père de Severus",
      },
      {
        nom: "Augustus Rookwood",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite:
          "a été dénoncé comme mangemort par Igor Karkaroff et emprisonné à Azkaban",
      },
      {
        nom: "Evan Rosier",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite: "a mutilé le nez de Alastor Maugrey",
      },
      {
        nom: "Mme Rosmerta",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "commerçant(e)",
        particularite: "est patronne du pub Les Trois Balais",
      },
      {
        nom: "Albert Runcorn",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite:
          "est juste utile pour Harry pour le remplacer à l'aide du Polynectar",
      },
      {
        nom: "Argus Rusard",
        forme: "cracmol",
        sexe: "homme",
        cheveux: "gris",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "aime choper les enfants en train de faire des bêtises",
      },
      {
        nom: "Rufus Scrimgeour",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite:
          "a donné un vif d'or à Harry sans comprendre pourquoi (cheh)",
      },
      {
        nom: "Rowena Serdaigle",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "fondateur d'une maison de Poudlard",
        particularite: "possède un diadème",
      },
      {
        nom: "Helena Serdaigle (La Dame Grise)",
        forme: "fantôme",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "fantôme de Serdaigle",
        particularite:
          'a déjà dit "S\'il te faut demander, jamais tu ne sauras. Si tu sais, il suffit de demander"',
      },
      {
        nom: "Salazar Serpentard",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "fondateur d'une maison de Poudlard",
        particularite: "possède un médaillon",
      },
      {
        nom: "Kingsley Shacklebolt",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chauve",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite: "possède une robe violette",
      },
      {
        nom: "Aurora Sinistra",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "enseigne l'astronomie",
      },
      {
        nom: "Rita Skeeter",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blancs",
        fonction: "quelqu'un de chiant",
        particularite:
          "croit que Harry est un enfant de 12 ans dont les yeux brillent avec les fantômes de son passé",
      },
      {
        nom: "Horace Slughorn",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "gris",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "se transforme en fauteuil",
      },
      {
        nom: "Hepzibah Smith",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "maître d'une elfe de maison nomée Hokey",
        particularite:
          "est une vieille sorcière riche, descendante d'Helga Poufsouffle, qui s'est fait voler un trésor de famille",
      },
      {
        nom: "Zacharias Smith",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Poufsouffle",
        particularite:
          "est poursuiveur de l'équipe de Quidditch de Poufsouffle et a participé à l'AD",
      },
      {
        nom: "Galatea Têtenjoy",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite:
          "a été professeure de défense contre les forces du Mal pendant 50 ans",
      },
      {
        nom: "Pius Thicknesse",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chatains",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite: "parle comme un vrai politicien",
      },
      {
        nom: "Dean Thomas",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "aime le football",
      },
      {
        nom: "Tom le barman",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chauve",
        fonction: "commerçant(e)",
        particularite: "est bossu",
      },
      {
        nom: "Andromeda Tonks",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "soeur de Bellatrix et Narcissa",
        particularite: "est la mère de Nymphadora",
      },
      {
        nom: "Nymphadora Tonks",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blonds",
        fonction: "auror",
        particularite: "change la forme de son visage comme bon lui semble",
      },
      {
        nom: "Ted Tonks",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "papa Tonks",
        particularite: "est le père de Nymphadora",
      },
      {
        nom: "Bathilda Tourdesac",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "blancs",
        fonction: "auteur(e)",
        particularite: "a déjà été remplacé par un serpent",
      },
      {
        nom: "Sibylle Trelawney",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "chatains",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "porte de troip grosses lunettes",
      },
      {
        nom: "Romilda Vane",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite:
          "a déjà voulu donner un philtre d'amour à Harry (mais en fait c'est Ron qui l'a pris)",
      },
      {
        nom: "Septima Vector",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "inconnus",
        fonction: "membre ou ancien membre du personnel de Poudlard",
        particularite: "est professeure d'arithmancie",
      },
      {
        nom: "Ludovic Verpey",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "inconnus",
        fonction: "membre ou ancien membre du Ministère de la Magie",
        particularite: "a déjà entourloupé les jumeaux Weasley",
      },
      {
        nom: "Voldemort",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "chauve",
        fonction: "autre méchant",
        particularite: "n'a pas de nez",
      },
      {
        nom: "Arthur Weasley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "intéressé par un canard en caoutchouc",
      },
      {
        nom: "Bill Weasley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "travaille pour Gringotts",
      },
      {
        nom: "Charlie Weasley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "étudie les dragons en Roumanie",
      },
      {
        nom: "Fred Weasley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est un jumeau mort lors de la bataille de Poudlard",
      },
      {
        nom: "George Weasley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est un jumeau qui se tape l'ex de son frère mort",
      },
      {
        nom: "Ginny Weasley",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est la seule fille enfant d'une famille nombreuse",
      },
      {
        nom: "Ginny Weasley",
        forme: "sorcier/sorcière",
        sexe: "femme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "est la mère d'une famille nombreuse",
      },
      {
        nom: "Percy Weasley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite:
          "a été Préfet en Chef de Gryffondor pendant que Harry et son frère Ron était à l'école",
      },
      {
        nom: "Ron Weasley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "roux",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Gryffondor",
        particularite: "se tape Hermione",
      },
      {
        nom: "Victoire Weasley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction: "fille Weasley-Granger",
        particularite: "embrasse tout le temps Teddy Lupin",
      },
      {
        nom: "Corbane Yaxley",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "blonds",
        fonction:
          "mangemort ou ancien mangemort (hors élève actuel de Poudlard)",
        particularite: "arrache le bras de Ron",
      },
      {
        nom: "Blaise Zabini",
        forme: "sorcier/sorcière",
        sexe: "homme",
        cheveux: "bruns",
        fonction: "élève ou ancien(ne) élève à Poudlard",
        maison: "Serpentard",
        particularite:
          "est fils d'une célèbre sorcière connue pour avoir été mariée sept fois et il est membre du Club de Slug",
      },
    ];

    const topFiltre = (m) =>
      m.author.id === message.author.id &&
      (m.toString().toUpperCase() === "TOP" ||
        m.toString().toUpperCase() === "STOP");
    const jeuFiltre = (m) =>
      m.author.id === message.author.id &&
      (m.toString().toUpperCase() === "OUI" ||
        m.toString().toUpperCase() === "NON" ||
        m.toString().toUpperCase() === "STOP");
    const persoNonConnuFiltre = (m) =>
      m.author.id === message.author.id && m.toString().length > 0;

    message.channel
      .awaitMessages(topFiltre, { max: 1, time: 120000, errors: ["time"] })
      .then(async (collected) => {
        const msg = collected.first().toString();

        if (msg.toUpperCase() === "STOP") {
          message.channel.send("OK ! A la prochaine alors !");
        } else {
          var copiePersonnages = [...personnages];
          var abandon = false;
          var persoTrouve = false;

          var formeTrouvee = false;
          var fonctionTrouvee = false;
          var maisonTrouvee = false;
          var cheveuxTrouves = false;

          var formes = [
            "sorcier/sorcière",
            "fantôme",
            "moldu(e)",
            "cracmol",
            "loup-garou",
          ];
          var maisons = [
            "Gryffondor",
            "Serpentard",
            "Poufsouffle",
            "Serdaigle",
          ];

          message.channel.send("Ok c'est parti !");

          // Cherche la forme
          while (
            copiePersonnages.length > 0 &&
            !abandon &&
            !formeTrouvee &&
            formes.length > 0
          ) {
            message.channel.send(
              "Est-ce que ton personnage est un(e) **" + formes[0] + "** ?"
            );
            await message.channel
              .awaitMessages(jeuFiltre, {
                max: 1,
                time: 120000,
                errors: ["time"],
              })
              .then((collected2) => {
                var reponse = collected2.first().toString();

                if (reponse.toUpperCase() === "STOP") {
                  message.channel.send("OK ! A la prochaine alors !  ✌️");
                  abandon = true;
                } else if (reponse.toUpperCase() === "OUI") {
                  // Si la forme est trouvée, alors supprime tous les personnages dont la forme est différente
                  formeTrouvee = true;
                  var i = 0;
                  while (i < copiePersonnages.length) {
                    if (copiePersonnages[i].forme !== formes[0]) {
                      copiePersonnages.splice(i, 1);
                    } else {
                      i++;
                    }
                  }
                } else {
                  // Supprime tous les persos de la forme demandée + la forme dans formes
                  var i = 0;
                  while (i < copiePersonnages.length) {
                    if (copiePersonnages[i].forme === formes[0]) {
                      copiePersonnages.splice(i, 1);
                    } else {
                      i++;
                    }
                  }
                  formes.splice(0, 1);
                }
              })
              .catch((err) => {
                abandon = true;
                message.channel.send(
                  `**TOP !**  ⏲️\nÇa fait 2 min, t'es sûr que tu connais ton personnage ${message.member} ?\nA très vite j'espère !`
                );
                console.log(err);
              });
          }

          // Cherche le sexe
          if (copiePersonnages.length > 0 && !abandon) {
            var sexePremierPerso =
              copiePersonnages.length > 0 ? copiePersonnages[0].sexe : "";
            var poseQuestionSexe = false;
            var i = 0;
            while (!poseQuestionSexe && i < copiePersonnages.length) {
              if (copiePersonnages[i].sexe !== sexePremierPerso) {
                poseQuestionSexe = true;
              }
              i++;
            }

            if (poseQuestionSexe) {
              message.channel.send(
                "Est-ce que ton personnage est du **sexe masculin** ?"
              );
              await message.channel
                .awaitMessages(jeuFiltre, {
                  max: 1,
                  time: 120000,
                  errors: ["time"],
                })
                .then((collected2) => {
                  var reponse = collected2.first().toString();

                  if (reponse.toUpperCase() === "STOP") {
                    message.channel.send("OK ! A la prochaine alors !  ✌️");
                    abandon = true;
                  } else if (reponse.toUpperCase() === "OUI") {
                    // Si le personnage est du sexe masculin, alors supprime tous les personnages de sexe féminin
                    var i = 0;
                    while (i < copiePersonnages.length) {
                      if (copiePersonnages[i].sexe === "femme") {
                        copiePersonnages.splice(i, 1);
                      } else {
                        i++;
                      }
                    }
                  } else {
                    // Si le personnage est du sexe masculin, alors supprime tous les personnages de sexe féminin
                    var i = 0;
                    while (i < copiePersonnages.length) {
                      if (copiePersonnages[i].sexe === "homme") {
                        copiePersonnages.splice(i, 1);
                      } else {
                        i++;
                      }
                    }
                  }
                })
                .catch((err) => {
                  abandon = true;
                  message.channel.send(
                    `**TOP !**  ⏲️\nÇa fait 2 min, t'es sûr que tu connais ton personnage ${message.member} ?\nA très vite j'espère !`
                  );
                  console.log(err);
                });
            }
          }

          // Cherche la fonction
          var fonctions = [];
          if (copiePersonnages.length > 0 && !abandon) {
            var nouvelleFonction = true;

            for (var i = 0; i < copiePersonnages.length; i++) {
              nouvelleFonction = true;
              for (var j = 0; j < fonctions.length; j++) {
                if (copiePersonnages[i].fonction === fonctions[j]) {
                  nouvelleFonction = false;
                }
              }

              if (nouvelleFonction) {
                fonctions.push(copiePersonnages[i].fonction);
              }
            }
          }

          while (
            copiePersonnages.length > 0 &&
            !abandon &&
            !fonctionTrouvee &&
            fonctions.length > 0
          ) {
            message.channel.send(
              "Est-ce que ton personnage est un(e) **" + fonctions[0] + "** ?"
            );
            await message.channel
              .awaitMessages(jeuFiltre, {
                max: 1,
                time: 120000,
                errors: ["time"],
              })
              .then((collected2) => {
                var reponse = collected2.first().toString();

                if (reponse.toUpperCase() === "STOP") {
                  message.channel.send("OK ! A la prochaine alors !  ✌️");
                  abandon = true;
                } else if (reponse.toUpperCase() === "OUI") {
                  // Si la fonction est trouvée, alors supprime tous les personnages dont la fonction est différente
                  fonctionTrouvee = true;
                  var i = 0;
                  while (i < copiePersonnages.length) {
                    if (copiePersonnages[i].fonction !== fonctions[0]) {
                      copiePersonnages.splice(i, 1);
                    } else {
                      i++;
                    }
                  }
                } else {
                  // Supprime tous les persos de la fonction demandée + la fonction dans fonctions
                  var i = 0;
                  while (i < copiePersonnages.length) {
                    if (copiePersonnages[i].fonction === fonctions[0]) {
                      copiePersonnages.splice(i, 1);
                    } else {
                      i++;
                    }
                  }
                  fonctions.splice(0, 1);
                }
              })
              .catch((err) => {
                abandon = true;
                message.channel.send(
                  `**TOP !**  ⏲️\nÇa fait 2 min, t'es sûr que tu connais ton personnage ${message.member} ?\nA très vite j'espère !`
                );
                console.log(err);
              });
          }

          // Cherche la maison
          if (
            copiePersonnages.length > 0 &&
            copiePersonnages[0].fonction ===
              "élève ou ancien(ne) élève à Poudlard"
          ) {
            while (
              copiePersonnages.length > 0 &&
              !abandon &&
              !maisonTrouvee &&
              maisons.length > 0
            ) {
              message.channel.send(
                "Est-ce que ton personnage appartient à la maison **" +
                  maisons[0] +
                  "** ?"
              );
              await message.channel
                .awaitMessages(jeuFiltre, {
                  max: 1,
                  time: 120000,
                  errors: ["time"],
                })
                .then((collected2) => {
                  var reponse = collected2.first().toString();

                  if (reponse.toUpperCase() === "STOP") {
                    message.channel.send("OK ! A la prochaine alors !  ✌️");
                    abandon = true;
                  } else if (reponse.toUpperCase() === "OUI") {
                    // Si la maison est trouvée, alors supprime tous les personnages dont la maison est différente
                    maisonTrouvee = true;
                    var i = 0;
                    while (i < copiePersonnages.length) {
                      if (copiePersonnages[i].maison !== maisons[0]) {
                        copiePersonnages.splice(i, 1);
                      } else {
                        i++;
                      }
                    }
                  } else {
                    // Supprime tous les persos de la maison demandée + la maison dans maisons
                    var i = 0;
                    while (i < copiePersonnages.length) {
                      if (copiePersonnages[i].maison === maisons[0]) {
                        copiePersonnages.splice(i, 1);
                      } else {
                        i++;
                      }
                    }
                    maisons.splice(0, 1);
                  }
                })
                .catch((err) => {
                  abandon = true;
                  message.channel.send(
                    `**TOP !**  ⏲️\nÇa fait 2 min, t'es sûr que tu connais ton personnage ${message.member} ?\nA très vite j'espère !`
                  );
                  console.log(err);
                });
            }
          }

          // Cherche les cheveux
          var cheveux = [];
          if (copiePersonnages.length > 0 && !abandon) {
            var nouveauxCheveux = true;

            for (var i = 0; i < copiePersonnages.length; i++) {
              nouveauxCheveux = true;
              for (var j = 0; j < cheveux.length; j++) {
                if (copiePersonnages[i].cheveux === cheveux[j]) {
                  nouveauxCheveux = false;
                }
              }

              if (nouveauxCheveux) {
                cheveux.push(copiePersonnages[i].cheveux);
              }
            }
          }

          while (
            copiePersonnages.length > 0 &&
            !abandon &&
            !cheveuxTrouves &&
            cheveux.length > 0
          ) {
            var nbCheveux = 0;
            while (
              nbCheveux < copiePersonnages.length &&
              copiePersonnages[nbCheveux].cheveux === "inconnus"
            ) {
              nbCheveux++;
            }
            if (nbCheveux >= copiePersonnages.length) {
              cheveuxTrouves = true;
            } else {
              message.channel.send(
                "Est-ce que ton personnage " +
                  (cheveux[nbCheveux] === "chauve" ? "est" : "a des cheveux") +
                  " **" +
                  cheveux[nbCheveux] +
                  "** ?"
              );
              await message.channel
                .awaitMessages(jeuFiltre, {
                  max: 1,
                  time: 120000,
                  errors: ["time"],
                })
                .then((collected2) => {
                  var reponse = collected2.first().toString();

                  if (reponse.toUpperCase() === "STOP") {
                    message.channel.send("OK ! A la prochaine alors !  ✌️");
                    abandon = true;
                  } else if (reponse.toUpperCase() === "OUI") {
                    // Si les cheveux sont trouvés, alors supprime tous les personnages dont les cheveux sont différents
                    cheveuxTrouves = true;
                    var i = 0;
                    while (i < copiePersonnages.length) {
                      if (copiePersonnages[i].cheveux !== cheveux[0]) {
                        copiePersonnages.splice(i, 1);
                      } else {
                        i++;
                      }
                    }
                  } else {
                    // Supprime tous les persos dont les cheveux ne correspondent pas + les cheveux de cheveux
                    var i = 0;
                    while (i < copiePersonnages.length) {
                      if (copiePersonnages[i].cheveux === cheveux[0]) {
                        copiePersonnages.splice(i, 1);
                      } else {
                        i++;
                      }
                    }
                    cheveux.splice(0, 1);
                  }
                })
                .catch((err) => {
                  abandon = true;
                  message.channel.send(
                    `**TOP !**  ⏲️\nÇa fait 2 min, t'es sûr que tu connais ton personnage ${message.member} ?\nA très vite j'espère !`
                  );
                  console.log(err);
                });
            }
          }

          // Cherche le personnage (via sa particularité)
          while (copiePersonnages.length > 0 && !abandon && !persoTrouve) {
            message.channel.send(
              "Est-ce qu'il/elle **" +
                copiePersonnages[0].particularite +
                "** ?"
            );
            await message.channel
              .awaitMessages(jeuFiltre, {
                max: 1,
                time: 120000,
                errors: ["time"],
              })
              .then((collected2) => {
                var reponse = collected2.first().toString();

                if (reponse.toUpperCase() === "STOP") {
                  message.channel.send("OK ! A la prochaine alors !  ✌️");
                  abandon = true;
                } else if (reponse.toUpperCase() === "OUI") {
                  // Si la particularite est trouvée, alors supprime tous les autres personnages
                  persoTrouve = true;
                  var i = 0;
                  while (i < copiePersonnages.length) {
                    if (
                      copiePersonnages[i].particularite !==
                      copiePersonnages[0].particularite
                    ) {
                      copiePersonnages.splice(i, 1);
                    } else {
                      i++;
                    }
                  }
                } else {
                  // Supprime le perso avec la particularite demandée
                  copiePersonnages.splice(0, 1);
                }
              })
              .catch((err) => {
                abandon = true;
                message.channel.send(
                  `**TOP !**  ⏲️\nÇa fait 2 min, t'es sûr que tu connais ton personnage ${message.member} ?\nA très vite j'espère !`
                );
                console.log(err);
              });
          }

          if (persoTrouve) {
            message.channel.send(
              `**${copiePersonnages[0].nom} !**  🎉\nTrès bon choix de personnage !\nN'hésite pas à faire plus compliqué la prochaine fois ${message.member}...  😉`
            );
          } else if (!abandon) {
            message.channel.send(
              `Ah... Je n'ai plus de personnages correspondant à tes réponses ${message.member}.\nPour savoir si tu as gagné, donne le nom du perso auquel tu pensais !`
            );
            await message.channel
              .awaitMessages(persoNonConnuFiltre, {
                max: 1,
                time: 120000,
                errors: ["time"],
              })
              .then((collected2) => {
                var array = collected2.array();
                var reponse = array.join(" ");

                if (reponse.toUpperCase() === "STOP") {
                  message.channel.send("OK ! A la prochaine alors !  ✌️");
                  abandon = true;
                } else {
                  var persoConnuDuBot = false;
                  var perso;
                  var i = 0;
                  var aaaaa = personnages.length;

                  while (!persoConnuDuBot && i < personnages.length) {
                    if (
                      personnages[i].nom.toUpperCase() === reponse.toUpperCase()
                    ) {
                      persoConnuDuBot = true;
                      perso = personnages[i];
                    }

                    i++;
                  }

                  // Si le personnage est en fait connu du bot : affiche ses caractéristiques. Sinon le joueur a gagné
                  if (persoConnuDuBot) {
                    message.channel.send(
                      `**EHHH ${message.member} !**  😠\nJe connais ce personnage, on doit pas avoir la même vision du perso. Voici la mienne :\n` +
                        "\n**Nom** : " +
                        perso.nom +
                        "\n**Forme** : " +
                        perso.forme +
                        "\n**Sexe** : " +
                        perso.sexe +
                        "\n**Fonction** : " +
                        perso.fonction +
                        (perso.fonction ===
                        "élève ou ancien(ne) élève à Poudlard"
                          ? "\n**Maison** : " + perso.maison
                          : "") +
                        "\n**Cheveux** : " +
                        perso.cheveux +
                        "\n**Particularité** : " +
                        perso.particularite
                    );
                  } else {
                    message.channel.send(
                      `**BRAVO ${message.member} !**  🎉\nJe ne connais pas du tout ce personnage ! A très vite j'espère !`
                    );
                  }
                }
              })
              .catch((err) => {
                abandon = true;
                message.channel.send(
                  `**TOP !**  ⏲️\nÇa fait 2 min, t'es sûr que tu connais ton personnage ${message.member} ? C'est dommage t'étais peut-être sur le point de gagner...\nA très vite j'espère !`
                );
                console.log(err);
              });
          }
        }
      })
      .catch((err) => {
        message.channel.send(
          `Bon... Tu te décides ${message.member} ?  🥱\nRéécris la commande pour relancer.`
        );
        console.log(err);
      });
  },
  name: "persohp",
};
