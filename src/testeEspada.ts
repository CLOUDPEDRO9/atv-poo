//nome:Letícia Calixto Diniz
import { Espada } from './Espada';

const espada1 : Espada = new Espada (25, 'Afiada', 'Metal'); 

console.log(espada1.getTamanho());
console.log(espada1.getLamina());
console.log(espada1.getMaterial());
espada1.ataque();
espada1.defesa();
