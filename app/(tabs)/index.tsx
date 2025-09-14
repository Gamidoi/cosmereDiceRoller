import {ScrollView, Text, View} from "react-native";
import {styles} from "@/assets/components/resumeStyleSheet";
import AttackRollComponent from "@/assets/components/attackRollComponent";
import {useState} from "react";
import {setOfDice} from "@/assets/components/setOfDice";
import DiceRollButtonAndDisplay from "@/assets/components/diceRollButtonAndDisplay";
import RaisingTheStakes from "@/assets/components/raisingTheStakes";
import DamageRollComponent from "@/assets/components/DamageRollComponent";
import ExtraDiceRollComponent from "@/assets/components/extraDiceRollComponent";



export default function Index() {
    let [attackRoll, setAttackRoll] = useState(new setOfDice(1));
    let [hasDamageRoll, setHasDamageRoll] = useState(false);
    let [damageRoll, setDamageRoll] = useState(new setOfDice());
    let [hasExtraDiceRoll, setHasExtraDiceRoll] = useState(false);
    let [extraDiceRoll, setExtraDiceRoll] = useState(new setOfDice());

    let [plot, setPlot] = useState<boolean>(false);

    return (
        <ScrollView style={{flex: 1, backgroundColor: "black"}}>
            <View style={{alignItems: "center", flexDirection: "column"}}>
                <Text style={styles.header}>Let's Roll!!</Text>
                <AttackRollComponent d20={attackRoll.d20} d12={attackRoll.d12} d10={attackRoll.d10} d8={attackRoll.d8} d6={attackRoll.d6} d4={attackRoll.d4} mod={attackRoll.mod}  setDiceSet={setAttackRoll} />
                <DamageRollComponent hasDamageRoll={hasDamageRoll} setHasDamageRoll={setHasDamageRoll} d20={damageRoll.d20} d12={damageRoll.d12} d10={damageRoll.d10} d8={damageRoll.d8} d6={damageRoll.d6} d4={damageRoll.d4} mod={damageRoll.mod} setDiceSet={setDamageRoll} />

                <ExtraDiceRollComponent hasExtraDiceRoll={hasExtraDiceRoll} setHasExtraDiceRoll={setHasExtraDiceRoll} d20={extraDiceRoll.d20} d12={extraDiceRoll.d12} d10={extraDiceRoll.d10} d8={extraDiceRoll.d8} d6={extraDiceRoll.d6} d4={extraDiceRoll.d4} mod={extraDiceRoll.mod} setDiceSet={setExtraDiceRoll} />

                <RaisingTheStakes plot={plot} setPlot={setPlot} />
                <DiceRollButtonAndDisplay attack={attackRoll} damage={damageRoll} extra={extraDiceRoll} plot={plot} />

            </View>
        </ScrollView>
    );
}


