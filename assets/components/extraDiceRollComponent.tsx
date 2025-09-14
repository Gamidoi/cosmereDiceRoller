import {Pressable, Text, View} from "react-native";
import {styles} from "@/assets/components/styleSheet";
import DiceSelector from "@/assets/components/diceSelector";
import {setOfDice} from "@/assets/components/setOfDice";
import {useState} from "react";


export type DiceBoxProps = {
    hasExtraDiceRoll: boolean;
    setHasExtraDiceRoll: Function;
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

export default function ExtraDiceRollComponent(dice: DiceBoxProps) {
    let [extraDiceRollSaver, setExtraDiceRollSaver] = useState(new setOfDice());

    return (<View style={{margin: 10}}>
    <Pressable onPress={() => {
        if (dice.hasExtraDiceRoll) {
            setExtraDiceRollSaver(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8, dice.d6, dice.d4, dice.mod));
            dice.setDiceSet(new setOfDice());
        } else {
            dice.setDiceSet(extraDiceRollSaver);
        }
        dice.setHasExtraDiceRoll(!dice.hasExtraDiceRoll)
    }}>
    <Text style={[
            styles.subHeader, {
        color: dice.hasExtraDiceRoll ? "#44aa66" : "maroon",
            borderWidth: 3,
            borderColor: "#ffffff",
            paddingHorizontal: 15,
    }]}>Roll Extra Dice?    {dice.hasExtraDiceRoll ? "Yes!" : "no."}</Text>
        </Pressable>
        {dice.hasExtraDiceRoll &&
            <DiceSelector
                d20={dice.d20} d12={dice.d12} d10={dice.d10} d8={dice.d8} d6={dice.d6} d4={dice.d4} mod={dice.mod}
                setDiceSet={dice.setDiceSet} advantageDice={dice.advantageDice} setAdvantageDice={dice.setAdvantageDice} />
}


    </View>)
}