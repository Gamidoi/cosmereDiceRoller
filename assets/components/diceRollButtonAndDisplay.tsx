import {setOfDice} from "@/assets/components/setOfDice";
import {View, Text, Pressable} from "react-native";
import {styles} from "@/assets/components/styleSheet";
import {useState} from "react";
import {rollNewResult} from "@/assets/components/rollNewResult";


export type DiceRollProps = {
    attack: setOfDice;
    attackAdv: setOfDice;
    damage: setOfDice;
    damageAdv: setOfDice;
    extra: setOfDice;
    extraAdv: setOfDice;
    plot: boolean;
    plotAdv: number;
}

export default function DiceRollButtonAndDisplay(roll: DiceRollProps) {
    let [lastRoll, setLastRoll] = useState<string>("")
    let [secondRoll, setSecondRoll] = useState<string>("")
    let [thirdRoll, setThirdRoll] = useState<string>("")

    function rotateRollResults(){
        setThirdRoll(secondRoll);
        setSecondRoll(lastRoll);
    }


    return (<View style={{marginTop: 15}}>
        <Pressable style={{
            backgroundColor: "purple",
            padding: 10,
            borderColor: "white",
            borderWidth: 3,
            width: 200,
            alignSelf: "center",
        }}
        onPress={() => {
            rotateRollResults();
            setLastRoll(rollNewResult(roll.attack, roll.attackAdv, roll.damage, roll.damageAdv, roll.extra, roll.extraAdv, roll.plot, roll.plotAdv));
        }}>
            <Text style={styles.standardText}>ROOOOLLLLLLLLLLLL</Text>
        </Pressable>
        <Text style={styles.subHeader}>Roll Results</Text>
        <Text style={[styles.standardText, styles.rollResultOutput]}>{lastRoll}</Text>
        <Text style={[styles.standardText, styles.rollResultOutput]}>{secondRoll}</Text>
        <Text style={[styles.standardText, styles.rollResultOutput]}>{thirdRoll}</Text>
    </View>)}