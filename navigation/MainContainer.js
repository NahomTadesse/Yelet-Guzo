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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import {Icon, IconElement, Input, Button, Layout} from '@ui-kitten/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import Dashboard from './screen/Dashboard';
import Balance from './screen/Balance';
import TrackingPage from './screen/TrackingPage';
import Homepage from './screen/HomePage';
import CheckOut from './screen/CheckOut';
import PaymentOptions from './screen/PaymentOptions';
import TicketScreen from './screen/TicketScreen';
import YourTickets from './screen/YourTickets';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();
const screenWidth = Dimensions.get('window').width;
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Screen1') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Screen2') {
              iconName = focused ? 'ios-bus' : 'ios-bus';
            } else if (route.name === 'Screen3') {
              iconName = focused ? 'ios-card' : 'ios-card';
            } else if (route.name === 'Screen4') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#17B9A2',
          inactiveTintColor: 'gray',
          labelStyle: {display: 'none'},
        }}>
        <Tab.Screen
          name="Screen1"
          component={Home}
          options={() => ({
            headerShown: false,
            unmountOnBlur: true,
          })}
        />
        <Tab.Screen
          name="Screen2"
          component={TrackingPage}
          options={() => ({
            headerShown: false,
            unmountOnBlur: true,
          })}
        />

        <Tab.Screen
          name="Screen3"
          component={Balancee}
          options={() => ({
            headerShown: false,
            unmountOnBlur: true,
          })}
        />
        <Tab.Screen
          name="Screen4"
          component={Dashboardd}
          options={() => ({
            headerShown: false,
            unmountOnBlur: true,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Home = () => {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Homepage}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Screen
        name="checkout"
        component={CheckOut}
        options={{
          title: "Check Out",
          headerStyle: {
            backgroundColor: "#F5F5F5",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "#18B9A2",
          headerTitleStyle: {
          
            fontWeight: 'bold',
            color: "#000000",
            fontSize: 20,
            marginLeft:screenWidth/5
          },
        }}
      />
      <Screen
        name="paymentOptions"
        component={PaymentOptions}
        options={{
          title: "Payment Options",
          headerStyle: {
            backgroundColor: "#F5F5F5",
            alignItems: "center",
            height: 60,
          },
          headerTintColor: "#18B9A2",
          headerTitleStyle: {
          
            fontWeight: 'bold',
            color: "#000000",
            fontSize: 20,
            marginLeft:screenWidth/5
          },
        }}
      />
      <Screen
        name="ticket"
        component={TicketScreen}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
      <Screen
        name="yourTickets"
        component={YourTickets}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
    </Navigator>
  );
};

const Dashboardd = () => {
  return (
    <Navigator>
      <Screen
        name="dash"
        component={Dashboard}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
   <Screen
        name="home"
        component={Homepage}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
   
    
      <Screen
        name="yourTickets"
        component={YourTickets}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
    </Navigator>
  );
};

const Balancee = () => {
  return (
    <Navigator>
  
   <Screen
        name="balance"
        component={Balance}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },

          tabBarButton: () => null,
          headerShown: false,
        })}
      />
   
    </Navigator>
  );
};