import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import 'react-native-gesture-handler';
import Home from './Home';

const Login = ({navigation}) => {
  const [login, setLogin] = useState({
    Username: 'sonu',
    Password: 'sonu',
  });

  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');

  const onPressHandler = () => {
    if (uname == login.Username && pwd == login.Password) {
      //alert('Login success');
      //   console.log('uname', uname);
      navigation.navigate('display', {name: uname});
    } else {
      alert('Invalid Username and password');
    }
  };
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Login</Text>
        <Text style={{marginTop: 50, fontSize: 15}}>Enter Name :</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. john doe"
          onChangeText={setUname}
        />

        <Text style={{marginTop: 20, fontSize: 15}}>Enter Password :</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. john doe"
          onChangeText={setPwd}
          secureTextEntry={true}
        />
        <View style={{marginTop: 20}}>
          <Button title="Login" onPress={onPressHandler} />
        </View>
      </View>
    </TouchableWithoutFeedback>
    //</KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    fontSize: 50,
    alignItems: 'center',
    paddingTop: 80,
  },
  input: {
    borderWidth: 1,
    marginTop: 20,
    fontSize: 20,
    padding: 4,
    width: 200,
  },
  login: {
    justifyContent: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
