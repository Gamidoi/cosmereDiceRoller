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
            <View style={{maxWidth: 800, alignSelf: "center"}}>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.header}>Sam Hapke</Text>
                    <Text style={styles.subHeader}>Previous Work Experience</Text>
                    <Text style={styles.standardText}>Variable and Versatile</Text>
                </View>
                <Pressable style={styles.jobDisplayButton} onPress={() => setPostalDisplay(!postalDisplay)}>
                    <Text style={styles.jobTitle}>{postalDisplay && "-   "}{!postalDisplay && "+  "}Rural Mail Carrier, United States Postal Service</Text>
                </Pressable>
                {postalDisplay && <View>
                    <Text style={styles.jobDescriptionDates}>August 2015 to March 2025</Text>
                    <Text style={styles.jobDescription}>-effectively organized parcels and mail, while managing time efficiently</Text>
                    <Text style={styles.jobDescription}>-Worked independently, setting and holding personal goals</Text>
                    <Text style={styles.jobDescription}>-Safely operating vehicles, and maintaining safety habits</Text>
                    <Text style={styles.jobDescription}>-Independently verifying accuracy, and personally correcting errors</Text>
                </View>}

                <Pressable style={styles.jobDisplayButton} onPress={() => setDanfossDisplay(!danfossDisplay)}>
                    <Text style={styles.jobTitle}>{danfossDisplay && "-   "}{!danfossDisplay && "+  "}Line Operator, Danfoss</Text>
                </Pressable>
                {danfossDisplay && <View>
                    <Text style={styles.jobDescriptionDates}>April 2013 to August 2015</Text>
                    <Text style={styles.jobDescription}>-Effectively communicating within team to operate cohesively</Text>
                    <Text style={styles.jobDescription}>-Served as back up Cell Expert, leading the team to success</Text>
                    <Text style={styles.jobDescription}>-Served as Safety Captain, building and solidifying a safety mindset within the team</Text>
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
                    <Text style={styles.jobDescription}>-Managing conflict and teaching communication skills</Text>
                    <Text style={styles.jobDescription}>-Utilizing and teaching organization and a range of skills</Text>
                    <Text style={styles.jobDescription}>-Cultivating and encouraging creative problem solving</Text>
                </View>}

                <Pressable style={styles.volunteerDisplayButton} onPress={() => setCre8iowaDisplay(!cre8iowaDisplay)}>
                    <Text style={styles.jobTitle}>{cre8iowaDisplay && "-   "}{!cre8iowaDisplay && "+  "}cre8iowa Board Member</Text>
                </Pressable>
                {cre8iowaDisplay && <View>
                    <Text style={styles.jobDescriptionDates}>November 2011 to November 2015</Text>
                    <Text style={styles.jobDescription}>-Planning and implementing events and competitions</Text>
                    <Text style={styles.jobDescription}>-Serving as Challenge Master for Instant Challenge, leading our team of appraisers to give students a great experience</Text>
                    <Text style={styles.jobDescription}>-Serving on the Instant Challenge Writing Committee, to design and write challenges for students</Text>
                </View>}
            </View>
        </ScrollView>
    )}