import {ScrollView, Text, View} from "react-native";
import {styles} from "@/assets/components/styleSheet";

export default function SecondTabForThings() {
    return (
        <ScrollView style={{flex: 1, backgroundColor: "black"}}>
            <View style={{alignItems: "center"}}>
                <Text style={styles.header}>Not Anything, YET.</Text>
            </View>
        </ScrollView>
    )}