import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import {styles} from "@/assets/components/resumeStyleSheet";

export default function NotFoundScreen() {
    return (
        <View style={{backgroundColor: "grey", flex: 1}}>
            <Stack.Screen options={{ title: 'Page Not Found' }} />
            <View style={[styles.errorButton, {width: "70%", alignSelf: "center", marginTop: 100}]}>
                <Text style={{textAlign: "center"}}>Page Not Found!</Text>
                <Link href="/" style={{alignSelf: "center"}}>
                    <Text style={{textDecorationLine: "underline"}}>Go back to Home screen!</Text>
                </Link>
            </View>
        </View>
    );
}