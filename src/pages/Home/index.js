import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import LottieView from "lottie-react-native";

import calculator from '../../utils/calculator';

const calc = new calculator;
const keys = calc.whiteList

const Home = () => {
    const [expression, setExpression] = useState('');
    const [expressionResult, setExpressionResult] = useState('');

    const onHandleAddKey = (value) => {
        calc.addKey(value);
        setExpression(expression + value)
        setExpressionResult(calc.calculate())
    }

    return (<>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.expressionResult}>{expressionResult}</Text>
        <View
            style={styles.button}
        >
            {
                keys.map(key => (
                    <RectButton
                        key={key}
                        onPress={() => onHandleAddKey(key)}
                        style={styles.button}
                    >
                        <Text>
                            {key}
                        </Text>
                    </RectButton>
                ))
            }




        </View>

        <RectButton
            onPress={() => { calc.clear(); setExpression(''); setExpressionResult('') }}
            style={styles.clear}
        >
            <Text style={styles.clearText}>clear</Text>
            <LottieView source={require('../../../assets/thor_hammer.json')} autoPlay loop />
        </RectButton>


    </>);
}

const styles = StyleSheet.create({
    //flex is the standard
    expression:{
        borderColor: 'black',
        borderWidth:10,
        margin:10,
        textAlignVertical: "center",
        paddingLeft:20
    },
    expressionResult:{
        borderColor: 'black',
        borderWidth:10,
        margin:10,
        textAlignVertical: "center",
        paddingLeft:20
    },
    button: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 30,
        backgroundColor: 'grey'
    },
    clear: {
        padding: 50,
        justifyContent:'center'
    },
    clearText:{
        fontSize:30,
    }
});

export default Home;