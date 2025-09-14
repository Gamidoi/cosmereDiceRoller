import {View, Text} from "react-native";
import DiceSelector from "@/assets/components/diceSelector";
import {styles} from "@/assets/components/styleSheet";
import {setOfDice} from "@/assets/components/setOfDice";

export type DiceBoxProps = {
    d20: number;
    d12: number;
    d10: number;
    d8: number;
    d6: number;
    d4: number;
    mod: number;
    setDiceSet: Function;
    advantageDice: setOfDice;
    setAdvantageDice: Function;
}

export default function AttackRollComponent(dice: DiceBoxProps) {
    return (<View style={{}}>
        <Text style={styles.subHeader}>Skill or Attack Roll</Text>
        <DiceSelector
            d20={dice.d20} d12={dice.d12} d10={dice.d10} d8={dice.d8} d6={dice.d6} d4={dice.d4} mod={dice.mod}
            setDiceSet={dice.setDiceSet} advantageDice={dice.advantageDice} setAdvantageDice={dice.setAdvantageDice}/>
    </View>)
}