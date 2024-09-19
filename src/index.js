import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Constant from "expo-constants";

const LoveCalculator = () => {
  const [maleName, setMaleName] = useState("");
  const [femaleName, setFemaleName] = useState("");
  const [loading, setLoading] = useState(false);
  const [lovePercentage, setLovePercentage] = useState([]);

  const calculateLove = () => {
    const API_URL = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${maleName}&sname=${femaleName}`;
    setLoading(true);
    fetch(API_URL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "YOUR_API_KEY",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLovePercentage(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>LoveCalculator</Text>
      </View>
      <TextInput
        style={{
          height: 55,
          borderColor: "gray",
          borderWidth: 1.5,
          width: "90%",
          margin: 15,
          borderRadius: 15,
          padding: 10,
          fontSize: 18,
        }}
        placeholder="Erkek İsmi"
        value={maleName}
        onChangeText={(text) => setMaleName(text)}
      />
      <TextInput
        style={{
          height: 55,
          borderColor: "gray",
          borderWidth: 1.5,
          width: "90%",
          margin: 15,
          borderRadius: 15,
          padding: 10,
          fontSize: 18,
        }}
        placeholder="Kadın İsmi"
        value={femaleName}
        onChangeText={(text) => setFemaleName(text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#0a1d37",
          padding: 15,
          borderRadius: 10,
          width: "90%",
          height: 60,
          borderWidth: 1 / 2,
          alignItems: "center",
          margin: 15,
          backgroundColor: "#ffbd9b",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 18,
        }}
        onPress={calculateLove}
      >
        <Text
          style={{
            color: "#sa85f32",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Hesapla
        </Text>
      </TouchableOpacity>
      {lovePercentage.percentage && (
        <View style={styles.round}>
          <Text style={styles.result}>{lovePercentage.percentage}</Text>
        </View>
      )}
      <View style={styles.conclusion}>
        <Text style={styles.result}>{lovePercentage.result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEEDB",
    alignItems: "center",
    paddingTop: Constant.statusBarHeight,
  },
  title: {
    backgroundColor: "#0a1d37",
    height: 80,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
  },
  round: {
    width: 100,
    height: 100,
    backgroundColor: "#ffd8cc",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  conclusion: {
    padding: 20,
  },
});

export default LoveCalculator;
