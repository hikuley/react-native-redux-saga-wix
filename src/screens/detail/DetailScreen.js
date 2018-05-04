import React from 'react';
import {Body, Card, CardItem, Container, Content, Icon, Left, Right, Text} from 'native-base';
import BaseScreen from "../BaseScreenRN";
import {connect} from "react-redux";
import Speedometer from "react-native-speedometer-chart";

class DetailScreen extends BaseScreen {


    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }


    render() {
        let {detailRow} = this.props;
        let {ID, SaticiKodu, SaticiAdi, Sinif, Magaza, FaturaSayisi, NetCiro, Adet, Kombin, OBF, OFT, Prim, Hedef} = detailRow;
        return (
            <Container>
                <Content padder style={{paddingBottom: 10}}>


                    <CardItem bordered style={{
                        marginVertical: 10,
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/*<Speedometer value={100 * Adet} totalValue={Hedef}/>*/}

                        <Speedometer
                            style={{alignItems: "center"}}
                            value={Adet * 123}
                            totalValue={Hedef}
                            outerColor="#d3d3d3"
                            internalColor="#ff0000"
                            showText
                            text="Hedef Satış"
                            textStyle={{color: 'green'}}
                            showLabels
                            labelStyle={{color: 'blue'}}
                            showPercent
                            percentStyle={{color: 'red'}}
                        />

                    </CardItem>


                    <CardItem footer bordered style={{marginTop: 10}}>
                        <Text>Personel</Text>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>{SaticiAdi}</Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            Mağaza: {Magaza}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            Satıcı Kodu: {SaticiKodu}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            Sınıf: {Sinif}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem footer bordered style={{marginTop: 10}}>
                        <Text>
                            Durum
                        </Text>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            Fatura Sayısı: {FaturaSayisi}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            Net Ciro: {NetCiro}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            Kombin: {Kombin}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            OBF: {OBF}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            OFT: {OFT}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            Prim: {Prim}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered>
                        <Body>
                        <Text>
                            Adet: {100 * Adet}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem bordered style={{marginBottom:10}}>
                        <Body>
                        <Text>
                            Hedef: {Hedef}
                        </Text>
                        </Body>
                    </CardItem>

                </Content>
            </Container>
        );
    }
}

const bindAction = dispatch => ({});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, bindAction)(DetailScreen);