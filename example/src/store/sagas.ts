import { all } from 'redux-saga/effects';
import { watchIncreaseCounter } from '../counterSaga';

function* rootSaga() {
    yield all([watchIncreaseCounter]);
}

export default rootSaga;