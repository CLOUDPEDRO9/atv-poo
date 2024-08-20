export class Tv {
    private configuracaoImagem: string;
    private marca: string;
    private polegadas: number;
    
    //constructor
    public constructor(_configuracaoImagem: string, _marca: string, _polegadas: number){
        this.configuracaoImagem = _configuracaoImagem;
        this.marca = _marca;
        this.polegadas = _polegadas;
    }
    //MÉTODOS GET E SET
    public getConfiguracaoImagem(): string {
        return this.configuracaoImagem;
    }
    public setConfiguracaoImagem(_configuracaoImagem : string): void{
        this.configuracaoImagem = _configuracaoImagem;
    }

    public getMarca(): string {
        return this.marca;
    }
    public setMarca(_marca: string): void{
        this.marca = _marca;
    }

    public getPolegadas(): number {
        return this.polegadas;
    }
    public setPolegadas(_polegadas: number): void{
        this.polegadas = _polegadas;
    }

    //MÉTODOS DIAGRAMA
    public transmissaoImagem(): void{
        console.log(`A TV está transmitindo um filme`);
    }
    public ajusteVolume(): void{
        console.log(`o volume está sendo ajustado`);
    }

}