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
import { useRoute } from "@react-navigation/native";
import {
  Icon,
  IconElement,
  Input,
  Button,
  
  Layout,
  Autocomplete,
  AutocompleteItem,
} from '@ui-kitten/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCube} from '@fortawesome/free-solid-svg-icons/faCube';
const screenWidth = Dimensions.get('window').width;

const filter = (item, query) =>
  item.value.toLowerCase().includes(query.toLowerCase());
export default function HomePage({navigation}) {
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState();
  const [dataLocation, setDataLocation] = useState([]);
  const [data, setData] = useState(dataLocation);
  const [From, setFrom] = useState('');
  const [To, setTo] = useState('');
  
  const [time, setTime] = useState('');
  const [longitudeFrom, setLongitudeFrom] = useState('');
  const [latitudeFrom, setLatitudeFrom] = useState('');
  const [longitudeTo, setLongitudeTo] = useState('');
  const [latitudeTo, setLatitudeTo] = useState('');
  const [timeSelected, setSelectedTime] = useState(false);
  const [timeChoosen, setTimeChoosen] = useState(false);
  const [valuefrom, setValuefrom] = useState('');
  const [valueTo, setValueTo] = useState('');
  const [showSearchDeattails, setShowSearchDetails] = useState(false);
  useEffect(() => {
    console.log('YeletGuzo useEffect');
    fetchLocation();
  }, []);

  useEffect(() => {
    schedule && setShowSearchDetails(true);
  }, [schedule]);

  const fetchLocation = async () => {
    console.log('YeletGuzo');
    fetch('http://city-transit-api.dev.kifiya.et/citytransit/v1/api/location')
      .then(response => response.json())
      .then(res => {
        console.log(res);
        const newArray = res.map((item, index) => {
          return {
            key: item.uuid,
            value: item.name,
            latitude: item.latitude,
            longitude: item.longitude,
          };
        });

        setDataLocation(newArray);
      })
      .catch(e => {
        console.log(e);
        Alert.alert(
          'Yelet Guzo',
          'Sorry, The booking session has expired. Please start a new booking. ',
          [{text: 'OK', onPress: () => {}}],
        );
      });
  };


const checkInputs =()=>{
  if (valueTo!='' && valueTo !=''){
    return true
  }
  else {
    return false
  }
}


  const Search = async () => {
    console.log('valuefrommm', To);
    if(checkInputs()){
    setLoading(true);
    await fetch(
      'https://city-transit-api.dev.kifiya.et/citytransit/v1/api/schedule/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          departure: {
            latitude: latitudeFrom,
            longitude: longitudeFrom,
            locationId: From,
          },
          destination: {
            latitude: latitudeTo,
            longitude: longitudeTo,
            locationId: To,
          },
        }),
      },
    )
      .then(response => response.json())

      /////////////
      .then(res => {
        // console.log(res);
        if(res.apierror == undefined){
        setSchedule(prevstate => res);}
        else {
          Alert.alert(
            'Yelet Guzo',
            'Sorry, Schedule is not defined yet. ',
            [{text: 'OK', onPress: () => {}}],
          );
        }
      })
      .catch(error => {
        console.error(error);

        Alert.alert(
          'Yelet Guzo',
          'Sorry, The booking session has expired. Please start a new booking. ',
          [{text: 'OK', onPress: () => {}}],
        );
        return;
      })
      .finally(() => {
        setLoading(false);

      });
    }
    else{

        Alert.alert(
          'Yelet Guzo',
          'Sorry, Invalid Input. ',
          [{text: 'OK', onPress: () => {}}],
        );
    }
  };

  const onSelect = index => {
    if (data[index].key != To) {
      setValuefrom(data[index].value);
      setFrom(data[index].key);
      setLatitudeFrom(data[index].latitude);
      setLongitudeFrom(data[index].longitude);
    } else {
      setValuefrom('');
    }
  };
  const onSelectTo = index => {
    console.log('data-------------', data);
    // setValueTo(dataLocation[index].value);
    if (data[index].key != From) {
      setValueTo(data[index].value);
      setTo(data[index].key);
      setLatitudeTo(data[index].latitude);
      setLongitudeTo(data[index].longitude);
    } else {
      setValueTo('');
    }
  };

  const onChangeText = query => {
    setValuefrom(query);
    setData(dataLocation.filter(item => filter(item, query)));
  };

  const clearInput = () => {
    setValuefrom('');
    setData(dataLocation);
  };


  const onChangeTextTo = query => {
    setValueTo(query);
    setData(dataLocation.filter(item => filter(item, query)));
  };
  const clearInputTo = () => {
    setValueTo('');
    setData(dataLocation);
  };
  const renderOption = (item, index) => {
    // console.log(item,index)
    return (
      <AutocompleteItem
        key={item.key}
        title={item.value}

        // accessoryLeft={StarIcon}
      />
    );
  };
  const renderCloseIconTo = props => (
    <TouchableWithoutFeedback onPress={clearInputTo}>
      <Icon
        {...props}
        name={valueTo == '' ? 'arrow-ios-downward-outline' : 'close'}
      />
    </TouchableWithoutFeedback>
  );
  
  const renderCloseIcon = props => (
    <TouchableWithoutFeedback onPress={clearInput}>
      <Icon
        {...props}
        name={valuefrom == '' ? 'arrow-ios-downward-outline' : 'close'}
        
      />
    </TouchableWithoutFeedback>
  );
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



  const allContent = () => {
    return (
      <View style={{marginBottom: 10}}>
        <DropShadow
          style={{
            shadowColor: 'black',
            shadowOffset: {width: 7, height: 6},
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}>
          <View
            style={{
              height: 320,
              backgroundColor: '#F5F5F5',
              width: screenWidth,
              borderBottomEndRadius: 50,
              
            }}>
            {chooseLoc()}
            {loading && (
              <View>
                <ActivityIndicator size={'large'} color="#3c6791" />
              </View>
            )}
          </View>
        </DropShadow>
      </View>
    );
  };
 
  const toCheckOut = (price,packageName) => {
    const distance = schedule.totalDistanceInKm
    const scheduleObj = schedule.vehicleTypes[0].schedules
    const packagePrice = price
    const packageN = packageName
    console.log('packa-----',scheduleObj)
    navigation.navigate('checkout',{valuefrom,valueTo,time,distance,packagePrice,packageN,scheduleObj});
  };
  const choosenTime = (indexx,scheduletimee) => {
    
    const index = indexx;
    const scheduletime = scheduletimee
    setTime(scheduletime)
    console.log('choosentime',index ,scheduletime)
    choosePackage(index,scheduletime)
    setTimeChoosen(true);

  };
  const timeSlot = () => {
    return (
      <ScrollView
        horizontal={true}
        style={{
          flexDirection: 'row',
          maxHeight: 100,
          // backgroundColor: 'blue',

          marginLeft: 10,
        }}  contentContainerStyle={{ flexGrow: 1 }}>
          {console.log('schedle search yeahh---',schedule)}
        {schedule &&
          schedule.vehicleTypes.map( (t,index) => (
            <DropShadow
              style={{
                shadowColor: '#171717',
                shadowOffset: {width: 5, height: 6},
                shadowOpacity: 0.1,
                shadowRadius: 2,
              }}
            >
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 107,
                  backgroundColor: '#F5F5F5',
                  elevation: 10,
                  marginLeft: 10,
                  marginTop: 20,
                  marginRight:20, 
                }}
                onPress={()=>{choosenTime(index,t.schedules[index].departureTime)}} 
              >
                <Text
                  style={{
                    alignSelf: 'center',
                    flex: 1,
                    textAlignVertical: 'center',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                  
                  }}>
                  {t.schedules[index].departureTime}
                  {console.log('time------------',t.schedules.departureTime)}
                </Text>
              </TouchableOpacity>
            </DropShadow>
          ))}
      </ScrollView>
    );
  };
  const chooseLoc = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#000000',
            marginLeft: 10,
          }}>
          YeletGuzo
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#000000',
            marginLeft: 10,
            marginTop: 10,
          }}>
          Where Would You Like To Go?
        </Text>

        <DropShadow
          style={{
            shadowColor: '#171717',
            shadowOffset: {width: 10, height: 6},
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}>
          <Autocomplete
            placeholder={`Leaving From (eg. Mexico)`}
            placeholderTextColor={'grey'}
            value={valuefrom}
            style={{
              width: screenWidth / 1.1,
              marginBottom: 20,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#FFFFFF',
              elevation: 10,
              alignSelf: 'center',
              marginTop: 30,
            }}
            size="large"
            accessoryRight={renderCloseIcon}
            accessoryLeft={renderIconFrom}
            onChangeText={onChangeText}
            onSelect={onSelect}>
            {data.map(renderOption)}
          </Autocomplete>
        </DropShadow>
        <DropShadow
          style={{
            shadowColor: '#171717',
            shadowOffset: {width: 10, height: 6},
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}>

          <Autocomplete
            placeholder={`Going To (eg. Ayat)`}
            placeholderTextColor={'grey'}
            value={valueTo}
            onSelect={onSelectTo}
            accessoryRight={renderCloseIconTo}
            accessoryLeft={renderIconTo}
            editable={true}
            style={{
              width: screenWidth / 1.1,
              marginBottom: 10,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#FFFFFF',
              elevation: 10,
              alignSelf: 'center',
            }}
            size="large"
            placement="bottom"
            onChangeText={onChangeTextTo}
            >
            {data.map(renderOption)}
          </Autocomplete>

          <TouchableOpacity
            style={{
              width: screenWidth / 1.1,
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: '#18B9A2',
              height: 61,
              borderColor: '#18B9A2',
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
        </DropShadow>
      </View>
    );
  };
  const choosePackage = () => {
    return (
      <View>
      
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <FontAwesomeIcon icon={faCube} size={15} style={{marginTop: 5}} />
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 5,
            }}>
            Choose Your Package
          </Text>
        </View>
        <View style={{height: 300,flexDirection:"row"}}> 
        {schedule && schedule.vehicleTypes[0].tariffs.map((p, index) => {
        return (
          <View style={{  
            flex:1,  
            flexDirection:'row',
            flexWrap: 'wrap'  
          }}>
          
           <View style={{width: 120}}>
              <TouchableOpacity
                style={{
                  width: 107, 
                  height: 107,
                  backgroundColor: "#F5F5F5",
                  elevation: 20,
                  borderWidth: 1,
                  borderColor: "#F5F5F5",
                  marginTop: 20,
                  borderRadius: 10,  
                }}
                onPress={() => toCheckOut(p.amount, p.name)}>
                <Text style={{ alignSelf: "center", fontSize: 18, color: "black", marginTop: 10, fontWeight: "bold" }}>
                  {p.name}
                </Text>
                <Text style={{ alignSelf: "center", fontSize: 14, color: "black", top: 10, fontWeight: "500" }}>
                  {p.name}
                </Text>
                <Text style={{ alignSelf: "center", fontSize: 12, color: "#18B9A2", top: 20 }}>
                  {p.amount}
                </Text>
              </TouchableOpacity>
              </View>
          </View>
        );
      })}

    </View>
      </View>
    );
  };

  const searchDetail = () => {
    return (
      <DropShadow style={{}}>
        <View
          View
          style={{
            width: screenWidth,
            height: 446,
            borderWidth: 1,
            borderColor: '#F5F5F5',
            backgroundColor: '#F5F5F5',
            borderRadius: 20,
            alignSelf: 'center',

            marginTop: 20,
            marginBottom: 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../img/bus.png')}
                style={{
                  width: 16,
                  height: 16,
                  alignSelf: 'center',
                }}
              />
              <Text style={{color: 'black', fontSize: 16, marginLeft: 5}}>
                {valuefrom}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
              <Image
                source={require('../img/circle.png')}
                style={{
                  width: 15,
                  height: 15,
                  alignSelf: 'center',
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
                  top: 10,
                  marginHorizontal: 5,
                }}></View>
              <Image
                source={require('../img/pin.png')}
                style={{
                  width: 15,
                  height: 15,
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{marginRight: 20, flexWrap: 'wrap'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                }}>
                {valueTo}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: screenWidth,
              backgroundColor: '#18B9A2',
              marginTop: 20,
              marginBottom: 5,
              borderStyle: 'dotted',
              borderWidth: 1,
              borderColor: '#18B9A2',
              borderRadius: 50,
              height: 0.1,
            }}></View>
          <View>
            <View
              style={{
                marginTop: 10,
                marginLeft: 20,
                marginBottom: 20,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../img/time.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 5,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                Onboarding Time
              </Text>
              <View
                style={{
                  flexDirection: 'row',

                  flex: 1,
                  justifyContent: 'flex-end',
                  marginRight: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginRight: 5,
                    color: '#18B9A2',
                  }}>
                  Slide
                </Text>
                <Image
                  source={require('../img/swipe.png')}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </View>
            </View>
          </View>
          {timeSlot()}
          {timeChoosen && choosePackage()}
        </View>
      
      </DropShadow>
    );
  };
  return (
    <ScrollView
      style={{
        backgroundColor: '#F5F5F5',
        height: Dimensions.get('screen').height,
        width: screenWidth,
      }}  contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{backgroundColor: '#F5F5F5', marginBottom: 10}}>
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
      {showSearchDeattails && searchDetail()}
      {/* {chooseLocNew()} */}
      {/* <Pressable style={{width:100,height:100,alignSelf:'center',backgroundColor:"orange"}} 
      onPress={()=>{console.log("valefrom---------",schedule.totalDistanceInKm)}}
      ></Pressable> */}
      {/* <TouchableOpacity style={{width:50,height:50,backgroundColor:'orange'}}
       onPress={()=>{console.log('data--------',schedule.vehicleTypes[0].tariffs)}}></TouchableOpacity> */}
    </ScrollView>
  );
}
