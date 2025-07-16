import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Timer = ({ timeInSeconds, toggleTimer, textTimer }) => {
    return(
        <View style={styles.time}>
            <Text style={styles.title}>{ timeInSeconds }</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={toggleTimer}>
                <Text style={styles.buttonText}>
                    { textTimer }
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 38,
        textAlign: "center",
        fontWeight: "700",
        // backgroundColor: "gray",
    },
    time: {
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 10,
        height: 100
    },
    button: {
        backgroundColor: '#5DCCED',
        paddingVertical: 14,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        margin: "auto"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});