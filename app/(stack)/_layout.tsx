import { Stack } from "expo-router"

const StackLayout= () => {
    return(
        <Stack>
            <Stack.Screen name="index"></Stack.Screen>
            <Stack.Screen name="list"></Stack.Screen>
        </Stack>
    )
}
export default StackLayout