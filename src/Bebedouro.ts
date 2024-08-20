export class Bebedouro {
    private capacidadeArmazenamento: number;
    private material: string;
    private controleTemperatura: number;
    
    
    //constructor
    public constructor(_capacidadeArmazenamento: number, _material: string, _controleTemperatura: number){
        this.capacidadeArmazenamento = _capacidadeArmazenamento;
        this.material = _material;
        this.controleTemperatura = _controleTemperatura;
    }
    //MÉTODOS GET E SET
    public getCapacidadeArmazenamento(): number {
        return this.capacidadeArmazenamento;
    }
    public setCapacidadeArmazenamento(_capacidadeArmazenamento: number): void{
        this.capacidadeArmazenamento = _capacidadeArmazenamento;
    }

    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(_material : string): void{
        this.material = _material;
    }

    public getControleAgua(): number {
        return this.controleTemperatura;
    }
    public setControlAgua(_controleTemperatura: number): void{
        this.controleTemperatura = _controleTemperatura;
    }
    

    //MÉTODOS DIAGRAMA
    public liberarAgua(): void{
        console.log(`O bebodouro está liberando água`);
    }
    public armazenarAgua(): void{
        console.log(`O bebedouro está armazenando água`);
    }
}