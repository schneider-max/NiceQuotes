import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Quote extends Component {
    render() {
        const {text, author} = this.props;
        return(
            <View style={styles.container}> 
                <Text style={styles.text}> { text } </Text>
                <Text style={styles.author}>&mdash; { author } </Text>
            </View>
        );
    }
}
// StyleSheet.create({...style...})
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    text: {
        fontSize: 36, 
        fontStyle: 'italic',
        marginBottom: 10,
        textAlign: 'center'
    },
    author: {
        fontSize: 20,
        textAlign: 'right'
    }
});