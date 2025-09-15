import {View, Text, Pressable} from "react-native";
import {styles} from "@/assets/components/styleSheet";

export type plotProps = {
    plot: boolean;
    setPlot: Function;
    plotAdvantage: number;
    setPlotAdvantage: Function;
}

export default function RaisingTheStakes(stakes: plotProps) {
    return(<View>
        <Pressable onPress={() => {stakes.setPlot(!stakes.plot)}}>
            <Text style={[
                styles.subHeader, {
                    color: stakes.plot ? "teal" : "maroon",
                    marginTop: 30,
                    borderWidth: 3,
                    borderColor: "#ffffff",
                    paddingHorizontal: 15,
                }]}>
                Raise The Stakes?     {stakes.plot ? "Yes!" : "no."}
            </Text>
        </Pressable>
        {stakes.plot && <View style={{flexDirection: "row", alignSelf: "center"}}>
            <Pressable onPress={() => {
                if (stakes.plotAdvantage == 1) {
                    stakes.setPlotAdvantage(-1);
                } else if (stakes.plotAdvantage == 0) {
                    stakes.setPlotAdvantage(1);
                } else {
                    stakes.setPlotAdvantage(0)
                }
            }}>
                <Text style={[
                    styles.standardText, {
                        marginTop: -13,
                        borderWidth: 3,
                        borderColor: "#ffffff",
                        paddingHorizontal: 15,
                    }]}>
                    {stakes.plotAdvantage == 1 && "With Advantage!!"}
                    {stakes.plotAdvantage == 0 && "Flat"}
                    {stakes.plotAdvantage == -1 && "With Disadvantage!!"}
                </Text>
            </Pressable>
        </View>}
    </View>)
}
