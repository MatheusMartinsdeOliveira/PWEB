function alterarTamanho() {
  var checkMai = document.getElementById('checkMaiusculo');
  var checkMin = document.getElementById('checkMinusculo');

  if(checkMai.checked){
    document.getElementById('texto').value = document.forms.form1.elements.texto.value.toUpperCase();
  }
  if(checkMin.checked){
    document.getElementById('texto').value = document.forms.form1.elements.texto.value.toLowerCase();
  }

}