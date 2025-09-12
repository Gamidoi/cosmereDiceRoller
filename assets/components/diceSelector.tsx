import {Pressable, View, Text} from "react-native";
import {styles} from "@/assets/components/resumeStyleSheet";
import {setOfDice} from "@/assets/components/setOfDice";

export type DiceBoxProps = {
    d20: number;
    d12: number;
    d10: number;
    d8: number;
    d6: number;
    d4: number;
    mod: number;
    //setDiceSet: () => {};
    setDiceSet: Function;
}

export default function DiceSelector(dice: DiceBoxProps) {
    return (<View style={{flex: 1, backgroundColor: "black", flexDirection: "row"}}>

        <View style={styles.moreLessButtonBox}>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress = {
                        () => {dice.setDiceSet(new setOfDice(dice.d20 + 1, dice.d12, dice.d10, dice.d8, dice.d6, dice.d4, dice.mod));
                        }}
                    style={styles.moreButton}>
                    <Text style={styles.standardText}>More</Text>
                </Pressable>
                <Text style={[styles.standardText, styles.numberDisplay]}>{dice.d20}</Text>
                <Pressable
                    onPress = {
                        () => { if (dice.d20 != 0) {
                            dice.setDiceSet(new setOfDice(dice.d20 - 1, dice.d12, dice.d10, dice.d8, dice.d6, dice.d4, dice.mod));
                    }}}
                    style={styles.lessButton}>
                    <Text style={styles.standardText}>Less</Text></Pressable>
            </View>
            <View style={{alignSelf: "center"}}><Text>D20!!</Text></View>
        </View>


        <View style={styles.moreLessButtonBox}>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress = {
                        () => {dice.setDiceSet(new setOfDice(dice.d20, dice.d12 + 1, dice.d10, dice.d8, dice.d6, dice.d4, dice.mod));
                        }}
                    style={styles.moreButton}>
                    <Text style={styles.standardText}>More</Text>
                </Pressable>
                <Text style={[styles.standardText, styles.numberDisplay]}>{dice.d12}</Text>
                <Pressable
                    onPress = {
                        () => { if (dice.d12 != 0) {
                            dice.setDiceSet(new setOfDice(dice.d20, dice.d12 - 1, dice.d10, dice.d8, dice.d6, dice.d4, dice.mod));
                        }}}
                    style={styles.lessButton}>
                    <Text style={styles.standardText}>Less</Text></Pressable>
            </View>
            <View style={{alignSelf: "center"}}><Text>D12!!</Text></View>
        </View>


        <View style={styles.moreLessButtonBox}>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress = {
                        () => {dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10 + 1, dice.d8, dice.d6, dice.d4, dice.mod));
                        }}
                    style={styles.moreButton}>
                    <Text style={styles.standardText}>More</Text>
                </Pressable>
                <Text style={[styles.standardText, styles.numberDisplay]}>{dice.d10}</Text>
                <Pressable
                    onPress = {
                        () => { if (dice.d10 != 0) {
                            dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10 - 1, dice.d8, dice.d6, dice.d4, dice.mod));
                        }}}
                    style={styles.lessButton}>
                    <Text style={styles.standardText}>Less</Text></Pressable>
            </View>
            <View style={{alignSelf: "center"}}><Text>D10!!</Text></View>
        </View>


        <View style={styles.moreLessButtonBox}>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress = {
                        () => {dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8 + 1, dice.d6, dice.d4, dice.mod));
                        }}
                    style={styles.moreButton}>
                    <Text style={styles.standardText}>More</Text>
                </Pressable>
                <Text style={[styles.standardText, styles.numberDisplay]}>{dice.d8}</Text>
                <Pressable
                    onPress = {
                        () => { if (dice.d8 != 0) {
                            dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8 - 1, dice.d6, dice.d4, dice.mod));
                        }}}
                    style={styles.lessButton}>
                    <Text style={styles.standardText}>Less</Text></Pressable>
            </View>
            <View style={{alignSelf: "center"}}><Text>D8!!</Text></View>
        </View>


        <View style={styles.moreLessButtonBox}>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress = {
                        () => {dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8, dice.d6 + 1, dice.d4, dice.mod));
                        }}
                    style={styles.moreButton}>
                    <Text style={styles.standardText}>More</Text>
                </Pressable>
                <Text style={[styles.standardText, styles.numberDisplay]}>{dice.d6}</Text>
                <Pressable
                    onPress = {
                        () => { if (dice.d6 != 0) {
                            dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8, dice.d6 - 1, dice.d4, dice.mod));
                        }}}
                    style={styles.lessButton}>
                    <Text style={styles.standardText}>Less</Text></Pressable>
            </View>
            <View style={{alignSelf: "center"}}><Text>D6!!</Text></View>
        </View>


        <View style={styles.moreLessButtonBox}>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress = {
                        () => {dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8, dice.d6, dice.d4 + 1, dice.mod));
                        }}
                    style={styles.moreButton}>
                    <Text style={styles.standardText}>More</Text>
                </Pressable>
                <Text style={[styles.standardText, styles.numberDisplay]}>{dice.d4}</Text>
                <Pressable
                    onPress = {
                        () => { if (dice.d4 != 0) {
                            dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8, dice.d6, dice.d4 - 1, dice.mod));
                        }}}
                    style={styles.lessButton}>
                    <Text style={styles.standardText}>Less</Text></Pressable>
            </View>
            <View style={{alignSelf: "center"}}><Text>D4!!</Text></View>
        </View>


        <View style={styles.moreLessButtonBox}>
            <View style={{flexDirection: "row"}}>
                <Pressable
                    onPress = {
                        () => {dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8, dice.d6, dice.d4, dice.mod + 1));
                        }}
                    style={styles.moreButton}>
                    <Text style={styles.standardText}>More</Text>
                </Pressable>
                <Text style={[styles.standardText, styles.numberDisplay]}>{dice.mod}</Text>
                <Pressable
                    onPress = {
                        () => { if (dice.mod != 0) {
                            dice.setDiceSet(new setOfDice(dice.d20, dice.d12, dice.d10, dice.d8, dice.d6, dice.d4, dice.mod - 1));
                        }}}
                    style={styles.lessButton}>
                    <Text style={styles.standardText}>Less</Text></Pressable>
            </View>
            <View style={{alignSelf: "center"}}><Text>MOD!</Text></View>
        </View>

    </View>)
}