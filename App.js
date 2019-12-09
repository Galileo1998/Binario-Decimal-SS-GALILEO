import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { parse } from 'qs';

export default class App extends Component
{

  state = 
  {
    valorA: '', 
    valorB: '',
  }

  handleA = (text) =>
  {
    this.setState({ valorA: text})
  }

  handleB = (text) =>
  {
    this.setState({ valorB: text})
  }

  suma = (valorA) =>
  {
    var regexConstructor = new RegExp("^[0-9]*$");
    if(!regexConstructor.test(valorA))
    {
      alert('Valor Incorrecto');
    }
    else
      if(valorA=='')
      {
        alert('Ingrese un valor');
      }
      else
      {
        var numero = parseInt(valorA);
        alert('Número: '+ (numero.toString(2))); 
      }
  }

  binario = (valorB) =>
  {
      var regexConstructor = new RegExp("^[0-1]*$");
      if(!regexConstructor.test(valorB))
      {
        alert('Valor Incorrecto');
      }
      else
        if(valorB=='')
        {
          alert('Ingrese un valor');
        }
        else
        {
          var binary = valorB;
          var digit = parseInt(binary, 2);
          alert('Número: '+ digit);
        }

  }

  render()
  {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/fondo.jpg')} style={{width: '100%', height: '100%'}}>
            <Text style= {styles.texto}>Calculadora Decimal-Binario</Text>

            <TextInput 
              style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Decimal..."
              placeholderTextColor = "#fff"
              type = "numeric"
              keyboardType = 'numeric'
              onChangeText = {this.handleA}        
            />

            <TouchableOpacity style= {styles.submitButton}
                      onPress = 
                      {
                          () => this.suma(this.state.valorA)
                      }>
                  <Text style= {styles.submitButtonText}
                  >Convertir a Binario</Text>
            </TouchableOpacity> 

            <Text style= {styles.texto}>Calculadora Binario-Decimal</Text>

            <TextInput 
            style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Binario..."
            placeholderTextColor = "#fff"
            type = "numeric"
            keyboardType = 'numeric'
            onChangeText ={this.handleB}
            />

            <TouchableOpacity style= {styles.submitButton}
                    onPress = 
                    {
                        () => this.binario(this.state.valorB)
                    }>
                <Text style= {styles.submitButtonText}
                >Convertir a Decimal</Text>
            </TouchableOpacity> 
    </ImageBackground>
  
    </View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },

  flex: {
    flex: 1, 
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

  input: {
    borderColor: '#fff',
    color: 'white',
    borderWidth: 1,
    width: '70%',
    alignContent: 'center',
    marginLeft: 50,
    height: 40,
    marginBottom: 40,
    borderRadius: 7
  },

  submitButton: {
    backgroundColor: '#000000',
    width: '45%',
    borderRadius: 10,
    marginLeft: '25%',
  },

  submitButtonDicc: {
    backgroundColor: '#000',
    width: '45%',
    alignContent: "center"
  },
  
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    height: 40,
  },

  texto: {
    fontWeight: "bold",
    textAlign: 'center',
    color: '#fff',
    margin: 25
  }
})
