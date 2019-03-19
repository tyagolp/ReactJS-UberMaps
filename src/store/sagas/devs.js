import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as DevActions } from '../ducks/devs';

export function* addDev(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.repository}`);

    const devData = {
      id: data.id,
      name: data.name,
      alias: data.login,
      description: data.description,
      avatar_url: data.avatar_url,
      url: data.url,
    };

    yield put(DevActions.addDevsSuccess(devData));
  } catch (error) {
    yield put(DevActions.addDevsSuccess('Usuario não encontrado'));
  }
}
