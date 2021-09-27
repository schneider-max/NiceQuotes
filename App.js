import React, { Component } from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, View } from 'react-native';

import Quote from './js/components/Quote';
import NewQuote from './js/components/NewQuote';

const data = [
  {text: 'Der Bass muss ficken', author: 'Wolfang Amadeus Mozart'},
  {text: 'Wer einen eine Grube gräbt ist Gräber', author: 'Sokrates'},
  {text: 'Warum liegt hier Stroh', author: 'Maskierter Mann'}
];

export default class App extends Component {
  state = { index: 0, showNewQuoteScreen: false, quotes: data };

  _addQuote = (text, author) => {
    
    let {quotes} = this.state;
    if(text && author) {
      quotes.push({text: text, author: author});
    }
    this.setState({showNewQuoteScreen: false, quotes: quotes});
  }

  render() {
    let { index, quotes } = this.state;
    const quote = quotes[index];
    let nextIndex = index + 1;
    if (nextIndex === quotes.length) {
       nextIndex = 0;
    };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.newButton}>
          <Button title="Neu" onPress={() => this.setState({ showNewQuoteScreen: true})} />
        </View>  
        <NewQuote visible={this.state.showNewQuoteScreen} onSave={this._addQuote} />
        <Quote text = { quote.text } author = { quote.author } />
        <View style={styles.nextButton}>
          <Button title="Nächstes Zitat" onPress={() => this.setState({index: nextIndex})}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    position: 'absolute', 
    bottom: Platform.OS === 'ios' ? 50 : 0
  },
  newButton: {
    position: 'absolute',
    right: 15,
    top: 40  
  }
});
