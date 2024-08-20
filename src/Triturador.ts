export class Triturador{

    private laminas: string;
    private motor: string;
    private material: string;
   
    public constructor( _laminas: string, _motor: string, _material: string){
        this.laminas = _laminas;
        this.motor= _motor;
        this.material = _material;
    }

    public getLamina(): string{
        return this.laminas;
    }
    public setLaminas (_laminas: string):void{
        this.laminas = _laminas;
    }

    public getMotor(): string{
        return this.motor;
    }

    public setMotor (_motor: string):void{
        this.motor= _motor;
    }

    public getMaterial(): string{
        return this.material;
    }

    public setMaterial (_material: string):void{
        this.material = _material;
    }

    
    public liga(): void{
        console.log(`O tritutador está ligado !! `);
    }

    public desliga(): void{
        console.log(`O triturador está sendo desliagdo`);
    }
}
