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
import QRCode from 'react-native-qrcode-svg';
const screenWidth = Dimensions.get('window').width;

export default function TicketScreen() {
  const ticketCard = () => {
    return (
      <View>
        <View
          style={{
            height: 330,
            backgroundColor: 'white',
            width: screenWidth / 1.5,
            alignSelf: 'center',
          }}>
          <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
            <View>
              <Text style={{fontSize: 13, color: 'black', fontWeight: '200'}}>
                Name
              </Text>
              <Text
                style={{
                  color: '#18B9A2',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Yared Endale
              </Text>
            </View>
            <View style={{marginLeft: 50}}>
              <Text
                style={{fontSize: 23, color: '#18B9A2', fontWeight: 'bold'}}>
                LOGO
              </Text>
              <Text
                style={{
                  color: '#18B9A2',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                CITY BUS
              </Text>
            </View>
          </View>

          <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
            <View>
              <Text style={{fontSize: 13, color: 'black', fontWeight: '200'}}>
                Route
              </Text>
              <Text
                style={{
                  color: '#18B9A2',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Jemo - Mexico
              </Text>
            </View>
          </View>

          <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
            <View>
              <Text style={{fontSize: 13, color: 'black', fontWeight: '200'}}>
                Onboarding Place
              </Text>
              <Text
                style={{
                  color: '#18B9A2',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Jemo
              </Text>
            </View>
            <View style={{marginLeft: 30}}>
              <Text style={{fontSize: 13, color: 'black', fontWeight: '200'}}>
                Drop-off place
              </Text>
              <Text
                style={{
                  color: '#18B9A2',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Mexico
              </Text>
            </View>
          </View>

          <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
            <View>
              <Text style={{fontSize: 13, color: 'black', fontWeight: '200'}}>
                Date Issued
              </Text>
              <Text
                style={{
                  color: '#18B9A2',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                01 - 10 - 23
              </Text>
            </View>
            <View style={{marginLeft: 60}}>
              <Text style={{fontSize: 13, color: 'black', fontWeight: '200'}}>
                Date Expired
              </Text>
              <Text
                style={{
                  color: '#18B9A2',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                01 - 11 - 23
              </Text>
            </View>
          </View>

          <View style={{marginLeft: 20, marginTop: 10}}>
            <Text style={{fontSize: 13, color: 'black', fontWeight: '200'}}>
              Passenger ID
            </Text>
            <Text
              style={{
                color: '#18B9A2',
                fontSize: 13,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              415 484 545
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 292,
            backgroundColor: '#18B9A2',
            width: screenWidth / 1.5,
            alignSelf: 'center',
          }}>
          <View style={{alignSelf: 'center', marginTop: 30}}>
            <QRCode
              value="415484545"
              size={194}
              color="white"
              backgroundColor="#18B9A2"
            />
          </View>

          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontWeight: '600',
              fontSize: 14,
              marginTop: 20,
            }}>
            415484545
          </Text>
        </View>
      </View>
    );
  };
  return <ScrollView style={{marginTop: 10}}>{ticketCard()}</ScrollView>;
}
