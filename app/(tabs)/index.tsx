import {ScrollView, Text, View} from "react-native";
import {styles} from "@/assets/components/resumeStyleSheet";
import AttackRollComponent from "@/assets/components/attackRollComponent";
import {useState} from "react";
import {setOfDice} from "@/assets/components/setOfDice";
import DiceRollButtonAndDisplay from "@/assets/components/diceRollButtonAndDisplay";
import RaisingTheStakes from "@/assets/components/raisingTheStakes";



export default function Index() {
    let [attackRoll, setAttackRoll] = useState(new setOfDice())

    let [plot, setPlot] = useState<boolean>(false)

    return (
        <ScrollView style={{flex: 1, backgroundColor: "black"}}>
            <View style={{alignItems: "center",}}>
                <Text style={styles.header}>Let's Roll!!</Text>
                <AttackRollComponent d20={attackRoll.d20} d12={attackRoll.d12} d10={attackRoll.d10} d8={attackRoll.d8} d6={attackRoll.d6} d4={attackRoll.d4} mod={attackRoll.mod}  setDiceSet={setAttackRoll} />

                <RaisingTheStakes plot={plot} setPlot={setPlot} />
                <DiceRollButtonAndDisplay attack={attackRoll} damage={new setOfDice()} extra={new setOfDice()} plot={plot} />

            </View>
        </ScrollView>
    );
}


