/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>word Analyzer</Text>
<TextInput onChangeText={(word) =>
this.setState({word})}
placeholder='please type the text'/>

<Button color="#841584"
onPress={this.analyzeWord}
title='Tekan Ini'/>
<Text>Word:  {this.state.word}</Text>
<Text>No of Consonants:  {this.state.consonant}</Text>
<Text>No of Vowels:  {this.state.vowel}</Text>
<Text>No of Characters:  {this.state.character}</Text>
      </View>
    );
  }
}


analyzeWord = () => {
  var vowel=function countVowels(str) {
    str = str.toLowerCase();
    let vowArr = ['a', 'e', 'i', 'o', 'u'],
        counter = 0;

    for (let letter of str) {
        if (vowArr.includes(letter)) {
            counter++;
        }
    }
    return counter;
}
function countConsonant(str2) {
    str2 = str2.toLowerCase();
    let consArr = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'],
        counter = 0;

    for (let letter of str2) {
        if (consArr.includes(letter)) {
            counter++;
        }
    }
    return counter;
}
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
