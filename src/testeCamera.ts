import { Camera } from './Camera';

//INSTANCIAR (CRIAR OBJETO)
const camera1 : Camera = new Camera ('Monofocais', 'Plástico', 10); 

console.log(camera1.getLente());
console.log(camera1.getMaterial());
console.log(camera1.getConsumo());
camera1.capturaImagem();
camera1.capturaAudio();