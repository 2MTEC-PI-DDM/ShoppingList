import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../assets/avatar.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Shopping List</Text>
        <Text style={styles.text}>
          Monte sua lista de compras e não esqueça mais o que
          precisa comprar ao sair de casa!!!
        </Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Link>

        <Text style={styles.creditos}>
          Feito por Amanda e Lais do 2mtec
        </Text>
      </View>
      <StatusBar style="light" backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerImage: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
avatar: {
  width: 300,
  height: 300,
  resizeMode: 'cover',
  borderRadius: 115,
},
content: {
  flex: 1,
  backgroundColor: '#dadada',
  borderTopRightRadius: 50,
  borderTopLeftRadius: 50,
  paddingHorizontal: '5%'
},
title: {
  fontSize: 32,
  fontWeight: 'bold',
  marginTop: 30,
  marginBottom: 10,
  textAlign: 'center',
},
text: {
  alignSelf: 'center',
  fontSize: 16,
  marginTop: 5,
  width: '95%',
  color: 'grey',
  textAlign: 'center',
},
creditos: {
  fotSize: 10,
  position: 'absolute',
  bottom: '2%',
  alignSelf: 'center',
  borderRadius: 50,
  paddingVertical: 14,
  textAlign: 'center',
},

button: {
  position: 'absolute',
  backgroundColor: '#000',
  bottom: '18%',
  alignSelf: 'center',
  borderRadius: 50,
  paddingVertical: 14,
  width: '40%',
  textAlign: 'center',
},
buttonText: {
  fontSize: 21,
  color: '#fff',
  fontWeight: 'bold',
},

  });