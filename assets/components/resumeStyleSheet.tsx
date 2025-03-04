import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 60,
        color: "#ff7575"
    },
    errorButton: {
        borderWidth: 3,
        borderColor: "yellow",
        backgroundColor: "red",
        padding: 15,
        textAlign: "center",
        textAlignVertical: "center",
    },
    subHeader: {
        fontSize: 26,
        textDecorationLine: "underline",
        color: "#888888"
    },
    jobTitle: {
        fontSize: 22,
        textDecorationLine: "underline",
        marginLeft: 30,
        color: "white"
    },
    jobDisplayButton: {
        borderWidth: 2,
        borderColor: "grey",
        marginHorizontal: 20,
        borderRadius: 8,
        backgroundColor: "#162255",
    },
    volunteerDisplayButton: {
        borderWidth: 2,
        borderColor: "grey",
        marginHorizontal: 20,
        borderRadius: 8,
        backgroundColor: "#164020",
    },
    standardText: {
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 5,
        color: "white",
        maxWidth: 600,
        alignSelf: "center",
    },
    coverLetterText: {
        fontSize: 16,
        marginHorizontal: 10,
        color: "white",
        maxWidth: 600,
        alignSelf: "center",
        margin: 5,
    },
    standardLink: {
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 5,
        color: "powderblue",
        textDecorationLine: "underline",
    },
    QRstyle: {
        height: 120,
        width: 120,
        borderColor: "grey",
    },
    jobDescriptionDates: {
        fontSize: 16,
        marginRight: 5,
        marginLeft: 50,
        color: "white",
        maxWidth: 590,
    },
    jobDescription: {
        fontSize: 16,
        marginRight: 5,
        marginLeft: 80,
        color: "white",
        maxWidth: 550,
    },
})