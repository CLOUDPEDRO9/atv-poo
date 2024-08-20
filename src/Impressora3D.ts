export class Impressora3D {
    private volumeImpressao: number;
    private tipoFilamento: string;
    private resolucaoImpressao: number;
    
    //constructor
    public constructor(_volumeImpressao: number, _tipoFilamento: string, _resolucaoImpressao: number){
        this.volumeImpressao = _volumeImpressao;
        this.tipoFilamento = _tipoFilamento;
        this.resolucaoImpressao = _resolucaoImpressao;
    }
    //MÉTODOS GET E SET
    public getVolumeImpressao(): number {
        return this.volumeImpressao;
    }
    public setVolumeImpressao(_volumeImpressao: number): void{
        this.volumeImpressao = _volumeImpressao;
    }

    public getTipoFilamento(): string {
        return this.tipoFilamento;
    }
    public setTipoFilamento(_tipoFilamento: string): void{
        this.tipoFilamento = _tipoFilamento;
    }
    public getResolucaoImpressao(): number {
        return this.resolucaoImpressao;
    }
    public setResolucaoImpressao(_resolucaoImpressao : number): void{
        this.resolucaoImpressao = _resolucaoImpressao;
    }

    //MÉTODOS DIAGRAMA
    public imprimir(): void{
        console.log(`A impressora da Sony está imprimindo`);
    }
    public pausarImpressao(): void{
        console.log(`A impressão está pausada`);
    }
}