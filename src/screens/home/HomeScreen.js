import React from 'react';
import {Body, Container, Content, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';
import BaseScreen from "../BaseScreenRN";
import {connect} from "react-redux";
import {getListRequest} from "../../redux/home/Actions";
import Loader from "../../components/loader/Loader";
import renderIf from "../../utility/renderIf";
import uuidv4 from "../../utility/uuidv4";

class HomeScreen extends BaseScreen {


    _onClickListItem = (row) => {
        this.navigateToScreen("erenholding.DetailScreen", {detailRow: row});
    };


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getListRequestAction();
    }

    render() {
        let {fetchDataCompleted, list} = this.props.homeState;
        let listView = [];

        list.map((row) => {
            let {SaticiAdi, Magaza, SaticiKodu} = row;

            const listItem = (
                <ListItem key={uuidv4()} button onPress={() => this._onClickListItem(row)}>
                    <Body>
                    <Text>{SaticiAdi}</Text>
                    <Text note>{Magaza}</Text>
                    </Body>
                    <Right>
                        <Text note>{SaticiKodu}</Text>
                    </Right>
                </ListItem>
            );
            listView.push(listItem);
        });

        return (
            <Container>
                <Content>
                    <Loader loading={!fetchDataCompleted}/>

                    {renderIf(listView,
                        <List>
                            {listView}
                        </List>
                    )}

                </Content>
            </Container>
        );
    }
}

const bindAction = dispatch => ({
    getListRequestAction: () => dispatch(getListRequest())
});

const mapStateToProps = state => ({
    homeState: state.homeReducer,
});

export default connect(mapStateToProps, bindAction)(HomeScreen);