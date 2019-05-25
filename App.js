import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';


export default class App extends Component {
  state = {
    nomeusuario: ''
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <StatusBar barStyle='light-content' backgroundColor='#212121' />
        

        <View>
          <Text style={styles.welcome}>O GitHub é uma plataforma de desenvolvimento inspirada na maneira como você trabalha</Text>
          <Text style={styles.instructions}>Faça login no GitHub</Text>
          <Text style={styles.name}>Nome derio</Text>
        </View>

        <TextInput
          style={styles.username}
          autoCapitalize='none'
          autoCorrect={false}
          value={this.state.nomeusuario}
          placeholder='ex: andrefer1'
          onChangeText={texto => this.setState({ nomeusuario: texto })}
        />

        <TouchableOpacity onPress={this.navegar} style={styles.botaoEntrar}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#212121',
    paddingHorizontal: 20
  },
  welcome: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    color: "#C0C0C0",
    bottom: 230,
  },
  instructions: {
    textAlign: 'center',
    color: '#C0C0C0',
    bottom: 35,
    fontSize: 20
  },
  name: {
    textAlign: 'left',
    color: '#C0C0C0',
    top: 0,
    left: 10,
    fontSize: 18
  },
  username: { //Verificar o que é isso!
    borderWidth: 1,
    backgroundColor: '#DDD',
    borderColor: "#DDD",
    alignSelf: "stretch",
    borderRadius: 5,
    height: 54,
    paddingHorizontal: 15
  },
  botaoEntrar: {
    height: 54,
    backgroundColor: "#32CC56",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: 10
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF"
  },
});
