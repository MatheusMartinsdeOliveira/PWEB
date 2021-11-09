function validarDados() {
  // Nome //
  if(document.forms.form1.elements[0].value == "" || 
  document.forms.form1.elements[0].length < 10) {
    alert("Preencha campo NOME corretamente!");
    document.forms.form1.elements[0].focus();
    return false;
  };
  // E-mail
  if (document.forms.form1.elements[1].value.indexOf('@') == -1 ||
  document.forms.form1.elements[1].value.indexOf('.') == -1 ) {
  alert("Preencha o E-mail corretamente!");
  document.forms.form1.elements[1].focus();
  return false;
  }
  // Comentário
  if(document.forms.form1.elements[2].value == "" || 
  document.forms.form1.elements[2].length < 19 ) {
  alert("Preencha o campo com mais de 20 caracteres!");
  document.forms.form1.elements[2].focus();
  return false;
  }
  //Radios
  var checkSim = document.getElementById('idSim');
  var checkNao = document.getElementById('idNao');

  if (checkSim.checked) {
    alert("Volte sempre à está página!");
  }
 if (checkNao.checked) {
  alert("Obrigado por voltar a visitar esta página!");
  }

return true;
}