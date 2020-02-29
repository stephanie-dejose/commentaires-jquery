CONSIGNES :

1. AJOUT D'UN COMMENTAIRE
   Quand on soumet le formulaire (événement submit du formulaire),
   On ajoute le post en début du ul #listeDesPosts en slideDown avec le contenu du formulaire

2. MODIFICATION D'UN POST - étape 1
   Quand on clique sur un .edit de la liste, on met le contenu du .text correspondant
   dans une variable.
   On met un input type text dans le .text et on met comme valeur à cet input
   le contenu de la variable précédente.
   On vire la classe .edit et on ajoute la classe .validate au lien 'Editer le texte'
   On change le texte en 'Valider la modification'

3. MODIFICATION D'UN POST - étape 2
   Quand on clique sur un .validate, on met le contenu de l'input du .text dans une variable.
   et on met ce contenu dans .text
   On vire la classe .validate et on ajoute la classe .edit au lien 'Valider la modification'
   On remet le texte 'Editer le texte'

4. SUPPRESSION D'UN POST
   Quand on clique sur un .delete, on slideUp le li correspondant
   puis on le vire.

ATTENTION, pour les points 2, 3 et 4, la capture de l'événement ne se fait
pas par un simple click().

Vous allez utiliser la syntaxe suivante :
$('#listeDesPosts').on('click', '.edit', function(){
  ...
});

au lieu de

$('.edit').click(function() {
  ...
});

Cela permet de tenir compte des nouveaux liens à venir...
