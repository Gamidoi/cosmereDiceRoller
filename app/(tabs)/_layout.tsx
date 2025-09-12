import { Tabs } from 'expo-router';
import {FontAwesome6, MaterialCommunityIcons} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#dddddd',
            tabBarInactiveTintColor: "#444444",
            headerShown: false,
            tabBarStyle: {
            backgroundColor: 'black',
        },
    }}>
            <Tabs.Screen name="index" options={{
                title: 'Main Roller',
                headerShown: false,
                tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28}  name="text-account" color={color} />,
            }} />
            <Tabs.Screen name="secondTabForThings" options={{
                title: 'not anything, yet',
                headerShown: false,
                tabBarIcon: ({ color }) => <FontAwesome6 size={28}  name="envelope-open-text" color={color} />,
            }} />
            <Tabs.Screen name="thirdTabUnknown" options={{
                title: 'also nothing',
                headerShown: false,
                tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28}  name="wrench-clock" color={color} />,
            }} />
        </Tabs>
    );
}