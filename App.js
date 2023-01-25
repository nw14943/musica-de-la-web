import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Canvas from 'react-native-canvas';

export default function App() {

    const canvasRef = useRef(null);

    useEffect(()=>{
        // const canvasObj = canvasRef.current;
        //  ctx = null;
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');

            if (ctx) {
                Alert.alert("Canvas is ready");
            }
        }
        // Alert.alert("Canvas is not ready");
    }, [canvasRef]);

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <SafeAreaView>
                <Canvas ref={canvasRef}></Canvas>
            </SafeAreaView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});