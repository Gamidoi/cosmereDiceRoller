import {Pressable, View, Text} from "react-native";
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

export default function DiceSelector(dice: DiceBoxProps) {

    function selecterBox(theDie: string) {
        let plusd20 = dice.d20;
        let plusd12 = dice.d12;
        let plusd10 = dice.d10;
        let plusd8 = dice.d8;
        let plusd6 = dice.d6;
        let plusd4 = dice.d4;
        let plusMod = dice.mod;
        let minusd20 = dice.d20;
        let minusd12 = dice.d12;
        let minusd10 = dice.d10;
        let minusd8 = dice.d8;
        let minusd6 = dice.d6;
        let minusd4 = dice.d4;
        let minusMod = dice.mod;

        let plusd20adv = dice.advantageDice.d20;
        let plusd12adv = dice.advantageDice.d12;
        let plusd10adv = dice.advantageDice.d10;
        let plusd8adv = dice.advantageDice.d8;
        let plusd6adv = dice.advantageDice.d6;
        let plusd4adv = dice.advantageDice.d4;
        let plusModadv = dice.advantageDice.mod;
        let minusd20adv = dice.advantageDice.d20;
        let minusd12adv = dice.advantageDice.d12;
        let minusd10adv = dice.advantageDice.d10;
        let minusd8adv = dice.advantageDice.d8;
        let minusd6adv = dice.advantageDice.d6;
        let minusd4adv = dice.advantageDice.d4;
        let minusModadv = dice.advantageDice.mod;

        let qtyOfDie = 0;
        let qtyOfDieAdv = 0;

        switch(theDie){
            case "d20":
                plusd20 += 1;
                minusd20 -= 1;
                plusd20adv += 1;
                minusd20adv -= 1;
                qtyOfDie = dice.d20;
                qtyOfDieAdv = dice.advantageDice.d20;
                break;
            case "d12":
                plusd12 += 1;
                minusd12 -= 1;
                plusd12adv += 1;
                minusd12adv -= 1;
                qtyOfDie = dice.d12;
                qtyOfDieAdv = dice.advantageDice.d12;
                break;
            case "d10":
                plusd10 += 1;
                minusd10 -= 1;
                plusd10adv += 1;
                minusd10adv -= 1;
                qtyOfDie = dice.d10;
                qtyOfDieAdv = dice.advantageDice.d10;
                break;
            case "d8":
                plusd8 += 1;
                minusd8 -= 1;
                plusd8adv += 1;
                minusd8adv -= 1;
                qtyOfDie = dice.d8;
                qtyOfDieAdv = dice.advantageDice.d8;
                break;
            case "d6":
                plusd6 += 1;
                minusd6 -= 1;
                plusd6adv += 1;
                minusd6adv -= 1;
                qtyOfDie = dice.d6;
                qtyOfDieAdv = dice.advantageDice.d6;
                break;
            case "d4":
                plusd4 += 1;
                minusd4 -= 1;
                plusd4adv += 1;
                minusd4adv -= 1;
                qtyOfDie = dice.d4;
                qtyOfDieAdv = dice.advantageDice.d4;
                break;
            case "mod":
                plusMod += 1;
                minusMod -= 1;
                plusModadv += 1;
                minusModadv -= 1;
                qtyOfDie = dice.mod;
                qtyOfDieAdv = dice.advantageDice.mod;
        }

        return (<View style={styles.moreLessButtonBox}>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress = {
                        () => {
                            dice.setDiceSet(new setOfDice(plusd20, plusd12, plusd10, plusd8, plusd6, plusd4, plusMod));
                        }}
                    style={styles.moreButton}>
                    <Text style={styles.standardText}>More</Text>
                </Pressable>
                <Text style={[styles.standardText, styles.numberDisplay]}>{qtyOfDie}</Text>
                <Pressable
                    onPress = {
                        () => { if (qtyOfDie != 0) {
                            dice.setDiceSet(new setOfDice(minusd20, minusd12, minusd10, minusd8, minusd6, minusd4, minusMod));
                            if (qtyOfDieAdv == qtyOfDie){
                                dice.setAdvantageDice(new setOfDice(minusd20adv, minusd12adv, minusd10adv, minusd8adv, minusd6adv, minusd4adv, minusModadv));
                            } else if (Math.abs(qtyOfDieAdv) == qtyOfDie){
                                dice.setAdvantageDice(new setOfDice(plusd20adv, plusd12adv, plusd10adv, plusd8adv, plusd6adv, plusd4adv, plusModadv));
                            }
                        }}}
                    style={styles.lessButton}>
                    <Text style={styles.standardText}>Less</Text></Pressable>
            </View>
            <View style={{alignSelf: "center"}}><Text style={{color: "white"}}>{theDie}!!</Text></View>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress = {
                        () => { if (qtyOfDieAdv < qtyOfDie) {
                            dice.setAdvantageDice(new setOfDice(plusd20adv, plusd12adv, plusd10adv, plusd8adv, plusd6adv, plusd4adv, plusModadv));
                        }}}
                    style={styles.moreButton}>
                    <Text style={styles.standardText}>Adv</Text>
                </Pressable>
                <Text style={[styles.standardText, styles.numberDisplay]}>{qtyOfDieAdv}</Text>
                <Pressable
                    onPress = {
                        () => { if (Math.abs(qtyOfDieAdv - 1)  <= qtyOfDie) {
                            dice.setAdvantageDice(new setOfDice(minusd20adv, minusd12adv, minusd10adv, minusd8adv, minusd6adv, minusd4adv, minusModadv));
                        }}}
                    style={styles.lessButton}>
                    <Text style={styles.standardText}>DAdv</Text></Pressable>
            </View>
        </View>)
    }

    return (<View style={{flex: 1, flexDirection: "row"}}>
        {selecterBox("d20")}
        {selecterBox("d12")}
        {selecterBox("d10")}
        {selecterBox("d8")}
        {selecterBox("d6")}
        {selecterBox("d4")}
        {selecterBox("mod")}
    </View>)
}