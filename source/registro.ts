import {Veiculo} from './scripts/veiculo';

export class Registro {
    veiculo : Veiculo;
    dataEntrada : Date;
    dataSaida: Date;
    pagamentoConcluido : boolean = false;

   constructor(veiculo: Veiculo, dataEntrada : Date , dataSaida : Date){
    this.veiculo = veiculo;
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
   
   } 
   
   calcularTempo(): number{
    if(!this.dataSaida){
        return 0;}

        let diferencaMs = this.dataSaida.getTime() - this.dataEntrada.getTime();
        return Math.floor(diferencaMs / 1000 / 60);
    
    }
    calcularValor(): number{
        return this.calcularTempo() * 0.5;
    }
  realizarPagamento(){
    let valor = this.calcularValor();
    console.log ('valor total a pagar: ' + valor.toFixed(2));
      this.pagamentoConcluido = true;
      console.log('pagamento concluido com sucesso');
    }
}
   

let carro = new Veiculo('ABC-1234', 'Civic' , 'Preto');

let entrada = new Date();
let saida = new Date(entrada.getTime() + 30 * 60 * 1000); // 30 minutos

let registro = new Registro(carro, entrada, saida);

registro.realizarPagamento();

console.log('tempo: ' + registro.calcularTempo() + ' minutos');
console.log('valor: R$' + registro.calcularValor().toFixed(2));

