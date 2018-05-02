import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import MenuLoja from "../components/menuBarLoja";

let navigation;
let loja;
let idLoja;

let deletarItem;
let editarItem;
let atualizaView;

export default class LojaScreen extends React.Component {

  static navigationOptions = {
    title: 'Loja',

    headerTitle:
      <MenuLivro
        deletaItem={() => {
          deletarItem(loja, idLoja);
          navigation.goBack();
        }}

        editaItem={() => {
          navigation.navigate('EditarLivro',
            {
              editarLoja: editarItem,
              loja: loja,
              index: idLoja,
              atualizaView: atualizaView,
            }
          );
        }}
      />
    ,
    headerStyle: {
      backgroundColor: '#00897B',
    },
    headerTintColor: '#fff',
  };

  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    const {params} = navigation.state;
    loja = params ? params.loja : null;
    idLoja = loja.key;
    deletarItem = params ? params.deletaItem : null;
    editarItem = params ? params.editaItem : null;

    atualizaView = (lojaEditada) => {
      loja = lojaEditada;
      this.setState({loja: lojaEditada})
    };

    this.state = {
      loja: loja,
    }
  }


  render() {
    //const uriCapa = this.state.livro.capa;

    return (
      <View
        style={styles.container}>

        <View style={styles.card}>

          /*<ImageBackground
            source={!this.state.livro.capa ? require('../img/default.png') : {uri: uriCapa}}
            blurRadius={1.5}
            style={styles.barraCapa}>

            <View style={styles.capaContainer}>
              <Image
                source={!this.state.livro.capa ? require('../img/default.png') : {uri: uriCapa}}
                style={styles.capa}/>
            </View>

          </ImageBackground>*/

          <View style={styles.infoContainer}>

            <ScrollView
              style={styles.infoTextoContainer}>

              <View
                style={styles.campoContainer}>

                <MaterialIcons
                  style={styles.icone}
                  name={'shopping-basket'}
                  size={22}
                  color={'#5f5f5f'}/>

                <View>
                  <Text
                    style={styles.textoLabel}>
                    Nome:
                  </Text>

                  <Text
                    style={styles.textoValor}>
                    {this.state.loja.nome}
                  </Text>

                </View>
              </View>

              <View
                style={styles.campoContainer}>

                <MaterialIcons
                  style={styles.icone}
                  name={'phone'}
                  size={25}
                  color={'#5f5f5f'}/>

                <View>
                  <Text
                    style={styles.textoLabel}>
                    Telefone:
                  </Text>

                  <Text
                    style={styles.textoValor}>
                    {this.state.loja.telefone}
                  </Text>
                </View>
              </View>

              <View
                style={styles.campoContainer}>

                <MaterialIcons
                  style={styles.icone}
                  name={'link'}
                  size={22}
                  color={'#5f5f5f'}/>
                <View>
                  <Text
                    style={styles.textoLabel}>
                    Site:
                  </Text>

                  <Text
                    style={styles.textoValor}>
                    {this.state.loja.site}
                  </Text>
                </View>
              </View>

              <View
                style={styles.campoContainer}>

                <MaterialIcons
                  style={styles.icone}
                  name={'location-city'}
                  size={22}
                  color={'#5f5f5f'}/>

                <View>

                  <Text
                    style={styles.textoLabel}>
                    Endereço:
                  </Text>

                  <Text
                    style={styles.textoValor}>
                    {this.state.loja.endereco.logradouro}
                    {this.state.loja.endereco.bairro}
                    {this.state.loja.endereco.cidade}
                  </Text>

                </View>
              </View>

              /*{this.state.livro.pdf !== "" &&
              <View style={styles.botaoContainer}>
                <Button
                  title={"Ver PDF"}
                  color={"#00897B"}
                  onPress={() => Linking.openURL(this.state.livro.pdf)}/>
              </View>
              }*/

            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,

  },

  container: {
    backgroundColor: '#fafafa',
    padding: 16,
    flex: 1,
  },

  barraCapa: {
    flex: 4,
  },

  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    flex: 6,
  },


  capaContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },

  capa: {
    flex: 1,
    width: 130,
    alignSelf: 'center'
  },

  infoTextoContainer: {
    flex: 2,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },


  campoContainer: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },

  icone: {
    marginRight: 10
  },

  textoLabel: {
    fontSize: 12,
    color: '#5f5f5f',
  },

  textoValor: {
    fontSize: 17,
    color: '#373737',
  },

  botaoContainer: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
  }

});