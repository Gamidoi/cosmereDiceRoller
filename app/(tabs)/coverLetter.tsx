import {ScrollView, Text, View} from "react-native";
import {styles} from "@/assets/components/resumeStyleSheet";

export default function CoverLetter() {
    return (
        <ScrollView style={{flex: 1, backgroundColor: "black"}}>
            <View style={{alignItems: "center"}}>
                <Text style={styles.header}>Sam Hapke</Text>
            </View>
            <Text style={styles.standardText}>To, Hiring Managers,</Text>
            <Text style={styles.coverLetterText}>       I am a self motivated, and adaptable worker, excited to reach into a software development
                career where I can best use my talents and expand my knowledge, so that I may continually grow as a person.
            </Text>
            <Text style={styles.coverLetterText}>       Teamwork is pivotal in all aspects of life, and in that regard so is communication.
                As a student I was a participant in Destination Imagination, DI, and will be forever grateful to the teachers and
                volunteers that made that possible. DI as a creative problem solving program helped me to learn about teamwork and
                communication in a way that I would not have gained otherwise, it helped spark the part of me that refuses to stop
                thinking critically, and consider other perspectives. The part of me that knows how to trust in a team, and be trusted
                in kind.
            </Text>
            <Text style={styles.coverLetterText}>       I myself was a volunteer coach, and Challenge Master for DI for several years out of high school,
                paying it forward as I was able, Helping to organize the tournaments and events for the students. I also had to
                train adults as judges, and other officials. It was a leadership role in which I took incredible pride.
                In that capacity I was also recruited to the Global Finals tournament for several years, where I was charged with the
                "Chill Out" room.
            </Text>
            <Text style={styles.coverLetterText}>       After a stressful, timed, portion of the tournament the students would come to Chill
                Out to decompress, evaluate, and celebrate their achievements. My job was to facilitate, and help manage
                any breakdowns and interpersonal conflicts that might arise from the situation. It was an incredible lesson in patience, in empathy,
                in perspective and crisis management. It was also a lesson in teamwork. Each of my volunteers would have their own
                way of understanding the problems, and the students themselves. Each person of my team had a talent that could be applied to
                students with different needs.
            </Text>
            <Text style={styles.coverLetterText}>       As I carry my lessons forward, I am independent and self motivated, but I will always
                need a team to rely on. I am currently teaching myself Javascript, html, and React Native, I began this journey in December 2024
                and have been leaning into it as fully as I am able. I have been guided along the way by my brother, Peter and many others besides.
                In these short weeks, I have adapted and learned quickly, to the point where I can be proud of my growing portfolio. and look
                forward to the accomplishments I will be capable of in the next months and years.
            </Text>
        </ScrollView>
    )}