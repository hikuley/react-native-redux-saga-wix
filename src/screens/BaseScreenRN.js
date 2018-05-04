import React, {Component} from "react";

//Base screen for React Navigation
export default class BaseScreen extends Component {

    static navigatorStyle = {
        navBarBackgroundColor: '#29A2E1', // This will be the TitleBars color when the react view is hidden and collapsed
        navBarButtonColor: '#ffffff',
    };

    constructor(props) {
        super(props);
    }

    navigateToScreen = (screenName, props, backButtonHidden) => {
        this.props.navigator.push({
            screen: screenName,
            animated: true,
            animationType: 'slide-horizontal',
            backButtonTitle: "",
            passProps: props ? {...props} : {},
            backButtonHidden: backButtonHidden ? backButtonHidden : false
        });
    };

    showLightBox = (title, content) => {
        this.props.navigator.showLightBox({
            screen: "turkcell.TcellModal",
            passProps: {
                title: 'Talebiniz Alınmıştır',
                content: 'En kısa sürede süreci tamamlamanız için gerekenler ile ilgili bir e-posta alacaksınız.',
                onClose: this.dismissLightBox,
            },
            style: {
                opacity: 0.7,
                backgroundColor: "#13213d",
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                tapBackgroundToDismiss: true
            }
        });
    }


    dismissLightBox = () => {
        this.props.navigator.dismissLightBox();
    };

}