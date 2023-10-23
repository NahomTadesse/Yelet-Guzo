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
import {
  useRoute,
  NavigationContainer,
  useFocusEffect,
} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';
import {Icon, IconElement, Input, Button, Layout} from '@ui-kitten/components';
const screenWidth = Dimensions.get('window').width;
import QRCode from 'react-native-qrcode-svg';

export default function TicketScreen() {
  const route = useRoute();
 
  const packageData = route.params.packageData

  const ticketCard = () => {
    return (
      <View>
        <View
          style={{
            height: 292,
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
                {`${packageData.firstName} ${packageData.lastName}`}
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
               {`${packageData.valuefrom} -- ${packageData.valueTo}`}
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

        <View style={{marginTop: 20, marginBottom: 20, alignSelf: 'center'}}>
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
              DOWNLOAD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={{marginTop: 10,backgroundColor: "#F5F5F5",}}>
      <Text
        style={{
          color: 'black',
          fontWeight: '600',
          fontSize: 20,
          alignSelf: 'center',
          marginBottom: 30,
        }}>
        You have successfully{'\n'}Purchased Your Plan
      </Text>
      {ticketCard()}
    </ScrollView>
  );
}
