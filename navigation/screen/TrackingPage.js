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

export default function TrackingPage() {
  const headerMap = () => {
    return (
      <View>
        <View
          style={{
            height: Dimensions.get('window').height / 1.9,
            backgroundColor: '#18B9A2',
            width: screenWidth,
          }}>
          <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
            <View>
              <Text style={{fontSize: 18, color: 'white'}}>Jemmo</Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,

                  marginTop: 10,
                }}>
                Mexico Square
              </Text>
            </View>
            <View style={{marginLeft: 30}}>
              <Image
                source={require('../img/wcircle.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 20,

                  marginTop: 10,
                  marginRight: 10,
                }}
              />
              <View
                style={{
                  height: 15,
                  width: 1,
                  marginTop: 3,

                  backgroundColor: 'white',
                  marginLeft: 26,
                }}></View>
              <Image
                source={require('../img/filcircle.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 20,

                  marginTop: 3,
                  marginRight: 10,
                }}
              />
            </View>

            <View style={{marginLeft: 30}}>
              <Image
                source={require('../img/wclock.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 20,

                  marginTop: 10,
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,

                  marginTop: 10,
                }}>
                15min, 58 sec
              </Text>
            </View>
          </View>
          <Image
            source={require('../img/gmap.jpg')}
            style={{
              width: screenWidth,
              height: 350,
              borderWidth: 1,
              borderTopLeftRadius: 50,

              marginTop: 10,
              marginRight: 10,
            }}
          />
        </View>
      </View>
    );
  };
  const station = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderTopLeftRadius: 50,
          borderColor: 'white',
          height: 500,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#18B9A2',
            marginLeft: 40,
            marginTop: 30,
          }}>
          Check your bus status
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            source={require('../img/target.png')}
            style={{
              width: 15,
              height: 15,
              marginLeft: 40,
            }}
          />
          <Text style={{fontSize: 12, marginLeft: 5}}>
            Jemo Square, Addis Ababa, Ethiopia
          </Text>
        </View>

        <View style={{marginLeft: 40, marginTop: 20, flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 18, color: 'black'}}>Station 01</Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,

                marginTop: 10,
              }}>
              Station 02
            </Text>
          </View>
          <View style={{marginLeft: 111}}>
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

        <View style={{marginLeft: 40, marginTop: 10, flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 18, color: 'black'}}>
              Your bus has arrived
            </Text>
          </View>
          <View style={{marginLeft: 30}}>
            <View
              style={{
                height: 15,
                width: 1,

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

        <View style={{marginTop: 20, alignSelf: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#18B9A2',
              height: 60,
              width: screenWidth / 1.1,
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
              NOTIFY ME
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {headerMap()}
      {station()}
    </ScrollView>
  );
}
