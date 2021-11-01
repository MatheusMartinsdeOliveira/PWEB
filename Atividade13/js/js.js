function tamanhoLetras() {

	if (document.forms.formulario1.elements["checkMaiusculo"])
		{
			document.forms.formulario1.elements.idText.toUpperCase(idText);
			return false;
		};


	if (document.forms.formulario1.elements["checkMinusculo"].value == "checkminusculo")
		{
			document.forms.formulario1.elements.idText.toLowerCase(idText);
			return false;
		};
return true;
}