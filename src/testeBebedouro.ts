import { Bebedouro } from './Bebedouro';

//INSTANCIAR (CRIAR OBJETO)
const bebedouro1 : Bebedouro = new Bebedouro (25, 'Plástico', 16); 

console.log(bebedouro1.getCapacidadeArmazenamento());
console.log(bebedouro1.getControleAgua());
console.log(bebedouro1.getMaterial());
bebedouro1.liberarAgua();
bebedouro1.armazenarAgua();