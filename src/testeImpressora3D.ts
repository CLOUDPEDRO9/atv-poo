import { Impressora3D } from './Impressora3D';

//INSTANCIAR (CRIAR OBJETO)
const impressora3D1 : Impressora3D = new Impressora3D (250,'Nylon', 3.4); 

console.log(impressora3D1.getVolumeImpressao());
console.log(impressora3D1.getTipoFilamento());
console.log(impressora3D1.getResolucaoImpressao());
impressora3D1.imprimir();
impressora3D1.pausarImpressao();