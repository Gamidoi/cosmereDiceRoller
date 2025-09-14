import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 60,
        color: "#ff7575"
    },
    subHeader: {
        fontSize: 24,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#44aa66",
        marginBottom: 10
    },
    standardText: {
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 5,
        color: "white",
        maxWidth: 600,
        alignSelf: "center",
    },
    moreButton: {
        fontSize: 16,
        textAlign: "center",
        backgroundColor: "#5575dd",
    },
    lessButton: {
        fontSize: 16,
        textAlign: "center",
        backgroundColor: "#dd7566",
    },
    moreLessButtonBox: {
        flexDirection: "column",
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: "#ffffff",
        paddingBottom: 20,
        marginBottom: 10,
        height: 65,
    },
    numberDisplay: {
        backgroundColor: "#444444",
        width: 20,
    },
    rollResultOutput: {
        margin: 5,
        borderWidth: 2,
        borderColor: "#aaaaaa",
        padding: 3,
    }
})