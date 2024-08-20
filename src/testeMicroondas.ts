//nome:Letícia Calixto Diniz
import { Microondas } from './Microondas';

const microondas1 : Microondas = new Microondas (25, 22, `Panasonic` ); 

console.log(microondas1.getPotencia());
console.log(microondas1.getVolumeInterno());
console.log(microondas1.getMarca());
microondas1.aquecer();
microondas1.descongelamento();
