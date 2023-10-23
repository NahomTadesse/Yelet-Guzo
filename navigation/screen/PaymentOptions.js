import * as React from 'react';
import {useState, useEffect} from 'react';

import {
  useRoute,
  NavigationContainer,
  useFocusEffect,
} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import DropShadow from 'react-native-drop-shadow';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCheck} from '@fortawesome/free-solid-svg-icons/faUserCheck';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  BackHandler,
  Switch,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function PaymentInformaion({navigation}) {
  const [bankSelectedTeleBirr, setBankSelectedTeleBirr] = useState(false);
  const [bankSelectedAwash, setBankSelectedAwash] = useState(false);
  const [bankSelectedWegagen, setBankSelectedWegagen] = useState(false);
  const [bankSelectedCbe, setBankSelectedCbe] = useState(false);
  const [bankSelectedCbeBirr, setBankSelectedCbeBirr] = useState(false);
  const [bankSelectedAmole, setBankSelectedAmole] = useState(false);
  const route = useRoute();
 
  const packageData = route.params.packageData

  const getTicketBtn = () => {
    navigation.navigate('ticket',{packageData});
  };

  const ticView = () => {
    return (
      <View style={{}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 30,
            width: screenWidth / 1.3,
            position: 'absolute',
            bottom: 100,
          }}>
          <FontAwesomeIcon
            icon={faUserCheck}
            style={{color: '#18B9A2'}}
            size="36"
          />
          <Text style={{fontSize: 14, marginHorizontal: 10}}>
            By clicking the button I have agreed to the privacy policy and terms
            and conditions of the service
          </Text>
        </View>
        <TouchableOpacity
          // onPress={getTicketBtn}
          onPress={getTicketBtn}
          style={{
            backgroundColor: '#18B9A2',
            width: screenWidth / 1.1,
            height: 55,
            borderRadius: 15,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0,
            marginBottom: 20,
            // top: 40,
          }}>
          <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
            PROCEED TO PAY
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const note = () => {
    return (
      <View>
        <DropShadow
          style={{
            shadowColor: '#171717',
            shadowOffset: {width: 7, height: 5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}>
          <View
            style={{
              height: 100,
              width: screenWidth / 1.1,
              backgroundColor: 'red',
            }}></View>
        </DropShadow>
      </View>
    );
  };
  return (
    <ScrollView style={{   backgroundColor:"#F5F5F5",}}>
      <View
        style={{
          height: '100%',
          height: Dimensions.get('window').height - 110,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Pressable
            onPress={() => setBankSelectedTeleBirr(!bankSelectedTeleBirr)}>
            <DropShadow
              style={{
                shadowColor: '#171717',
                shadowOffset: {width: 7, height: 5},
                shadowOpacity: 0.4,
                shadowRadius: 2,
              }}>
              <View
                style={{width: 97, height: 100, backgroundColor: '#EBEBEB'}}>
                <Image
                  style={
                    bankSelectedTeleBirr
                      ? {
                          width: 97,
                          height: 100,
                          borderWidth: 3,
                          borderColor: '#18B9A2',
                        }
                      : {width: 97, height: 100, borderWidth: 2}
                  }
                  source={require('../bankLogo/Telebirr.png')}
                />
              </View>
            </DropShadow>
          </Pressable>
          <Pressable onPress={() => setBankSelectedAwash(!bankSelectedAwash)}>
            <DropShadow
              style={{
                shadowColor: '#171717',
                shadowOffset: {width: 7, height: 5},
                shadowOpacity: 0.4,
                shadowRadius: 2,
              }}>
              <View
                style={
                  bankSelectedAwash
                    ? {
                        width: 97,
                        height: 100,
                        borderWidth: 3,
                        borderColor: '#18B9A2',
                        backgroundColor: '#EBEBEB',
                      }
                    : {width: 97, height: 100, backgroundColor: '#EBEBEB'}
                }>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    flex: 1,
                    justifyContent: 'center',
                    transform: [{scale: 0.8}],
                  }}
                  source={require('../bankLogo/Awash45.jpg')}
                />
              </View>
            </DropShadow>
          </Pressable>

          <Pressable onPress={() => setBankSelectedAmole(!bankSelectedAmole)}>
            <DropShadow
              style={{
                shadowColor: '#171717',
                shadowOffset: {width: 7, height: 5},
                shadowOpacity: 0.4,
                shadowRadius: 2,
              }}>
              <View
                style={{width: 97, height: 100, backgroundColor: '#EBEBEB'}}>
                <Image
                  style={
                    bankSelectedAmole
                      ? {
                          width: 97,
                          height: 100,
                          borderWidth: 3,
                          borderColor: '#18B9A2',
                        }
                      : {width: 97, height: 100, borderWidth: 2}
                  }
                  source={require('../bankLogo/Amole.png')}
                />
              </View>
            </DropShadow>
          </Pressable>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-around',
          }}>
          <Pressable onPress={() => setBankSelectedCbe(!bankSelectedCbe)}>
            <DropShadow
              style={{
                shadowColor: '#171717',
                shadowOffset: {width: 7, height: 5},
                shadowOpacity: 0.4,
                shadowRadius: 2,
              }}>
              <View
                style={{width: 97, height: 100, backgroundColor: '#EBEBEB'}}>
                <Image
                  style={
                    bankSelectedCbe
                      ? {
                          width: 97,
                          height: 100,
                          borderWidth: 3,
                          borderColor: '#18B9A2',
                        }
                      : {width: 97, height: 100, borderWidth: 2}
                  }
                  source={require('../bankLogo/CBE.jpg')}
                />
              </View>
            </DropShadow>
          </Pressable>
          <Pressable
            onPress={() => setBankSelectedWegagen(!bankSelectedWegagen)}>
            <DropShadow
              style={{
                shadowColor: '#171717',
                shadowOffset: {width: 7, height: 5},
                shadowOpacity: 0.4,
                shadowRadius: 2,
              }}>
              <View
                style={{width: 97, height: 100, backgroundColor: '#EBEBEB'}}>
                <Image
                  style={
                    bankSelectedWegagen
                      ? {
                          width: 97,
                          height: 100,
                          borderWidth: 3,
                          borderColor: '#18B9A2',
                        }
                      : {width: 97, height: 100, borderWidth: 2}
                  }
                  source={require('../bankLogo/Wegagen.png')}
                />
              </View>
            </DropShadow>
          </Pressable>
          <Pressable
            onPress={() => setBankSelectedCbeBirr(!bankSelectedCbeBirr)}>
            <DropShadow
              style={{
                shadowColor: '#171717',
                shadowOffset: {width: 7, height: 5},
                shadowOpacity: 0.4,
                shadowRadius: 2,
              }}>
              <View
                style={{width: 97, height: 100, backgroundColor: '#EBEBEB'}}>
                <Image
                  style={
                    bankSelectedCbeBirr
                      ? {
                          width: 97,
                          height: 100,
                          borderWidth: 3,
                          borderColor: '#18B9A2',
                        }
                      : {width: 97, height: 100, borderWidth: 2}
                  }
                  source={require('../bankLogo/cbeBIR.png')}
                />
              </View>
            </DropShadow>
          </Pressable>
        </View>

        {ticView()}
      </View>
       {/* <TouchableOpacity style={{width:50,height:50,backgroundColor:'orange'}}
       onPress={()=>{console.log('data--------',packageData)}}></TouchableOpacity> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cards: {
    width: screenWidth / 1.1,
    shadowOffset: 10,
    shadowColor: 'black',
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
