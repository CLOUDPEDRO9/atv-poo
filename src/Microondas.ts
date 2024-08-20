export class Microondas{

    private potencia: number;
    private volumeInterno: number;
    private marca: string;
   
    public constructor(_potencia: number, _volumeInterno: number, _marca: string){
        this.potencia= _potencia;
        this.volumeInterno = _volumeInterno;
        this.marca = _marca;
    }

    public getPotencia(): number{
        return this.potencia;
    }

    public setPotencia (_potencia: number):void{
        this.potencia= _potencia;
    }

    public getVolumeInterno(): number{
        return this.volumeInterno;
    }
    public setVolumeInterno (_volumeInterno: number):void{
        this.volumeInterno = _volumeInterno;
    }

    public getMarca(): string{
        return this.marca;
    }

    public setMarca (_marca: string):void{
        this.marca = _marca;
    }
    public aquecer(): void{
        console.log(`O microondas está aquecendo!! `);
    }
    public descongelamento(): void{
        console.log(`O microondas esta descongelando o alimento!! `);
    }

}
