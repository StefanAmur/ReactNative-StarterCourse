import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>First page</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo Screen"
      />
      <Button
        title="Go to List Demo Screen"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Demo Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo Screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo Screen"
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;