import {setOfDice} from "@/assets/components/setOfDice";



export function rollNewResult(attack: setOfDice, attackAdv: setOfDice, damage: setOfDice, damageAdv: setOfDice, extra: setOfDice, extraAdv: setOfDice, plot: boolean, plotAdv: number): string {
    let resultOutput: string = "Roll Result: \n";
    let currentDieRoll = 0;
    let valueSum = 0;

    let plotRoll = Math.ceil(6 * Math.random());
    let plotRollAdv = Math.ceil(6 * Math.random());

    // Skill/Attack dice roll
    stringPerRollPerDieSize("d20", attack.d20, attackAdv.d20);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d12", attack.d12, attackAdv.d12);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d10", attack.d10, attackAdv.d10);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d8", attack.d8, attackAdv.d8);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d6", attack.d6, attackAdv.d6);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("d4", attack.d4, attackAdv.d4);
    valueSum += currentDieRoll;
    stringPerRollPerDieSize("mod", attack.mod, attackAdv.mod);
    valueSum += currentDieRoll;

    resultOutput += "    \nTotal Skill/Attack Roll: " + valueSum;
    if (plotRoll == 1 && plotAdv == 0){
        resultOutput += " +2";
    } else if (plotRoll == 2 && plotAdv == 0){
        resultOutput += " +4";
    }
    resultOutput += "\n\n";

    // damage dice roll
    if (damage.d20 + damage.d12 + damage.d10 + damage.d8 + damage.d6 + damage.d4 + damage.mod > 0) {
        valueSum = 0;

        stringPerRollPerDieSize("d20", damage.d20, damageAdv.d20);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d12", damage.d12, damageAdv.d12);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d10", damage.d10, damageAdv.d10);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d8", damage.d8, damageAdv.d8);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d6", damage.d6, damageAdv.d6);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d4", damage.d4, damageAdv.d4);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("mod", damage.mod, damageAdv.mod);
        valueSum += currentDieRoll;

        resultOutput += "    \nTotal Damage Roll: " + valueSum + "\n\n";
    }

    // extra dice roll
    if (extra.d20 + extra.d12 + extra.d10 + extra.d8 + extra.d6 + extra.d4 + extra.mod > 0) {
        valueSum = 0;

        stringPerRollPerDieSize("d20", extra.d20, extraAdv.d20);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d12", extra.d12, extraAdv.d12);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d10", extra.d10, extraAdv.d10);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d8", extra.d8, extraAdv.d8);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d6", extra.d6, extraAdv.d6);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("d4", extra.d4, extraAdv.d4);
        valueSum += currentDieRoll;
        stringPerRollPerDieSize("mod", extra.mod, extraAdv.mod);
        valueSum += currentDieRoll;

        resultOutput += "    \nTotal Extra Roll: " + valueSum + "\n\n";
    }

    if (plot && plotAdv == 0){
        if (plotRoll == 4 || plotRoll == 3){
            resultOutput += "Fate Ignores You.";
        } else if (plotRoll > 4){
            resultOutput += "Fate Presents an Opportunity.";
        } else {
            resultOutput += "Fate Deals a Complication. (" + (2 * plotRoll) + ")";
        }
    } else if (plot && plotAdv == 1){
        resultOutput += "Fate Offers a Choice:\n";
        if (plotRoll == 4 || plotRoll == 3){
            resultOutput += "Silence : ";
        } else if (plotRoll > 4){
            resultOutput += "Opportunity : ";
        } else {
            resultOutput += "Complication(" + (2 * plotRoll) + ") : ";
        }
        if (plotRollAdv == 4 || plotRollAdv == 3){
            resultOutput += "Silence";
        } else if (plotRollAdv > 4){
            resultOutput += "Opportunity";
        } else {
            resultOutput += "Complication(" + (2 * plotRollAdv) + ")";
        }
    } else if (plot && plotAdv == -1){
        resultOutput += "Fate Moves Against You:\n";
        if (plotRoll < 3 || plotRollAdv < 3){
            resultOutput += "And Forces a Complication (" + ((plotRoll == 1 || plotRollAdv == 1) ? "2" : "4") + ").";
        } else if (plotRoll > 4 && plotRollAdv > 4){
            resultOutput += "But Cannot Prevent an Opportunity.";
        } else {
            resultOutput += "And Prevents an Opportunity.";
        }
    }

    return resultOutput;


    function stringPerRollPerDieSize(die: string, quantity: number, advantage: number){
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
                let advantageDieRoll = Math.ceil(dieSize * Math.random());

                if (Math.abs(advantage) > i){
                    resultOutput += "(";
                    if (advantage > 0){
                        if (currentDieRoll > advantageDieRoll){
                            resultOutput += currentDieRoll + " beats " + advantageDieRoll;
                        } else {
                            resultOutput += advantageDieRoll + " beats " + currentDieRoll;
                            currentDieRoll = advantageDieRoll;
                        }
                    } else if (advantage < 0){
                        if (currentDieRoll < advantageDieRoll){
                            resultOutput += currentDieRoll + " beats " + advantageDieRoll;
                        } else {
                            resultOutput += advantageDieRoll + " beats " + currentDieRoll;
                            currentDieRoll = advantageDieRoll;
                        }
                    }
                    resultOutput += ")"
                } else {
                    resultOutput += currentDieRoll;
                }

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

