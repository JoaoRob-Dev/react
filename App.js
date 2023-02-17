import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.titulo}>Profissões de TI</Text>
      <Text style={styles.sub}>
       Especialista em segurança cibernética
      </Text>

      <Image style={styles.img} source={require("./assets/seg.jpg")}/>

      <Text style={styles.sub}>
        Especialista técnico em SEO
      </Text>
      
      <Image style={styles.img} source={require("./assets/seo.jpg")}/>
      
      <Text style={styles.sub}>
        Analista de dados
      </Text>
      
      <Image style={styles.img} source={require("./assets/img2.jpg")}/>
      
      <Text style={styles.sub}>
        Designer de produto
      </Text>
      
      <Image style={styles.img} source={require("./assets/produto.png")}/>
      
      <Text style={styles.sub}>
        Designers de interface do usuário(UX/UI)
      </Text>
      
      <Image style={styles.img} source={require("./assets/designerUIUX.webp")}/>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo:{
    margin: 24,
    fontSize: 40,
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  sub:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
  },
  img:{
    width: 200,
    height: 200,
    marginTop: 20,
    marginLeft: 100,
  }
  })
