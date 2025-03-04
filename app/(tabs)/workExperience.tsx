import {ScrollView, Pressable, Text, View} from "react-native";
import {styles} from "@/assets/components/resumeStyleSheet";
import {useState} from "react";

export default function WorkExperience() {
    let [postalDisplay, setPostalDisplay] = useState<boolean>(true);
    let [danfossDisplay, setDanfossDisplay] = useState<boolean>(false);
    let [kumAndGoDisplay, setKumAndGoDisplay] = useState<boolean>(false);
    let [DICoachingDisplay, setDICoachingDisplay] = useState<boolean>(true);
    let [cre8iowaDisplay, setCre8iowaDisplay] = useState<boolean>(false);

    return (<ScrollView style={{flex: 1, backgroundColor: "black"}}>
            <View style={{alignItems: "center"}}>
                <Text style={styles.header}>Sam Hapke</Text>
                <Text style={styles.subHeader}>Previous Work Experience</Text>
                <Text style={styles.standardText}>variable, and versatile</Text>
            </View>
            <Pressable style={styles.jobDisplayButton} onPress={() => setPostalDisplay(!postalDisplay)}>
                <Text style={styles.jobTitle}>{postalDisplay && "-   "}{!postalDisplay && "+  "}Rural Mail Carrier, United States Postal Service</Text>
            </Pressable>
            {postalDisplay && <View>
                <Text style={styles.jobDescriptionDates}>August 2015 to March 2025</Text>
                <Text style={styles.jobDescription}>-Requires excellent Organization skills and Time Management Proficiency</Text>
                <Text style={styles.jobDescription}>-Self Motivated and Independent work</Text>
                <Text style={styles.jobDescription}>-Personal Accountability and Strong Safety Mindset</Text>
            </View>}

            <Pressable style={styles.jobDisplayButton} onPress={() => setDanfossDisplay(!danfossDisplay)}>
                <Text style={styles.jobTitle}>{danfossDisplay && "-   "}{!danfossDisplay && "+  "}Line Operator, Danfoss</Text>
            </Pressable>
            {danfossDisplay && <View>
                <Text style={styles.jobDescriptionDates}>April 2013 to August 2015</Text>
                <Text style={styles.jobDescription}>-Teamwork and Clear Communication</Text>
                <Text style={styles.jobDescription}>-Backup Cell Expert, requiring Leadership skills</Text>
                <Text style={styles.jobDescription}>-Safety Captain, building and solidifying a Safety Mindset</Text>
            </View>}

            <Pressable style={styles.jobDisplayButton} onPress={() => setKumAndGoDisplay(!kumAndGoDisplay)}>
                <Text style={styles.jobTitle}>{kumAndGoDisplay && "-   "}{!kumAndGoDisplay && "+  "}Overnight Attendant, Kum & Go</Text>
            </Pressable>
            {kumAndGoDisplay && <View>
                <Text style={styles.jobDescriptionDates}>May 2012 to April 2013</Text>
                <Text style={styles.jobDescription}>-Independence and Time Management skills</Text>
                <Text style={styles.jobDescription}>-Conflict Management and Communication skills</Text>
                <Text style={styles.jobDescription}>-Responsibility and Reliability</Text>
            </View>}

            <View style={{alignItems: "center"}}>
            <Text style={styles.subHeader}>Volunteer Work Experience</Text>
            <Text style={styles.standardText}>Creative and Educational</Text>
            </View>

            <Pressable style={styles.volunteerDisplayButton} onPress={() => setDICoachingDisplay(!DICoachingDisplay)}>
                <Text style={styles.jobTitle}>{DICoachingDisplay && "-   "}{!DICoachingDisplay && "+  "}Coach for Middle and High school Destination Imagination</Text>
            </Pressable>
            {DICoachingDisplay && <View>
                <Text style={styles.jobDescriptionDates}>Fall 2009 to Spring 2015</Text>
                <Text style={styles.jobDescription}>-Conflict Management and Communication skills</Text>
                <Text style={styles.jobDescription}>-Organization skills and Adaptability</Text>
                <Text style={styles.jobDescription}>-Creative Problem Solving</Text>
            </View>}

            <Pressable style={styles.volunteerDisplayButton} onPress={() => setCre8iowaDisplay(!cre8iowaDisplay)}>
                <Text style={styles.jobTitle}>{cre8iowaDisplay && "-   "}{!cre8iowaDisplay && "+  "}cre8iowa Board Member</Text>
            </Pressable>
            {cre8iowaDisplay && <View>
                <Text style={styles.jobDescriptionDates}>November 2011 to November 2015</Text>
                <Text style={styles.jobDescription}>-Planning and Implementation of Events</Text>
                <Text style={styles.jobDescription}>-Instant Challange Challenge Master, Decision Making and Leadership</Text>
                <Text style={styles.jobDescription}>-Instant Challenge Writing Committee, Designing and Writing Challenges for students</Text>
            </View>}

        </ScrollView>
    )}