function retangulo(base, altura){
	this.base=base;
	this.altura=altura;

	var calcArea = function(){
		var resul = base * altura;
		return resul;
	}

	this.calcPublic = function(){
		return calcArea;
	}	
}

var valor = new retangulo(8, 3);
var mycalc = valor.calcPublic();
var returnFinal = mycalc();
alert("Área do retângulo: " +returnFinal);


function conta(){
	var nome;
	this.getNome=function(){
		return nome;
	}
	var correntista;
	this.getCorrentista=function(){
		return correntista;
	}
	var banco;
	this.getBanco=function(){
		return banco;
	}
	var numero;
	this.getNumero=function(){
		return numero;
	}
	var saldo;
	this.getSaldo=function(){
		return saldo;
	}

	this.setNome = function(value){
		nome = value;
	}
	this.setCorrentista = function(value){
		correntista = value;
	}
	this.setBanco = function(value){
		banco = value;
	}
	this.setNumero = function(value){
		numero = value;
	}
	this.setSaldo = function(value){
		saldo = value;
	}
}

function corrente(){
	var saldoEspecial;
	this.setSaldoEspecial = function(value){
		saldoEspecial = value;
	}

	this.getSaldoEspecial=function(){
		return saldoEspecial;
	}
}

function poupanca(){
	var juros;
	this.setJuros = function(value){
		juros = value;
	}
	var dataVencimento;
	this.setDataVencimento = function(value){
		dataVencimento = value;
	}

		this.getJuros=function(){
		return juros;
	}
	this.getDataVencimento=function(){
		return dataVencimento;
	}
}

poupanca.prototype = new conta();
corrente.prototype = new conta();

nPoupanca = new poupanca();
nCorrente = new corrente();
nPoupanca.setNome('Matheus');
nPoupanca.setBanco('Banco Itaú');
nPoupanca.setJuros('120');
nPoupanca.setNumero('123456789-0');
nPoupanca.setCorrentista('Não sei');
nPoupanca.setSaldo('2300');
nPoupanca.setDataVencimento('10/12/2021' +'\n');

nCorrente.setNome('Mayara');
nCorrente.setBanco('Banco Santander');
nCorrente.setNumero('12345123-0');
nCorrente.setCorrentista('Não sei');
nCorrente.setSaldo('4320');
nCorrente.setSaldoEspecial('1000');

alert("Dados Poupança: " + '\n' +
	nPoupanca.getNome() + '\n' +
	nPoupanca.getBanco() + '\n' + 
	nPoupanca.getSaldo() + '\n' + 
	nPoupanca.getNumero() + '\n' + 
	nPoupanca.getCorrentista() + '\n' +
	nPoupanca.getJuros() + '\n' + 
	nPoupanca.getDataVencimento() + '\n' +
	"Dados corrente: " + '\n' +
	nCorrente.getNome() + '\n' +
	nCorrente.getBanco() + '\n' + 
	nCorrente.getSaldo() + '\n' + 
	nCorrente.getNumero() + '\n' + 
	nCorrente.getCorrentista() + '\n' +
	nCorrente.getSaldoEspecial()); 
	