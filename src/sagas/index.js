import { put, call, select, takeLatest, takeEvery} from 'redux-saga/effects'
import get from 'axios'

function* getImages() {
  try {
    const pageNumber = (Math.floor(Math.random() * Math.floor(9))) + 1;
    const limit = 50;
    const images = yield call(get, `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`);
    yield put({type: 'IMAGES_GET_SUCCESS', images: images.data});
  } catch (error) {
    yield put({type: 'IMAGES_GET_FAIL', error: error});
  }
}

function* logState(action) {
  const state = yield select();
  console.log('action', action);
  console.log('state after', state);
}

function* rootSaga() {
  yield takeLatest('IMAGES_GET', getImages);
  yield takeEvery('*', logState);
}

export default rootSaga
