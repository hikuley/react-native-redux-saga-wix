import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/configureRedux";
import {registerScreens} from './screens';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'erenholding.HomeScreen', // unique ID registered with Navigation.registerScreen
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    },
    appStyle: {
        orientation: 'portrait',
    }
});