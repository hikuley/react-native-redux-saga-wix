import {Platform} from "react-native";
import Config from 'react-native-config';

const Configuration = {
    API_URL: Config.API_URL || "http://erendenemeapp.azurewebsites.net",

    PLATFORM_IOS: Platform.OS == "ios",
    PLATFORM_ANDROID: Platform.OS != "ios",
    HTTP_TIMEOUT_MS: 40000, /* 40 sec */
};

export default Configuration;
