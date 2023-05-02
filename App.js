import React, { useState, useEffect, useRef } from "react";
import {Text, Animated,View,StyleSheet,Image,TextInput,SafeAreaView,ScrollView,TouchableOpacity, Linking
} from "react-native";
import { BlurView } from 'expo-blur';
import Constants from "expo-constants";

const whats = require('./assets/whats.png');
const url = 'https://api.whatsapp.com/send?phone=5551984574910&text=penis';
export default function App() {
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
  const FadeInViewFundo = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity:fadeAnim
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
  
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleShowMoreInfo = () => {
    setShowMoreInfo(true);

  };

  const handleHideMoreInfo = () => {
    setShowMoreInfo(false);
  };
  const [text, setText] = useState("");
  const handleTextChange = (newText) => {
    if (newText.length <= 100) {
      setText(newText);
    }
  };
  const handlePress = () => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
     {showMoreInfo && (
      <FadeInViewFundo style={styles.sombra}>
        
      </FadeInViewFundo>
)}
      {showMoreInfo && (
        
      <FadeInView  style={styles.DivMais}>
        <View style={styles.DentroMais}>
        <View>
              <TouchableOpacity onPress={handleShowMoreInfo}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("./assets/mais.png")}
                />
              </TouchableOpacity>
              
              {showMoreInfo && (
        <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      )}
    </View>
           <View style={styles.ViewPeriudo}>  
            </View>
        </View>
      </FadeInView >
)}
 
 
      <View style={styles.top}>
        <View style={styles.divLogo}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>

        <View style={styles.divTitulo}>
          <Text style={styles.titulo}>WorkPlus</Text>
        </View>
        <View style={styles.divLogout}>
          <Image
            style={styles.iconeLogout}
            source={require("./assets/logout.png")}
          />
        </View>
      </View>

      <View style={styles.divImputLupa}>
        <View style={styles.divInput}>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.divLupa}>
          <Image
            style={styles.iconeLupa}
            source={require("./assets/lupa.png")}
          />
        </View>
      </View>

      <SafeAreaView style={styles.containerPosts}>
        <ScrollView>
        <View style={styles.postPremium}>
            <View style={styles.DivFotoUsuario}>
              <View style={styles.fotoUsuario}></View>
            </View>
          <View style={styles.Meio}>
            
            <View style={styles.MeioEsquerda}>
              <View style={styles.MeioEsquerdaCima}>
                <Text style={styles.subtituloNome}>Nome</Text>
                <Text style={styles.nome}>Luigi dos Santos</Text>
              </View>

              <View style={styles.MeioEsquerdaBaixo}>
                <Text style={styles.subtituloTipo}>Tipo</Text>
                <Text style={styles.tipo}>Marceneiro</Text>
              </View>
            </View>

            <View style={styles.MeioDireta}>
              <View style={styles.MeioDireitaCima}>
                <Text style={styles.subtituloData}>Data</Text>
                <Text style={styles.data}>27/04/2023</Text>
              </View>

              <View style={styles.MeioDireitaBaixo}>
                <Text style={styles.subtituloEndereco}>Endereço</Text>
                <Text style={styles.endereco}>Cachoeirinha-RS</Text>
              </View>
            </View>
            </View>
            <View style={styles.Direita}>
             
              <TouchableOpacity onPress={handlePress}>
              <Image source={whats} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>



              <View>
              <TouchableOpacity onPress={handleShowMoreInfo}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("./assets/mais.png")}
                />
              </TouchableOpacity>
              
              {showMoreInfo && (
        <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      )}
    </View>
              <Image
                style={styles.usuario}
                source={require("./assets/usuario.png")}
              />
            </View>
          </View>
          <View style={styles.postTrabalhador}>
            <View style={styles.DivFotoUsuario}>
              <View style={styles.fotoUsuario}></View>
            </View>
          <View style={styles.Meio}>
            
            <View style={styles.MeioEsquerda}>
              <View style={styles.MeioEsquerdaCima}>
                <Text style={styles.subtituloNome}>Nome</Text>
                <Text style={styles.nome}>Luigi dos Santos</Text>
              </View>

              <View style={styles.MeioEsquerdaBaixo}>
                <Text style={styles.subtituloTipo}>Tipo</Text>
                <Text style={styles.tipo}>Marceneiro</Text>
              </View>
            </View>

            <View style={styles.MeioDireta}>
              <View style={styles.MeioDireitaCima}>
                <Text style={styles.subtituloData}>Data</Text>
                <Text style={styles.data}>27/04/2023</Text>
              </View>

              <View style={styles.MeioDireitaBaixo}>
                <Text style={styles.subtituloEndereco}>Endereço</Text>
                <Text style={styles.endereco}>Cachoeirinha-RS</Text>
              </View>
            </View>
            </View>
            <View style={styles.Direita}>
             
              <TouchableOpacity onPress={handlePress}>
              <Image source={whats} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>



              <View>
              <TouchableOpacity onPress={handleShowMoreInfo}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("./assets/mais.png")}
                />
              </TouchableOpacity>
              
              {showMoreInfo && (
        <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      )}
    </View>
              <Image
                style={styles.usuario}
                source={require("./assets/usuario.png")}
              />
            </View>
          </View>
          <View style={styles.postEmpregador}>
            <View style={styles.DivFotoUsuario}>
              <View style={styles.fotoUsuario}></View>
            </View>
          <View style={styles.Meio}>
            
            <View style={styles.MeioEsquerda}>
              <View style={styles.MeioEsquerdaCima}>
                <Text style={styles.subtituloNome}>Nome</Text>
                <Text style={styles.nome}>Luigi dos Santos</Text>
              </View>

              <View style={styles.MeioEsquerdaBaixo}>
                <Text style={styles.subtituloTipo}>Tipo</Text>
                <Text style={styles.tipo}>Marceneiro</Text>
              </View>
            </View>

            <View style={styles.MeioDireta}>
              <View style={styles.MeioDireitaCima}>
                <Text style={styles.subtituloData}>Data</Text>
                <Text style={styles.data}>27/04/2023</Text>
              </View>

              <View style={styles.MeioDireitaBaixo}>
                <Text style={styles.subtituloEndereco}>Endereço</Text>
                <Text style={styles.endereco}>Cachoeirinha-RS</Text>
              </View>
            </View>
            </View>
            <View style={styles.Direita}>
             
              <TouchableOpacity onPress={handlePress}>
              <Image source={whats} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>



              <View>
              <TouchableOpacity onPress={handleShowMoreInfo}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("./assets/mais.png")}
                />
              </TouchableOpacity>
              
              {showMoreInfo && (
        <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      )}
    </View>
              <Image
                style={styles.usuario}
                source={require("./assets/usuario.png")}
              />
            </View>
          </View>
          <View style={styles.postTrabalhador}>
            <View style={styles.DivFotoUsuario}>
              <View style={styles.fotoUsuario}></View>
            </View>
          <View style={styles.Meio}>
            
            <View style={styles.MeioEsquerda}>
              <View style={styles.MeioEsquerdaCima}>
                <Text style={styles.subtituloNome}>Nome</Text>
                <Text style={styles.nome}>Luigi dos Santos</Text>
              </View>

              <View style={styles.MeioEsquerdaBaixo}>
                <Text style={styles.subtituloTipo}>Tipo</Text>
                <Text style={styles.tipo}>Marceneiro</Text>
              </View>
            </View>

            <View style={styles.MeioDireta}>
              <View style={styles.MeioDireitaCima}>
                <Text style={styles.subtituloData}>Data</Text>
                <Text style={styles.data}>27/04/2023</Text>
              </View>

              <View style={styles.MeioDireitaBaixo}>
                <Text style={styles.subtituloEndereco}>Endereço</Text>
                <Text style={styles.endereco}>Cachoeirinha-RS</Text>
              </View>
            </View>
            </View>
            <View style={styles.Direita}>
             
              <TouchableOpacity onPress={handlePress}>
              <Image source={whats} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>



              <View>
              <TouchableOpacity onPress={handleShowMoreInfo}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("./assets/mais.png")}
                />
              </TouchableOpacity>
              
              {showMoreInfo && (
        <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      )}
    </View>
              <Image
                style={styles.usuario}
                source={require("./assets/usuario.png")}
              />
            </View>
          </View>
          <View style={styles.postEmpregador}>
            <View style={styles.DivFotoUsuario}>
              <View style={styles.fotoUsuario}></View>
            </View>
          <View style={styles.Meio}>
            
            <View style={styles.MeioEsquerda}>
              <View style={styles.MeioEsquerdaCima}>
                <Text style={styles.subtituloNome}>Nome</Text>
                <Text style={styles.nome}>Luigi dos Santos</Text>
              </View>

              <View style={styles.MeioEsquerdaBaixo}>
                <Text style={styles.subtituloTipo}>Tipo</Text>
                <Text style={styles.tipo}>Marceneiro</Text>
              </View>
            </View>

            <View style={styles.MeioDireta}>
              <View style={styles.MeioDireitaCima}>
                <Text style={styles.subtituloData}>Data</Text>
                <Text style={styles.data}>27/04/2023</Text>
              </View>

              <View style={styles.MeioDireitaBaixo}>
                <Text style={styles.subtituloEndereco}>Endereço</Text>
                <Text style={styles.endereco}>Cachoeirinha-RS</Text>
              </View>
            </View>
            </View>
            <View style={styles.Direita}>
             
              <TouchableOpacity onPress={handlePress}>
              <Image source={whats} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>



              <View>
              <TouchableOpacity onPress={handleShowMoreInfo}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("./assets/mais.png")}
                />
              </TouchableOpacity>
              
              {showMoreInfo && (
        <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      )}
    </View>
              <Image
                style={styles.usuario}
                source={require("./assets/usuario.png")}
              />
            </View>
          </View>
          <View style={styles.postTrabalhador}>
            <View style={styles.DivFotoUsuario}>
              <View style={styles.fotoUsuario}></View>
            </View>
          <View style={styles.Meio}>
            
            <View style={styles.MeioEsquerda}>
              <View style={styles.MeioEsquerdaCima}>
                <Text style={styles.subtituloNome}>Nome</Text>
                <Text style={styles.nome}>Luigi dos Santos</Text>
              </View>

              <View style={styles.MeioEsquerdaBaixo}>
                <Text style={styles.subtituloTipo}>Tipo</Text>
                <Text style={styles.tipo}>Marceneiro</Text>
              </View>
            </View>

            <View style={styles.MeioDireta}>
              <View style={styles.MeioDireitaCima}>
                <Text style={styles.subtituloData}>Data</Text>
                <Text style={styles.data}>27/04/2023</Text>
              </View>

              <View style={styles.MeioDireitaBaixo}>
                <Text style={styles.subtituloEndereco}>Endereço</Text>
                <Text style={styles.endereco}>Cachoeirinha-RS</Text>
              </View>
            </View>
            </View>
            <View style={styles.Direita}>
             
              <TouchableOpacity onPress={handlePress}>
              <Image source={whats} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>



              <View>
              <TouchableOpacity onPress={handleShowMoreInfo}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("./assets/mais.png")}
                />
              </TouchableOpacity>
              
              {showMoreInfo && (
        <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      )}
    </View>
              <Image
                style={styles.usuario}
                source={require("./assets/usuario.png")}
              />
            </View>
          </View>
          <View style={styles.postEmpregador}>
            <View style={styles.DivFotoUsuario}>
              <View style={styles.fotoUsuario}></View>
            </View>
          <View style={styles.Meio}>
            
            <View style={styles.MeioEsquerda}>
              <View style={styles.MeioEsquerdaCima}>
                <Text style={styles.subtituloNome}>Nome</Text>
                <Text style={styles.nome}>Luigi dos Santos</Text>
              </View>

              <View style={styles.MeioEsquerdaBaixo}>
                <Text style={styles.subtituloTipo}>Tipo</Text>
                <Text style={styles.tipo}>Marceneiro</Text>
              </View>
            </View>

            <View style={styles.MeioDireta}>
              <View style={styles.MeioDireitaCima}>
                <Text style={styles.subtituloData}>Data</Text>
                <Text style={styles.data}>27/04/2023</Text>
              </View>

              <View style={styles.MeioDireitaBaixo}>
                <Text style={styles.subtituloEndereco}>Endereço</Text>
                <Text style={styles.endereco}>Cachoeirinha-RS</Text>
              </View>
            </View>
            </View>
            <View style={styles.Direita}>
             
              <TouchableOpacity onPress={handlePress}>
              <Image source={whats} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>



              <View>
              <TouchableOpacity onPress={handleShowMoreInfo}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("./assets/mais.png")}
                />
              </TouchableOpacity>
              
              {showMoreInfo && (
        <TouchableOpacity onPress={handleHideMoreInfo} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      )}
    </View>
              <Image
                style={styles.usuario}
                source={require("./assets/usuario.png")}
              />
            </View>
          </View>
      
        </ScrollView>
      </SafeAreaView>
      
      <View style={styles.baixo}>
        <View style={styles.suasOfertas}>
          <TouchableOpacity
            onPress={() => console.log("Custom button pressed")}
          >
            <Text style={styles.botaoSuasOfertas}>Suas Ofertas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.casinha}>
          <Image
            style={styles.iconeCasinha}
            source={require("./assets/casinha.png")}
          />
        </View>
        <View style={styles.suasDemandas}>
          <TouchableOpacity
            onPress={() => console.log("Custom button pressed")}
          >
            <Text style={styles.botaoSuasPrestacoes}>Suas Prestações</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.usuarioBaixo}>
          <Image
            style={styles.iconeUsuario}
            source={require("./assets/usuario.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    height: 145,
    width: "100%",
  },
  divLogo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  divTitulo: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "55%",
    height: "100%",
  },
  divLogout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    height: "100%",
  },

  logo: {
    top: "12%",
    width: 95,
    height: 95,
  },

  titulo: {
    fontSize: 45,
    top: "14%",
    right: "8%",
  },

  iconeLogout: {
    width: 58,
    height: 58,
    top: "16%",
    right: "8%",
  },

  divImputLupa: {
    flexDirection: "row",

    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  divInput: {
    flex: 6,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  divLupa: {
    flex: 1,
  },

  textInput: {
    marginLeft: "10%",
    height: "85%",
    width: "95%",
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  iconeLupa: {},
  containerPosts: {
    paddingTop: 10,
    flex: 11,
    justifyContent: "center",
    
  },
  postPremium: {
    marginLeft: "2%",
    flexDirection: "row",
    height: 121,
    width: "95%",
    marginBottom: 12,
    borderRadius: 15,
    backgroundColor: "#F3E86C",
  },
  postTrabalhador: {
    marginLeft: "2%",
    flexDirection: "row",
    height: 121,
    width: "95%",
    marginBottom: 12,
    borderRadius: 15,
    backgroundColor: "#4F93D0",
  },
  postEmpregador: {
    marginLeft: "2%",
    flexDirection: "row",
    height: 121,
    width: "95%",
    marginBottom: 12,
    borderRadius: 15,
    backgroundColor: "#7BD3EF"
  },
  DivFotoUsuario: {
    height: "100%",
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
  },
  Meio: {
    flexDirection: "row",
    height: "100%",
    width: "66%",
    
  },
  sombra: {
   
    zIndex:9,
    height: "100%",
    width: "100%",
   position:'absolute',
  backgroundColor:'black',
  opacity: 5
    
  },
  DivMais: {
    borderWidth: 1,
    zIndex:10,
    position:'absolute',
    height: "30%",
    width: "90%",
    borderRadius:20,
    backgroundColor:'#CCE7FF',
    
  },
  MeioEsquerda: {
    height: "100%",
    width: "50%",
    
  },
  MeioDireta: {
    height: "100%",
    width: "50%",
    
  },
  Direita: {
    height: "100%",
    width: "12%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  fotoUsuario: {
    width: "80%",
    height: "70%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    zIndex: 1,
  },
  MeioEsquerdaCima: {
    paddingTop: 12,
    width: "100%",
    height: "50%",
    justifyContent: "center",
  },
  subtituloNome: {
    fontSize: 15,
    fontWeight: "bold",
  },
  nome: {
    fontSize: 14,
  },
  MeioEsquerdaBaixo: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    paddingBottom: 12,
  },
  subtituloTipo: {
    fontSize: 15,
    fontWeight: "bold",
  },
  tipo: {
    fontSize: 14,
  },
  MeioDireitaCima: {
    paddingTop: 12,
    width: "100%",
    height: "50%",
    justifyContent: "center",
  },
  subtituloData: {
    fontSize: 15,
    fontWeight: "bold",
  },
  data: {
    fontSize: 14,
  },
  MeioDireitaBaixo: {
    width: "100%",
    height: "50%",
    justifyContent: "center",

    paddingBottom: 12,
  },
  subtituloEndereco: {
    fontSize: 15,
    fontWeight: "bold",
  },
  endereco: {
    fontSize: 14,
  },
  usuario: {
    height: "23%",
    width: "67%",
  },
  whats: {
    height: "24%",
    width: "67%",
  },
  mais: {
    height: "23%",
    width: "67%",
  },
  baixo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#A5C4FF",
    borderRadius:10,
  },
  suasOfertas: {
    height: "100%",
    width: "34%",
    justifyContent: "center",
    alignItems: "center",
  },
  casinha: {
    paddingRight: "2%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "15%",
  },
  suasDemandas: {
    height: "100%",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  usuarioBaixo: {
    height: "100%",
    width: "16%",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoSuasPrestacoes: {
    width: "100%",
    fontSize: 16.5,
    borderRadius: 12,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 14,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  iconeCasinha: {
    height: "73%",
    width: "70%",
  },
  botaoSuasOfertas: {
    width: "100%",
    fontSize: 16,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  iconeUsuario: {
    height: "82%",
    width: "70%",
  },
});