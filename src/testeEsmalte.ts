//IMPORTAR A CLASSE QUE QUERO UTILIZAR
import { Esmalte } from './Esmalte';

//INSTANCIAR (CRIAR OBJETO)
const esmalte1 : Esmalte = new Esmalte ('Verde', 'Simples', 25); 

console.log(esmalte1.getCor());
console.log(esmalte1.getEmbalagem());
console.log(esmalte1.getQuantidade());
esmalte1.pintar();
esmalte1.protecao();