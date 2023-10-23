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
import { useRoute } from "@react-navigation/native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons/faCircleCheck';
const screenWidth = Dimensions.get('window').width;
export default function CheckOut({navigation}) {
  const [show, setShow] = useState(false);
  const [isSaturday,setSaturday] = useState(false)
  const [isSunday,setSunday] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [message,setMessage] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signPhoneNumber, setSignPhoneNumber] = useState();
  const [loading, setLoading] = useState(false);
  const [bookData,setBookData] = useState()
  const route = useRoute();
  // const availableSchedule = route.params.availableSchedule;
  
  const valuefrom = route.params.valuefrom
  const valueTo = route.params.valueTo
  const time = route.params.time
  const distance = route.params.distance
  const packagePrice = route.params.packagePrice
  const packageN = route.params.packageN
  const scheduleObj = route.params.scheduleObj

useEffect(()=>{
  console.log('data-----------',bookData)
  setBookData(bookData)
},[bookData])

  const checkLoginForm = () => {
    if (phoneNumber != null) {
      return true;
    } else {
      return false;
    }
  };
  const firstNameChecker = () => {
   
      if (
        firstName.length >= 3 &&
        firstName.length <= 15 &&
        /\d/.test(firstName) == false
      ) {
        return true;
      } else if (/\d/.test(firstName) == false) {
        // return true
        console.log("---------checked");
      } else {
        setMessage('invalid First Name')
        return false;
      }
   
  };
  const lastNameChecker = () => {
   
      if (
        lastName.length >= 3 &&
        lastName.length <= 15 &&
        /\d/.test(lastName) == false
      ) {
        return true;
      } else {
        setMessage('invalid Last Name')
        return false;
      }
   
  };
  const phoneNumberChecker = () => {
   
      if (phoneNumber.length == 10 || (phoneNumber.length == 13 && !undefined)) {
        return true;
      } else {
        setMessage('invalid Phone Number')
        return false;
      }
  
  };

  const registerFuncion = () => {

if(firstNameChecker() && lastNameChecker() && phoneNumberChecker()){

    setLoading(true);
    fetch(
      'https://city-transit-api.dev.kifiya.et/citytransit/v1/api/booking/book',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          scheduleUuid: scheduleObj[0].uuid, 
          passenger: { 
            firstName: firstName, 
            middleName: "Test", 
            lastName: lastName, 
            gender: "MALE", 
            email: "bassefa@gmail.com", 
            phoneNumber: signPhoneNumber 
          }, 
          startingDate: "2000-12-23", 
          endDate: "2015-12-15", 
          includeSunday: isSunday, 
          includeSaturday: isSaturday, 
          bookingType: packageN, 
          customerId: null 
        }),
      },
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBookData(data)
        if (data.apierror == undefined) {
         
        
          const packageData = {scheduleObj,data,valuefrom,valueTo,packageN,packagePrice,distance,firstName,lastName,phoneNumber}
          navigation.navigate('paymentOptions',{packageData});
        

        } else {
          
        
          return Alert.alert(
            'Yelet Guzo',
            'Sorry The session has expired. Please try again later.',
            [{text: 'OK', onPress: () => {}}],
          );
        }
      })
      .catch(error => {
        // navigation.navigate("home");
        console.error(error);
        Alert.alert(
          'Yelet Guzo',
          'Sorry The session has expired. Please try again later. ',
          [{text: 'OK', onPress: () => {}}],
        );
      })
      .finally(() => {
        setShowSignUp(false);
        setShowSignIn(false);
        setShow(false);
        setLoading(false);
       
        // console.log("fvbfbfdbbbdbddf", loginD);
      })}

      else{
        Alert.alert(
          'Yelet Guzo',
          'Invalid Input. ',
          [{text: 'OK', onPress: () => {}}],
        );
      }
    
  };

  const signInFunction = () => {
    // setLoading(true);
    // fetch(
    //   'http://city-transit-api.dev.kifiya.et/citytransit/v1/api/user/login',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       phoneNumber: phoneNumber,
    //     }),
    //   },
    // )
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //     if (data.access_token != undefined && data.refresh_token != undefined) {
    //       // setLoginD(data)
    //       const loginD = data;
    //       // navigation.navigate("home");
    //       navigation.navigate('paymentOptions', {loginD});
    //     } else {
    //       navigation.navigate('paymentOptions');
    //       return Alert.alert(
    //         'LIYU BUS',
    //         'Incorrect phone number or password ',
    //         [{text: 'OK', onPress: () => {}}],
    //       );
    //     }
    //   })
    //   .catch(error => {
    //     // navigation.navigate("home");
    //     console.error(error);
    //     Alert.alert(
    //       'LIYU BUS',
    //       'Sorry The session has expired. Please try again later. ',
    //       [{text: 'OK', onPress: () => {}}],
    //     );
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //     setShow(false);
    //     // console.log("fvbfbfdbbbdbddf", loginD);
    //   });

  };

  const Register = () => {
    return (
      <View>
        <Modal
          transparent={true}
          style={{
    
          }}
          onRequestClose={() => {
            setShow(false);
          }}
       
        >
         
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
          
            }}>
            <View
              style={{
                width: screenWidth / 1.4,
                alignSelf: 'center',
              elevation:1,
                shadowColor: 'black',
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 10,
                height: 450,
                
               
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 30,
                  marginLeft: 10,
                 
                 
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setShowSignIn(true), setShowSignUp(false);
                  }}>
                  <Text
                    style={
                      showSignIn
                        ? {fontSize: 18, color: '#18B9A2', fontWeight: 'bold'}
                        : {fontSize: 18, color: 'black', fontWeight: 'bold'}
                    }>
                    SIGN IN
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    marginHorizontal: 10,
                    color: '#18B9A2',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  |
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowSignIn(false), setShowSignUp(true);
                  }}>
                  <Text
                    style={
                      showSignUp
                        ? {fontSize: 18, color: '#18B9A2', fontWeight: 'bold'}
                        : {fontSize: 18, color: 'black', fontWeight: 'bold'}
                    }>
                    CREATE ACCOUNT
                  </Text>
                </TouchableOpacity>
              </View>
              {showSignUp && CreateAccount()}
              {showSignIn && logIn()}
              {loading && (
                <View style={{marginTop: 20}}>
                  <ActivityIndicator size={'large'} color="#3c6791" />
                </View>
              )}
            </View>
          </View>
         
        </Modal>
      </View>
    );
  };

  const CreateAccount = () => {
    return (
      <View style={{alignSelf: 'center', marginTop: 40}}>
        <DropShadow
          style={{
            shadowColor: '#171717',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.1,
            shadowRadius: 50,
          }}>
          <Input
            value={firstName}
            placeholder="First Name"
            onChangeText={(val) => setFirstName(val)}
            style={{
              width: screenWidth / 1.7,
              marginBottom: 20,
              borderWidth: 1,
              borderRadius: 40,
              backgroundColor: '#EBEBEB',
              elevation: 10,
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
            value={lastName}
            placeholder="Last Name"
            onChangeText={(val) => setLastName(val)}
            style={{
              width: screenWidth / 1.7,
              marginBottom: 20,
              borderWidth: 1,
              borderRadius: 40,
              backgroundColor: '#EBEBEB',
              elevation: 10,
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
            value={phoneNumber}
            placeholder="Phone Number"
            keyboardType="numeric"
            onChangeText={(val) => setPhoneNumber(val)}
            style={{
              width: screenWidth / 1.7,
              marginBottom: 20,
              borderWidth: 1,
              borderRadius: 40,
              backgroundColor: '#EBEBEB',
              elevation: 10,
            }}
          />
        </DropShadow>
        {/* <DropShadow
          style={{
            shadowColor: '#171717',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.1,
            shadowRadius: 50,
          }}>
          <Input
            value={lastName}
            placeholder="Gender"
            // onChangeText={(nextValue) => setPhoneNmber(nextValue)}
            style={{
              width: screenWidth / 1.7,
              marginBottom: 20,
              borderWidth: 1,
              borderRadius: 40,
              backgroundColor: '#EBEBEB',
              elevation: 10,
            }}
          />
        </DropShadow> */}
        
        <View style={{flexDirection:'row'}}>
        <Switch
                trackColor={{ false: "#EBEBEB", true:"#18B9A2" }}
                thumbColor={isSaturday ? "#18B9A2" : "#18B9A2"}
                onValueChange={() => setSaturday(!isSaturday)}
                value={isSaturday}
                
              />

              <Text style={{ color: "black",  fontSize: 16,fontWeight:'500' }}>
                Satuday
              </Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Switch
                trackColor={{ false: "#EBEBEB", true: "#18B9A2" }}
                thumbColor={isSunday ? "#18B9A2" : "#18B9A2"}
                onValueChange={() => setSunday(!isSunday)}
                value={isSunday}
                
              />

              <Text style={{ color: "black", fontSize: 16,fontWeight:'500' }}>
                Sunday
              </Text>
              </View>
        <TouchableOpacity
          onPress={registerFuncion}
          style={{
            backgroundColor: '#18B9A2',
            height: 60,
            borderWidth: 1,
            borderColor: '#18B9A2',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              alignSelf: 'center',
              flex: 1,
              textAlignVertical: 'center',
            }}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const logIn = () => {
    return (
      <View style={{alignSelf: 'center', marginTop: 40}}>
        <DropShadow
          style={{
            shadowColor: '#171717',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.1,
            shadowRadius: 50,
          }}>
          <Input
            value={phoneNumber}
            placeholder="Phone Number"
            // onChangeText={(nextValue) => setPhoneNmber(nextValue)}
            style={{
              width: screenWidth / 1.7,
              marginBottom: 20,
              borderWidth: 1,
              borderRadius: 40,
              backgroundColor: '#EBEBEB',
              elevation: 10,
            }}
          />
        </DropShadow>
        <TouchableOpacity
          onPress={signInFunction}
          style={{
            backgroundColor: '#18B9A2',
            height: 60,
            borderWidth: 1,
            borderColor: '#18B9A2',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              alignSelf: 'center',
              flex: 1,
              textAlignVertical: 'center',
            }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const yourRoute = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 20,
          }}>
          Your Route
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image
            source={require('../img/circle.png')}
            style={{
              width: 15,
              height: 15,
              marginLeft: 20,
              opacity: 0.6,
              marginTop: 3,
              marginRight: 10,
            }}
          />
          <Text style={{color: 'black', fontSize: 16}}>{valuefrom}</Text>
        </View>
        <View
          style={{
            height: 30,
            width: 1,
            backgroundColor: '#18B9A2',
            marginLeft: 25,
          }}></View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../img/pin.png')}
            style={{
              width: 15,
              height: 15,
              marginLeft: 20,
              opacity: 0.6,
              marginTop: 3,
              marginRight: 10,
            }}
          />
          <Text style={{color: 'black', fontSize: 16}}> {valueTo}</Text>
        </View>
      </View>
    );
  };

  const yourSchedule = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 30,
          }}>
          Schedule
        </Text>
        <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '200'}}>
              Onboarding Time
            </Text>
            <Text
              style={{
                color: '#18B9A2',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              12:03
              <Text style={{color: 'black'}}> Morning</Text>
            </Text>
          </View>
          <View style={{marginLeft: 30}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '200'}}>
              Onboarding Place
            </Text>
            <Text
              style={{
                color: '#18B9A2',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Jemo Station
            </Text>
          </View>
        </View>

        <View style={{marginLeft: 20, marginTop: 20}}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '200'}}>
            Onboarding Time
          </Text>
          <Text
            style={{
              color: '#18B9A2',
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
           {`${distance} Km`}
          </Text>
        </View>
      </View>
    );
  };

  const CheckOutCard = () => {
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
            width: screenWidth / 1.1,
            alignSelf: 'center',
            height: 580,
            backgroundColor: '#F5F5F5',
            // backgroundColor: 'red',
            borderWidth: 1,
            borderColor: '#F5F5F5',
            borderRadius: 10,
            elevation: 10,
            marginTop: 10,
            marginBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignSelf: 'flex-end',
              marginRight: 20,
            }}>
            <Text style={{color: '#18B9A2', fontSize: 18, fontWeight: 'bold'}}>
             {`${packageN} Plan`}
            </Text>
            <Image
              source={require('../img/boxg.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
                opacity: 0.9,
              }}
            />
          </View>

          {yourRoute()}
          {yourSchedule()}
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 20,
              }}>
              Do you have Voucher Code?
            </Text>
            <View style={{flexDirection: 'row'}}>
              <DropShadow
                style={{
                  shadowColor: '#171717',
                  shadowOffset: {width: 10, height: 6},
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                }}>
                <Input
                  // value={From}
                  placeholder=""
                  // onChangeText={nextValue => setFrom(nextValue)}
                  style={{
                    width: 200,
                    height: 60,

                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: '#FFFFFF',
                    elevation: 10,
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                />
              </DropShadow>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size={25}
                style={{
                  color: '#18B9A2',
                  alignSelf: 'center',
                  marginLeft: 10,
                }}
              />
            </View>
            <Text
              style={{alignSelf: 'center', color: '#18B9A2', marginTop: 20}}>
              --------------------------------------------------------------------------
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                color: '#18B9A2',
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
             {`${packagePrice} ETB`}
            </Text>
          </View>
        </View>
      </DropShadow>
    );
  };
  return (
    <ScrollView
      style={ show ?
        
        {
          backgroundColor: '#F5F5F5',
          height: Dimensions.get('screen').height,
          width: screenWidth,
          opacity:0.08
        
        }
        : {
        backgroundColor: '#F5F5F5',
        height: Dimensions.get('screen').height,
        width: screenWidth,
       
      }}>
      {CheckOutCard()}
      {show && Register()}
      <TouchableOpacity
        style={{
          backgroundColor: '#18B9A2',
          width: screenWidth / 1.1,
          height: 60,
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#18B9A2',
        }}
        onPress={() => {
          setShow(true);
          setShowSignIn(false)
          setShowSignUp(true);
        
        }}>
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            flex: 1,
            textAlignVertical: 'center',
            color: 'white',
          }}>
          CHECKOUT
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{width:50,height:50,backgroundColor:'orange'}}
       onPress={()=>{console.log(isSunday)}}></TouchableOpacity> */}
    </ScrollView>
  );
}
