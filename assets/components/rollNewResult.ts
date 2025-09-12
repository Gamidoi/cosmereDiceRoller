import {setOfDice} from "@/assets/components/setOfDice";



export function rollNewResult(attack: setOfDice, damage: setOfDice, extra: setOfDice, plot: boolean): string {
    let resultOutput: string = "Roll Result: \nd20";
    let currentDieRoll = 0;
    let attackValueSum = 0;

    let plotRoll = Math.ceil(6 * Math.random());
    if ((plotRoll == 2 || plotRoll == 4) && plot) {attackValueSum += plotRoll;}

    if (attack.d20 > 1){resultOutput += "s";}
    for (let i = 0; i < attack.d20; i++) {
        resultOutput += ", ";
        currentDieRoll = Math.ceil(20 * Math.random());
        resultOutput += currentDieRoll;
        attackValueSum += currentDieRoll;
    }

    if (attack.d12 > 0){
        resultOutput += "    d12";
        if (attack.d12 > 1){
            resultOutput += "s";
    }}
    for (let i = 0; i < attack.d12; i++) {
        resultOutput += ", ";
        currentDieRoll = Math.ceil(12 * Math.random());
        resultOutput += currentDieRoll;
        attackValueSum += currentDieRoll;
    }

    if (attack.d10 > 0){
        resultOutput += "    d10";
        if (attack.d10 > 1){
            resultOutput += "s";
        }}
    for (let i = 0; i < attack.d10; i++) {
        resultOutput += ", ";
        currentDieRoll = Math.ceil(10 * Math.random());
        resultOutput += currentDieRoll;
        attackValueSum += currentDieRoll;
    }

    if (attack.d8 > 0){
        resultOutput += "    d8";
        if (attack.d8 > 1){
            resultOutput += "s";
        }}
    for (let i = 0; i < attack.d8; i++) {
        resultOutput += ", ";
        currentDieRoll = Math.ceil(8 * Math.random());
        resultOutput += currentDieRoll;
        attackValueSum += currentDieRoll;
    }

    if (attack.d6 > 0){
        resultOutput += "    d6";
        if (attack.d6 > 1){
            resultOutput += "s";
        }}
    for (let i = 0; i < attack.d6; i++) {
        resultOutput += ", ";
        currentDieRoll = Math.ceil(6 * Math.random());
        resultOutput += currentDieRoll;
        attackValueSum += currentDieRoll;
    }

    if (attack.d4 > 0){
        resultOutput += "    d4";
        if (attack.d4 > 1){
            resultOutput += "s";
        }}
    for (let i = 0; i < attack.d4; i++) {
        resultOutput += ", ";
        currentDieRoll = Math.ceil(4 * Math.random());
        resultOutput += currentDieRoll;
        attackValueSum += currentDieRoll;
    }

    if (attack.mod > 0){
        resultOutput += "    +" + attack.mod;
        attackValueSum += attack.mod;
       }

    resultOutput += "\nTotal Roll: " + attackValueSum + "\n";

    // damage dice roll


    // extra dice roll



    if (plot){
        if (plotRoll == 1 || plotRoll == 3){
            resultOutput += "\nFate Ignores You.";
        } else if (plotRoll > 4){
            resultOutput += "\nFate Presents an Opportunity.";
        } else {
            resultOutput += "\nFate Deals a Complication. (" + plotRoll + ")";
        }
    }


    return resultOutput;
}