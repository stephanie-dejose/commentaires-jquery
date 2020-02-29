/*
  ./js/index.js
*/

$(function(){
  /* ========== CREATION D'UN POST ========== */
  // Quand on soumet le formulaire (événement submit du formulaire),
  $('.btn').click(function(){
   let pseudoUser = $('#form_commentaires input[id="pseudo"]');
   let commentaireUser = $('#form_commentaires textarea[id="commentaire"]');
   let code = `<li class="collection-item avatar">
                 <i class="material-icons circle green">insert_chart</i>
                 <div class="title">${pseudoUser.val()}</div>
                 <div class="text truncate">${commentaireUser.val()}</div>
                 <div><a href="#" class="edit">Editer le texte</a> | <a href="#" class="delete">Supprimer la publication</a></div>
               </li>`;
  // On ajoute le post en début du ul #listeDesPosts en slideDown avec le contenu du formulaire
  $('#sectionPrincipale #listeDesPosts').prepend(code).find('li:first div').hide().slideDown();
  // Vide les champs du commentaires après l'avoir validé
  commentaireUser.val('');
  });

  /* ========== MODIFICATION D'UN POST - PARTIE 1 ========== */
  /*
  Quand on clique sur un .edit de la liste, on met le contenu du .text correspondant
  dans une variable.
  On met un input type text dans le .text et on met comme valeur à cet input
  le contenu de la variable précédente.
  */
  $('#listeDesPosts').on('click', '.edit', function(){
    $(this).parent('div').siblings('.text').each(function(){
      let contenu = $.trim($(this).html());
      $(this).html('<input type="text" value="' + contenu + '"/> ');
  });
    // On vire la classe .edit et on ajoute la classe .validate au lien 'Editer le texte'
    // On change le texte en 'Valider la modification'
    $(this).html('Valider la modification')
           .removeClass('edit')
           .addClass('validate');

    /* ========== MODIFICATION D'UN POST - PARTIE 2 ========== */
    /*
    Quand on clique sur un .validate, on met le contenu de l'input du .text dans une variable.
    et on met ce contenu dans .text
    */
    $('#listeDesPosts').on('click', '.validate', function(){
      $(this).parent('div').siblings('.text').each(function(){
        let contenu = $.trim($(this).find('input').val());
        $(this).text(contenu);
       });
      // On vire la classe .validate et on ajoute la classe .edit au lien 'Valider la modification'
      // On remet le texte 'Editer le texte'
      $(this).html('Editer le texte')
             .removeClass('validate')
             .addClass('edit');
      });
  });

/* ========== SUPPRESSION D'UN POST ========== */
    /*
    Quand on clique sur un .delete, on slideUp le li correspondant
   puis on le vire.
    */
    $('#listeDesPosts').on('click','.delete',function(){
      $(this).closest('li').find('div').slideUp(function(){
        $(this).closest('li').remove();
      });
    });
});
