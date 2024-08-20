export class Camera {
    private lente: string;
    private material: string;
    private consumo: number;
    
    //constructor
    public constructor(_lente: string, _material: string,  _consumo: number){
        this.lente = _lente;
        this.material = _material;
        this.consumo = _consumo;
        
    }
    //MÉTODOS GET E SET
    public getLente(): string {
        return this.lente;
    }
    public setLente(_lente: string): void{
        this.lente = _lente;
    }

    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(_material : string): void{
        this.material = _material;
    }
    
    public getConsumo(): number {
        return this.consumo;
    }
    public setConsumo(_consumo: number): void{
        this.consumo = _consumo;
    }

    //MÉTODOS DIAGRAMA
    public capturaImagem(): void{
        console.log(`A imagem está sendo capturada`);
    }
    public capturaAudio(): void{
        console.log(`O aúdio foi capturado na filmagem`);
    }

}