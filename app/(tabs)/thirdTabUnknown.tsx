import {ScrollView, Text, View} from "react-native";
import {styles} from "@/assets/components/styleSheet";

export default function ThirdTabUnknown() {

    return (<ScrollView style={{flex: 1, backgroundColor: "black"}}>
            <View style={{maxWidth: 800, alignSelf: "center"}}>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.header}>Waiting for a reason to be.</Text>
                    
                </View>
            </View>
        </ScrollView>
    )}