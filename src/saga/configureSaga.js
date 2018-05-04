import HomeSaga from "./homeSaga";

const configureSaga = function* configurationSaga() {
    yield [HomeSaga()];
};
export default configureSaga;