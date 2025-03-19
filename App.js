/**
 * Ez a program egy rombusz területét számítja ki a két átló alapján.
 * Készítette: [Saját Neved]
 * Dátum: 2025-03-18
 * Osztály: [Osztályod]
 */

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [diagonal1, setDiagonal1] = useState("");
  const [diagonal2, setDiagonal2] = useState("");
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const e = parseFloat(diagonal1);
    const f = parseFloat(diagonal2);
    if (!isNaN(e) && !isNaN(f) && e > 0 && f > 0) {
      setArea((e * f) / 2);
    } else {
      setArea("Hibás bemenet!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rombusz terület számító</Text>
      <Text style={styles.subHeader}>[Saját Neved], [Osztályod]</Text>
      <TextInput
        style={styles.input}
        placeholder="Első átló hossza"
        keyboardType="numeric"
        value={diagonal1}
        onChangeText={setDiagonal1}
      />
      <TextInput
        style={styles.input}
        placeholder="Második átló hossza"
        keyboardType="numeric"
        value={diagonal2}
        onChangeText={setDiagonal2}
      />
      <Button title="Számítás" onPress={calculateArea} />
      {area !== null && <Text style={styles.result}>Terület: {area}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
