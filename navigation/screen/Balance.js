import {React, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Switch,
  TextInput,
  ActivityIndicator,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Date,
  Modal,
  Image,
  Alert,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Icon, IconElement, Input, Button, Layout} from '@ui-kitten/components';
const screenWidth = Dimensions.get('window').width;

export default function Balance() {
  const [showOptions, setShowOptions] = useState(false);
  const balanceCard = () => {
    return (
      <View>
        <DropShadow
          style={{
            shadowColor: 'black',
            shadowOffset: {width: 5, height: 10},

            shadowOpacity: 0.1,
            shadowRadius: 50,
          }}>
          <Pressable
            style={{
              height: 270,
              width: screenWidth / 1.1,
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: '#F5F5F5',
              alignSelf: 'center',
              marginTop: 30,
              marginBottom: 10,
              elevation: 10,
              borderRadius: 10,
            }}
            onPress={() => {
              setShowOptions(!showOptions);
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#18B9A2',
                alignSelf: 'flex-end',
                marginRight: 20,
                marginTop: 20,
              }}>
              By-Weekly Plan
            </Text>

            <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
              <View>
                <Text
                  style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                  Jemmo Condominium
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    marginTop: 10,
                  }}>
                  Mexico Square
                </Text>
              </View>
              <View style={{marginLeft: 20}}>
                <Image
                  source={require('../img/circle.png')}
                  style={{
                    width: 15,
                    height: 15,
                    marginLeft: 20,
                    marginTop: 7,
                    marginRight: 10,
                  }}
                />
                <View
                  style={{
                    height: 15,
                    width: 1,
                    marginTop: 3,

                    backgroundColor: 'black',
                    marginLeft: 26,
                  }}></View>
                <Image
                  source={require('../img/circle.png')}
                  style={{
                    width: 15,
                    height: 15,
                    marginLeft: 20,

                    marginTop: 3,
                    marginRight: 10,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginLeft: 20,
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{
                    width: 80,
                    height: 55,
                    elevation: 20,
                    shadowColor: 'black',
                    backgroundColor: '#F5F5F5',
                  }}></View>
                <View
                  style={{
                    width: 80,
                    height: 55,
                    elevation: 20,
                    shadowColor: 'black',
                    backgroundColor: '#18B9A2',
                    borderWidth: 1,
                    borderColor: '#18B9A2',
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}></View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 30}}>
                <Text
                  style={{
                    fontSize: 32,
                    color: 'black',
                    marginLeft: 20,
                    marginTop: 5,
                  }}>
                  3
                </Text>
                <Text style={{fontSize: 20, color: 'black', marginLeft: 10}}>
                  Days{'\n'}Remaining
                </Text>
              </View>
            </View>
          </Pressable>
        </DropShadow>
        {showOptions && (
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#18B9A2',
                height: 60,
                width: screenWidth / 2.4,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#18B9A2',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: 'center',
                  flex: 1,
                  textAlignVertical: 'center',
                  color: 'white',
                }}>
                RENEW
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#18B9A2',
                height: 60,
                width: screenWidth / 2.4,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#18B9A2',
                marginLeft: 30,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: 'center',
                  flex: 1,
                  textAlignVertical: 'center',
                  color: 'white',
                }}>
                CANCEL
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  return (
    <ScrollView
      style={{
        maxHeight: Dimensions.get('screen').height,
        backgroundColor: '#EBEBEB',
      }}
      contentContainerStyle={{flexGrow: 1}}>
      <Text
        style={{
          color: '#000000',
          fontSize: 20,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        Current Balance
      </Text>
      {balanceCard()}
    </ScrollView>
  );
}
