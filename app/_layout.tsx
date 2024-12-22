import { Tabs } from "expo-router"

 const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="(stack)"></Tabs.Screen>
            <Tabs.Screen name="Profile"></Tabs.Screen>
        </Tabs>
    )
}
export default TabLayout