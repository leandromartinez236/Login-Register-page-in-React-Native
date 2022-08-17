import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase-config'
import CustomButton from '../components/CustomButton'

const SignInScreen = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        console.log('Account created');
        const user = userCredential.user;
        console.log(user);
      })
      .catch(err => console.log(err))
  }
  // console.log(user);
  const handleSigIn = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        console.log('Inicio de sesion exitoso');
        const user = userCredential.user;
        console.log(user);
      })
      .catch(err => console.log(err))
  }
  return (
    <View>
      <Text>SignInScreen</Text>
      <View>
        <View>
          <Text>Email</Text>
          <TextInput onChangeText={(text) => setUser({ ...user, email: text })} placeholder='Email' />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput onChangeText={(text) => setUser({ ...user, password: text })} placeholder='Password' />
        </View>
        <TouchableOpacity onPress={handleSigIn}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInScreen