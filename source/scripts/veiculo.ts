//classes sistema
export class Veiculo{
    placa : string;
    modelo : string;
    cor: string;

  constructor(placa : string , modelo: string, cor : string){ 
  this.placa = placa;
  this.modelo = modelo;
  this.cor = cor;
  }
 
}

  class Registro{
    veiculo : Veiculo;
    dataEntrada : Date ;
    dataSaida : Date;
    pagamentoConcluido : boolean = false;

    constructor(veiculo : Veiculo, dataEntrada: Date , dataSaida : Date){
      this.veiculo = veiculo;
      this.dataEntrada = dataEntrada;
      this.dataSaida = dataSaida;

    }
   
    calcularTempo(): number{
      if(!this.dataSaida){
        return 0;
      }
        let diferencaMs : number = this.dataSaida.getTime()- this.dataEntrada.getTime();

        let minutos = Math.floor(diferencaMs/1000/60);
        return minutos;
      
    }
calcularValor(): number{
  let tempo = this.calcularTempo();
  let valorPorMinuto = 0.5;
  return tempo * valorPorMinuto;


  }
  realizarPagamento(){
    let valor = this.calcularValor();
    console.log ('valor total a pagar: ' + valor.toFixed(2));
      this.pagamentoConcluido = true;
      console.log('pagamento concluido com sucesso');
    }
   
  }


 

  let carro = new Veiculo('ABC-1234', 'Civic', 'Preto');

let entrada = new Date();  // simula 40 minutos depois

let saida = new Date(entrada.getTime() + 30 * 60 * 1000);

let registro = new Registro(carro, entrada, saida);

console.log('entrada veiculo: ' + 'placa: ' + carro.placa + ','+ 'modelo: ' + carro.modelo+ ', cor: ' + carro.cor + ' entrada:  ' + entrada );
console.log('saida: ' + 'placa: ' + carro.placa + ' , ' + 'modelo: ' + carro.modelo + ' , ' + ' cor: ' + carro.cor  + ' , ' + saida);





  