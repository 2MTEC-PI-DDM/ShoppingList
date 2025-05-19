import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Alert, FlatList  } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function ItemList({ item }) {
  return (
    <View style={styles.itemList}>
      <Text style={styles.itemToBuy}>{item.name}</Text>
      <TouchableOpacity style={styles.actionIcon}>
        <Ionicons name='bag-check-outline' size={24} color='#fff'/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionIcon, {backgroundColor: 'darkred'}]}>
        <Ionicons name='trash-bin-outline' size={24} color='#fff'/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    backgroundColor: '#000000c0',
    padding: 15,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  itemToBuy: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    textDecorationLine: 'none',
  },
  actionIcon: {
    height: 40,
    width: 40,
    backgroundColor: 'darkgreen',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 10,
  }
})