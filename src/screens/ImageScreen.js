import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Image screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default ImageScreen;