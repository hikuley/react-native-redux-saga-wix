import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import styles from "./styles";

const Loader = props => {

    const {loading, ...attributes} = props;

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => {
                console.log('close modal')
            }}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={loading}/>
                </View>
            </View>
        </Modal>
    )
};

export default Loader;