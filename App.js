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
import * as eva from '@eva-design/eva';
import SplashScreen from "react-native-splash-screen";
// import FirstPage from './navigation/screen/firstPage';
// import HomePage from './navigation/screen/HomePage';
// import PaymentOptions from './navigation/screen/PaymentOptions';
// import CheckOut from './navigation/screen/CheckOut';
// import TicketScreen from './navigation/screen/TicketScreen';
// import TrackingPage from './navigation/screen/TrackingPage';
// import Balance from './navigation/screen/Balance';
// import Dashboard from './navigation/screen/Dashboard';
import MainContainer from './navigation/MainContainer';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <MainContainer />
      </ApplicationProvider>
    </>
  );
}
