export class ArCondicionado {
    private material: string;
    private consumo: number;
    private componentes: string;
    
    
    //constructor
    public constructor(_material: string, _consumo: number, _componentes: string){
        this.material = _material;
        this.consumo = _consumo;
        this.componentes = _componentes;
        
    }
    //MÉTODOS GET E SET
    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(_material: string): void{
        this.material = _material;
    }

    public getConsumo(): number {
        return this.consumo;
    }
    public setConsumo(_consumo : number): void{
        this.consumo = _consumo;
    }

    public getComponentes(): string {
        return this.componentes;
    }
    public setComponentes(_componentes: string): void{
        this.componentes = _componentes;
    }
    

    //MÉTODOS DIAGRAMA
    public resfriar(): void{
        console.log(`O ar condicionado está resfriando`);
    }
    public ventilar(): void{
        console.log(`O ar condicionado está ventilando o ambiente`);
    }

}