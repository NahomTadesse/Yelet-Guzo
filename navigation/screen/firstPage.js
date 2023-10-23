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

export default function FirstPage() {
  const [FirstFrom, setFirstFrom] = useState('');
  const [FirstTo, setFirstTo] = useState('');
  const Search = () => {};
  const renderIconFrom = props => (
    <TouchableWithoutFeedback>
      <Image
        source={require('../img/circle.png')}
        style={{
          width: 20,
          height: 20,
          marginLeft: 10,
          opacity: 0.6,
        }}
      />
    </TouchableWithoutFeedback>
  );
  const renderIconTo = props => (
    <TouchableWithoutFeedback>
      <Image
        source={require('../img/pin.png')}
        style={{
          width: 20,
          height: 20,
          marginLeft: 10,
          opacity: 0.6,
        }}
      />
    </TouchableWithoutFeedback>
  );
  const topProfile = () => {
    return (
      <View style={{marginTop: Dimensions.get('screen').height / 6}}>
        <Image
          source={require('../img/profile10.png')}
          style={{
            width: 50,
            height: 50,
            alignSelf: 'center',
          }}
        />
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
          <Image
            source={require('../img/target.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={{color: 'black', fontSize: 14, marginLeft: 5}}>
            Jemo Square, Addis Ababa
          </Text>
        </View>
      </View>
    );
  };
  const chooseLoc = () => {
    return (
      <DropShadow
        style={{
          shadowColor: '#171717',
          shadowOffset: {width: 5, height: 10},
          shadowOpacity: 0.4,
          shadowRadius: 2,
        }}>
        <View
          style={{
            width: screenWidth / 1.1,
            backgroundColor: '#F5F5F5',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#F5F5F5',
            height: 361,
            alignSelf: 'center',
            marginTop: 54,

            elevation: 20,
          }}>
          <Text
            style={{
              fontSize: 25,
              color: '#000000',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            YeletGuzo
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#000000',
              fontWeight: '100',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            Where Would You Like To Go?
          </Text>
          <DropShadow
            style={{
              shadowColor: '#171717',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.1,
              shadowRadius: 50,
            }}>
            <Input
              value={FirstFrom}
              placeholder={`From (eg. Mexico Square)`}
              accessoryLeft={renderIconFrom}
              onChangeText={nextValue => setFirstFrom(nextValue)}
              style={{
                width: screenWidth / 1.3,
                marginBottom: 20,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                elevation: 10,
                alignSelf: 'center',
                marginTop: 30,
              }}
            />
          </DropShadow>
          <DropShadow
            style={{
              shadowColor: '#171717',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.1,
              shadowRadius: 50,
            }}>
            <Input
              value={FirstTo}
              placeholder={`To (eg. Ayat Square)`}
              accessoryLeft={renderIconTo}
              onChangeText={nextValue => setFirstTo(nextValue)}
              style={{
                width: screenWidth / 1.3,
                marginBottom: 10,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                elevation: 10,
                alignSelf: 'center',
              }}
            />
          </DropShadow>
          <TouchableOpacity
            style={{
              width: 163,
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: '#18B9A2',
              height: 61,
              borderColor: '#18B9A2',
              alignSelf: 'center',
            }}
            onPress={() => {
              Search();
            }}>
            <Text
              style={{
                alignSelf: 'center',
                flex: 1,
                textAlignVertical: 'center',

                fontSize: 18,
                color: 'white',
              }}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </DropShadow>
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#F5F5F5',
        height: Dimensions.get('screen').height,
        width: screenWidth,
      }}>
      {topProfile()}
      {chooseLoc()}
    </View>
  );
}
