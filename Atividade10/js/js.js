var Aluno = new Object();
Aluno.RA = "12345 \n";
Aluno.nome = "Matheus Martins de Oliveira";

alert(Aluno.RA + Aluno.nome);


var Aluno2 = {
	RA : "12345 \n",
	nome : "Matheus Martins de Oliveira"
};

alert(Aluno2.RA + Aluno2.nome);

var Aluno3 = {};
var Aluno3 = {RA : "12345 \n", nome : "Matheus Martins de Oliveira"};

alert(Aluno3.RA + Aluno3.nome);

