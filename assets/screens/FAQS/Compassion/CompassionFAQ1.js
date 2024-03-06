import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const CompassionFAQ1 = () => {
  const onNextPress = () => {
    // Navigation logic to go to the next FAQ
    console.log("Next FAQ");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Compassion FAQ</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.questionText}>
          Why is compassion part of therapy?
        </Text>
        <Text style={styles.answerText}>
          • As humans, we have an innate propensity for compassion. Compassion
          consistently shows up in cultural and religious teachings around the
          world. When people perform behaviour associated with compassion, such
          as warm smiles and friendly hand gestures, their bodies produce more
          oxytocin.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  answerText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CompassionFAQ1;
