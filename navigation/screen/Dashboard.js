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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faTicket} from '@fortawesome/free-solid-svg-icons/faTicket';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
const screenWidth = Dimensions.get('window').width;

export default function Dashboard({navigation}) {
  const plusFunction = () => {
    navigation.navigate('home');
  };
  const getYourTickets = () => {
    navigation.navigate('yourTickets');
    console.log('clicked');
  };
  const plus = () => {
    return (
      <View>
        <DropShadow
          style={{
            shadowColor: 'black',
            shadowOffset: {width: 7, height: 6},
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderWidth: 1,
              borderRadius: 50,
              backgroundColor: '#EBEBEB',
              borderColor: '#EBEBEB',
              marginBottom: 10,
              elevation: 20,
            }}
            onPress={plusFunction}>
            <FontAwesomeIcon
              icon={faPlus}
              size={40}
              style={{
                color: '#17B9A2',
                alignSelf: 'center',
                top: 5,
                justifyContent: 'center',
              }}
            />
          </TouchableOpacity>
        </DropShadow>
      </View>
    );
  };
  const allContent = () => {
    return (
      <DropShadow
        style={{
          shadowColor: '#171717',
          shadowOffset: {width: 5, height: 6},
          shadowOpacity: 0.1,
          shadowRadius: 2,
        }}>
        <View
          style={{
            height: Dimensions.get('screen').height / 2,
            backgroundColor: '#EBEBEB',
            width: screenWidth,
            borderBottomEndRadius: 50,
          }}>
          {yourPlan()}
          {yourNextPlan()}
        </View>
      </DropShadow>
    );
  };
  const bottomContent = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 18,
            color: '#17B9A2',
            marginTop: 20,
            marginLeft: 20,
          }}>
          Latest Routes
        </Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            source={require('../img/bus.png')}
            style={{
              width: 16,
              height: 16,
              marginLeft: 20,
              marginTop: 10,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
              marginLeft: 10,
            }}>
            Jemo One
          </Text>
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <Image
              source={require('../img/circle.png')}
              style={{
                width: 15,
                height: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}
            />
            <View
              style={{
                backgroundColor: '#18B9A2',
                width: screenWidth / 5,
                borderStyle: 'dotted',
                borderWidth: 1,
                borderColor: '#18B9A2',
                borderRadius: 50,
                height: 0.1,
                top: 20,
                marginHorizontal: 5,
              }}></View>
            <Image
              source={require('../img/circle.png')}
              style={{
                width: 15,
                height: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
            }}>
            Mexico
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const yourPlan = () => {
    return (
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            marginLeft: 20,
            marginVertical: 10,
            fontWeight: 'bold',
          }}>
          Your Plan
        </Text>
        <DropShadow
          style={{
            shadowColor: '#171717',
            shadowOffset: {width: 5, height: 6},
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}>
          <View
            style={{
              backgroundColor: '#EBEBEB',
              width: screenWidth / 1.1,
              height: 101,
              alignSelf: 'center',
              borderWidth: 2.5,
              borderColor: '#EBEBEB',
              borderRadius: 10,
              elevation: 20,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              <TouchableOpacity style={{alignSelf: 'center'}}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={30}
                  style={{
                    color: '#18B9A2',
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
              <View>
                <View
                  style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
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
                  <View style={{marginLeft: 5}}>
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
              </View>
              <TouchableOpacity style={{alignSelf: 'center'}}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size={30}
                  style={{
                    color: '#18B9A2',
                    alignSelf: 'center',
                    marginLeft: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </DropShadow>
      </View>
    );
  };
  const yourNextPlan = () => {
    return (
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            marginLeft: 20,
            marginVertical: 20,
            fontWeight: 'bold',
          }}>
          Your Next Trip
        </Text>
        <DropShadow
          style={{
            shadowColor: '#171717',
            shadowOffset: {width: 5, height: 6},
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}>
          <View
            style={{
              backgroundColor: '#EBEBEB',
              width: screenWidth / 1.1,
              height: 60,

              alignSelf: 'center',
              borderWidth: 2,
              borderColor: '#EBEBEB',
              borderRadius: 10,
              marginBottom: 20,
              flexDirection: 'row',
              elevation: 20,
            }}>
            <Image
              source={require('../img/alarm.png')}
              style={{
                width: 30,
                height: 30,
                marginLeft: 50,
                marginTop: 10,
                marginRight: 10,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
                alignSelf: 'center',
              }}>
              {`   15   :   00   :   45`}
            </Text>
          </View>
        </DropShadow>

        <DropShadow
          style={{
            shadowColor: 'black',
            shadowOffset: {width: 7, height: 5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}>
          <TouchableOpacity
            style={{
              width: 177,
              height: 50,
              backgroundColor: '#EBEBEB',
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#EBEBEB',
              elevation: 20,
              shadowColor: 'black',
              marginLeft: 20,
              marginTop: 40,
            }}
            onPress={getYourTickets}>
            <View
              style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faTicket}
                size={25}
                style={{
                  color: '#18B9A2',
                  textAlignVertical: 'center',
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  color: '#18B9A2',
                  fontSize: 18,
                  textAlignVertical: 'center',
                  alignSelf: 'center',
                  marginLeft: 5,
                }}>
                E-Ticket
              </Text>
            </View>
          </TouchableOpacity>
        </DropShadow>
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
      <View style={{backgroundColor: '#EBEBEB', marginBottom: 10}}>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginVertical: 30,
                marginLeft: 30,
              }}>
              <Image
                source={require('../img/hamburger.png')}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </TouchableOpacity>
          <Pressable>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: 100,
                top: 10,
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginTop: 20,
                    color: '#000000',
                    textAlign: 'right',
                    right: 10,
                  }}>
                  Jemo Square, Addis Ababa
                </Text>
              </View>
              <Image
                source={require('../img/profile10.png')}
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 20,
                }}
              />
            </View>
          </Pressable>
        </View>
      </View>
      {allContent()}
      {bottomContent()}

      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        {plus()}
      </View>
    </ScrollView>
  );
}
