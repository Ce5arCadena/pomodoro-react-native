import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const OPTIONS = ["Pomodoro", "Descanso Corto", "Descanso Largo"];

export const Header = ({ handlePress, currentTime = 1 }) => {
    return(
        <View style={styles.container}>
            {
                OPTIONS.map((option, i) => (
                    <TouchableOpacity
                        onPress={() => handlePress(i)}
                        style={[
                            styles.touchable,
                            currentTime !== i && { borderColor: "transparent" }
                        ]} 
                        key={i}
                    >
                        <Text>
                            { option }
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10
    },  
    touchable: {
        borderRadius: 10,
        height: 35,
        width: "32%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "lightyellow"
    }
});