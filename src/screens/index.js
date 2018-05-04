import {Navigation} from 'react-native-navigation';
import HomeScreen from "./home/HomeScreen";
import DetailScreen from "./detail/DetailScreen";

export function registerScreens(store, Provider) {
    Navigation.registerComponent('erenholding.HomeScreen', () => HomeScreen, store, Provider);
    Navigation.registerComponent('erenholding.DetailScreen', () => DetailScreen, store, Provider);
}