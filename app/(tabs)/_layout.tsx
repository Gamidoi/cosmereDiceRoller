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
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28}  name="text-account" color={color} />,
            }} />
            <Tabs.Screen name="coverLetter" options={{
                title: 'Cover Letter',
                headerShown: false,
                tabBarIcon: ({ color }) => <FontAwesome6 size={28}  name="envelope-open-text" color={color} />,
            }} />
            <Tabs.Screen name="workExperience" options={{
                title: 'Work Experience',
                headerShown: false,
                tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28}  name="wrench-clock" color={color} />,
            }} />
        </Tabs>
    );
}