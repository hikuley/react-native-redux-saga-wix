import React from 'react';
import {Container, Content, Text} from 'native-base';
import BaseScreen from "../BaseScreenRN";
import {connect} from "react-redux";

class ExampleScreen extends BaseScreen {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>Example Screen</Text>
                </Content>
            </Container>
        );
    }
}

const bindAction = dispatch => ({});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, bindAction)(ExampleScreen);