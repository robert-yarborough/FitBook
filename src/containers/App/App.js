/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Reddit from '../../components/Reddit';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
    Switch
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'blue'
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,

  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  todos: {
    marginTop: 50,
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  todoText: {
    fontSize: 24
  }
});

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(text){
    this.setState({ newTodo: text })
  }

  handlePress(){
    const todos = [...this.state.todos, this.state.newTodo ];
    this.setState({ todos, newTodo: '' });
  }

  render() {
    return (
        <View style={styles.container}>
          <Switch/>
          <View style={styles.form}>
              <TextInput
                  style={styles.input}
                  value={this.state.newTodo}
                  onChangeText={this.handleChange.bind(this)}/>
              <TouchableOpacity
                  style={styles.button}
                  onPress={this.handlePress.bind(this)}>
                <Text style={styles.buttonText}>make</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.todos}>
            {this.state.todos.map((todo, i) => {
              return (<View style={styles.todo} key={i}><Text style={styles.todoText}>{todo}</Text></View>)
            })}
          </View>
          <Reddit />
        </View>
    )
  }
}

export default App;
