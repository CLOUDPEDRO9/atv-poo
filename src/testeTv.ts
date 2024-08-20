import { Tv } from './Tv';

//INSTANCIAR (CRIAR OBJETO)
const tv1 : Tv = new Tv ('Modo cinema', 'Samsung', 65); 

console.log(tv1.getConfiguracaoImagem());
console.log(tv1.getMarca());
console.log(tv1.getPolegadas());
tv1.transmissaoImagem();
tv1.ajusteVolume();