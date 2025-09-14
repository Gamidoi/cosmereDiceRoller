import {Pressable, Text, View} from "react-native";
import {styles} from "@/assets/components/resumeStyleSheet";
import DiceSelector from "@/assets/components/diceSelector";
import {setOfDice} from "@/assets/components/setOfDice";
import {useState} from "react";


export type DiceBoxProps = {
    hasDamageRoll: boolean;
    setHasDamageRoll: Function;
    d20: number;
    d12: number;
    d10: number;
    d8: number;
    d6: number;
    d4: number;
    mod: number;
    setDiceSet: Function;
}

export default function DamageRollComponent(dice: DiceBoxProps) {
    let [damageRollSaver, setDamageRollSaver] = useState(new setOfDice());

    return (<View style={{flex: 0.5}}>
        <Pressable onPress={() => {
            if (dice.hasDamageRoll) {
                setDamageRollSaver(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8, dice.d6, dice.d4, dice.mod));
                dice.setDiceSet(new setOfDice());
            } else {
                dice.setDiceSet(damageRollSaver);
            }
            dice.setHasDamageRoll(!dice.hasDamageRoll)
        }}>
            <Text style={[
                styles.subHeader, {
                    color: dice.hasDamageRoll ? "#44aa66" : "maroon",
                    marginTop:  dice.hasDamageRoll ? 17 : 30,
                    borderWidth: 3,
                    borderColor: "#ffffff",
                    paddingHorizontal: 15,
                }]}>Roll Damage?    {dice.hasDamageRoll ? "Yes!" : "no."}</Text>
        </Pressable>
        {dice.hasDamageRoll &&
            <DiceSelector d20={dice.d20} d12={dice.d12} d10={dice.d10} d8={dice.d8} d6={dice.d6} d4={dice.d4} mod={dice.mod} setDiceSet={dice.setDiceSet}/>
        }


    </View>)
}