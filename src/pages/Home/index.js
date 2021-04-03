import React, { useState, useEffect } from 'react'
import { Text, TextInput, StyleSheet, View, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import LottieView from "lottie-react-native"

import calculator from '../../utils/calculator'

const calc = new calculator
//const keys = calc.whiteList
const keys = ['C', '(', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', ' ', '0', '.', '=']

const Home = () => {
    const [expression, setExpression] = useState('')
    const [expressionResult, setExpressionResult] = useState('')

    const onHandleAddKey = (value) => {
        calc.addKey(value)
        setExpression(expression + value)
        setExpressionResult(calc.calculate())
    }

    return (<View style={styles.app}>

        <TextInput
            style={styles.expression}
            onChangeText={text => { calc.expression = text; setExpressionResult(calc.calculate()); setExpression(text) }}
            value={expression}
        />
        <Text style={styles.expressionResult}>{expressionResult}</Text>

        <View
            style={styles.logo}
        >
            <Text style={styles.textLogo}>Calcula</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://4.bp.blogspot.com/-oCQ2v-iwvVk/UrKHK-CpgnI/AAAAAAAAChk/LZd0XmNO4OM/s1600/Fan_Thor_2011_Movie_Logos_by_Marvel_Freshman.png',
                }}
            />
        </View>



        <RectButton
            onPress={() => {
                let text = expression.slice(0, -1);
                setExpression(text);
                calc.expression = text;
                setExpressionResult( calc.calculate() );
            }}
            style={styles.deleteLast}
        >
            <Text
                style={styles.deleteLastText}
            >
                {'<-'}
            </Text>
        </RectButton>

        <View
            style={styles.buttons}
        >
            <RectButton
                key={keys[0]}
                onPress={() => { setExpressionResult(''); setExpression(''); calc.clear() }}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[0]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[1]}
                onPress={() => { onHandleAddKey(keys[1]); keys[1] === '(' ? keys[1] = ')' : keys[1] = '('; }}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[1]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[2]}
                onPress={() => onHandleAddKey(keys[2])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[2]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[3]}
                onPress={() => onHandleAddKey(keys[3])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[3]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[4]}
                onPress={() => onHandleAddKey(keys[4])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[4]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[5]}
                onPress={() => onHandleAddKey(keys[5])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[5]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[6]}
                onPress={() => onHandleAddKey(keys[6])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[6]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[7]}
                onPress={() => onHandleAddKey(keys[7])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[7]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[8]}
                onPress={() => onHandleAddKey(keys[8])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[8]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[9]}
                onPress={() => onHandleAddKey(keys[9])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[9]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[10]}
                onPress={() => onHandleAddKey(keys[10])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[10]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[11]}
                onPress={() => onHandleAddKey(keys[11])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[11]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[12]}
                onPress={() => onHandleAddKey(keys[12])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[12]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[13]}
                onPress={() => onHandleAddKey(keys[13])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[13]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[14]}
                onPress={() => onHandleAddKey(keys[14])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[14]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[15]}
                onPress={() => onHandleAddKey(keys[15])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[15]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[16]}
                onPress={() => onHandleAddKey(keys[16])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[16]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[17]}
                onPress={() => onHandleAddKey(keys[17])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[17]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[18]}
                onPress={() => onHandleAddKey(keys[18])}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[18]}
                </Text>
            </RectButton>

            <RectButton
                key={keys[19]}
                onPress={() => { setExpression(`${expressionResult}`) }}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    {keys[19]}
                </Text>
            </RectButton>

        </View>



    </View>);
}

const thor_pallet = ['#2C3034', '#404B56', '#A2141A', '#CC0E1D', '#FADF7F', '#FAF0BF']

const styles = StyleSheet.create({
    //flex is the standard
    app: {
        backgroundColor: 'white',
        height: '100%'
    },
    expression: {
        fontSize: 30,
        paddingTop: 50,
        margin: 10,
        paddingLeft: 20,
        color: thor_pallet[0],
    },
    expressionResult: {
        margin: 10,
        textAlignVertical: "center",
        paddingLeft: 20,
        color: thor_pallet[0]
    },
    logo:{
        flexDirection:'row',
        alignItems:'center'
    },
    textLogo:{
        fontSize:30
    },
    tinyLogo: {
        width: 60,
        height: 50,
    },
    deleteLast: {
        margin: 0,
    },
    deleteLastText: {
        fontSize: 25,
        color: 'black',
        padding: '8%',
        paddingLeft: '80%'
    },
    button: {
        padding: '9%',
        paddingBottom: '7%'
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    buttonText: {
        color: thor_pallet[0],
        fontSize: 25
    },
    action: {
        flexDirection: 'row'
    },
    equal: {
        padding: 50,
        justifyContent: 'center',
        borderWidth: 10,
        borderRadius: 10,
        backgroundColor: 'black',
        borderRadius: 100
    },
    equalText: {
        color: thor_pallet[5]
    }
});

export default Home;