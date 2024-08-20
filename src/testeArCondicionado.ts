import { ArCondicionado } from './ArCondicionado';

const arcondiconado1 : ArCondicionado = new ArCondicionado ('Plástico', 25, 'Evaporador'); 
console.log(arcondiconado1.getMaterial());
console.log(arcondiconado1.getConsumo());
console.log(arcondiconado1.getComponentes());
arcondiconado1.resfriar();
arcondiconado1.ventilar();