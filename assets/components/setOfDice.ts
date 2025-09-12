export class setOfDice{
    d20: number;
    d12: number;
    d10: number;
    d8: number;
    d6: number;
    d4: number;
    mod: number;

    constructor(set20: number = 0, set12: number = 0, set10: number = 0, set8: number = 0, set6: number = 0, set4: number = 0, setMod: number = 0){
        this.d20 = set20;
        this.d12 = set12;
        this.d10 = set10;
        this.d8 = set8;
        this.d6 = set6;
        this.d4 = set4;
        this.mod = setMod;
    }
}