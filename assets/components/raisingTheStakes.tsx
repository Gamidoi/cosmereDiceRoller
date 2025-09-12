import {View, Text, Pressable} from "react-native";
import {styles} from "@/assets/components/resumeStyleSheet";

export type plotProps = {
    plot: boolean;
    setPlot: Function;
}

export default function RaisingTheStakes(stakes: plotProps) {
    return(<View style={{flex: 1, backgroundColor: "black"}}>
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
    </View>)
}
