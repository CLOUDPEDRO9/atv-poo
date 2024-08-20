import { Triturador } from './Triturador';

const triturador1 : Triturador = new Triturador ('aço', 'Monofásico', 'plástico')

console.log(triturador1.getLamina());
console.log(triturador1.getMotor());
console.log(triturador1.getMaterial());
triturador1.liga();
triturador1.desliga();
