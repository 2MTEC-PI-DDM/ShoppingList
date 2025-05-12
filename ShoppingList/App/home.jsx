import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'


export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>



      <ImageBackground         
        source={require('../assets/background.jpeg')}
        style={{ flex: 1, justifyContent: 'flex-start' }}
        resizeMode='repeat'>

        <View style={styles.header}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <Ionicons name="trash" size={32} color='#fff'/>
        </View>

        <View style={{ flex: 1 }}></View>

        <View style={styles.footer}>
            <View style={styles.inputContainer}>
              <TextInput 
              color="#fff"
              fontsize={18}
              placeholderTextColor="#aeaeae"
              placeholder='Digite o nome do produto....'
              />
            </View>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="name" size={36} color="#fff" />
            </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color:'#fff'
  },
  footer: {
    backgroundColor: '#000000c0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 50,
    marginVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }

})