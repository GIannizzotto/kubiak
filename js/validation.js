function validation() {

  name               = document.getElementById("form-name").value;
  email              = document.getElementById("form-email").value;
  subjet             = document.getElementById("form-subjet").value;
  comment            = document.getElementById("form-comment").value;
  if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
    $('.form-control.name').css('background-color','rgba(168, 138, 104,0.3)');
    $('.form-group.name').addClass('error');
    $('.form-control.name').attr("placeholder", "Nombre: campo obligatorio");
    return false;
  } else {
    $('.form-control.name').css('background-color','transparent');
  }

  if( email == null || email.length == 0 || /^\s+$/.test(email) ) {
    $('.form-control.email').css('background-color','rgba(168, 138, 104,0.3)');
    $('.form-group.email').addClass('error');
    $('.form-control.email').attr("placeholder", "E-mail: campo obligatorio");
    return false;
  } else {
    $('.form-control.email').css('background-color','transparent');
  }

  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!expr.test(email)) {
    $('.form-control.email').css('background-color','rgba(168, 138, 104,0.3)');
    $('.form-group.email').addClass('error');
    document.getElementById('form-email').value = '';
    $('.form-control.email').attr("placeholder", "E-mail: incorrecto");
    return false;
  } else {
    $('.form-control.email').css('background-color','transparent');
  }

  if( subjet == null || subjet.length == 0 || /^\s+$/.test(subjet) ) {
    $('.form-control.subjet').css('background-color','rgba(168, 138, 104,0.3)');
    $('.form-group.subjet').addClass('error');
    $('.form-control.subjet').attr("placeholder", "Asunto: campo obligatorio");
    return false;
  } else {
    $('.form-control.subjet').css('background-color','transparent');
  }

  if( comment == null || comment.length == 0 || /^\s+$/.test(comment) ) {
    $('.form-control.message').css('background-color','rgba(168, 138, 104,0.3)');
    $('.form-group.message').addClass('error');
    $('.form-control.message').attr("placeholder", "Mensaje: campo obligatorio");
    return false;
  } else {
    $('.form-control.message').css('background-color','transparent');
  }

  return true;
}
