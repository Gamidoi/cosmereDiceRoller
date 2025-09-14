import {setOfDice} from "@/assets/components/setOfDice";



export function rollNewResult(attack: setOfDice, damage: setOfDice, extra: setOfDice, plot: boolean): string {
    let resultOutput: string = "Roll Result: \n";
    let currentDieRoll = 0;
    let valueSum = 0;

    let plotRoll = Math.ceil(6 * Math.random());
    if ((plotRoll == 2 || plotRoll == 4) && plot) {valueSum += plotRoll;}

    // Skill/Attack dice roll
    stringPerRollPerDieSize("d20", attack.d20);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d12", attack.d12);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d10", attack.d10);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d8", attack.d8);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d6", attack.d6);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d4", attack.d4);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("mod", attack.mod);
    valueSum += currentDieRoll;

    resultOutput += "    \nTotal Skill/Attack Roll: " + valueSum + "\n";

    // damage dice roll
    if (damage.d20 + damage.d12 + damage.d10 + damage.d8 + damage.d6 + damage.d4 + damage.mod > 0) {
        valueSum = 0;

        stringPerRollPerDieSize("d20", damage.d20);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d12", damage.d12);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d10", damage.d10);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d8", damage.d8);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d6", damage.d6);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d4", damage.d4);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("mod", damage.mod);
        valueSum += currentDieRoll;

        resultOutput += "    \nTotal Damage Roll: " + valueSum + "\n";
    }

    // extra dice roll
    if (extra.d20 + extra.d12 + extra.d10 + extra.d8 + extra.d6 + extra.d4 + extra.mod > 0) {
        valueSum = 0;

        stringPerRollPerDieSize("d20", extra.d20);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d12", extra.d12);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d10", extra.d10);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d8", extra.d8);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d6", extra.d6);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d4", extra.d4);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("mod", extra.mod);
        valueSum += currentDieRoll;

        resultOutput += "    \nTotal Extra Roll: " + valueSum + "\n";
    }



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


    function stringPerRollPerDieSize(die: string, quantity: number){
        if (die != "mod"){
            let dieSize = parseInt(die.substring(1));
            if (quantity > 0){
                resultOutput += "    " + die;
                if (quantity > 1){
                    resultOutput += "s";
                }}
            for (let i = 0; i < quantity; i++) {
                resultOutput += ", ";
                let currentDieRoll = Math.ceil(dieSize * Math.random());
                resultOutput += currentDieRoll;
                valueSum += currentDieRoll;
            }
        } else {
            if (quantity > 0){
                resultOutput += "    +" + quantity;
                valueSum += quantity;
            }
        }
    }
}

