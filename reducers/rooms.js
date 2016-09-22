/**
 * Created by buhe on 16/9/21.
 */
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    AppRegistry,
    Dimensions,
    ScrollView
} from 'react-native';

import {FETCH_ROOMS_DATA,CREATE_ROOM_DATA,DELETE_ROOM_DATA} from '../actions/rooms';

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_ROOMS_DATA:
      return {
        ...state,
        data: action.rooms,
      };

    // ...other actions
    case CREATE_ROOM_DATA:
      let rooms = state.rooms;
      return {
        ...state,
        data: [...rooms,action.room]
      };

    case DELETE_ROOM_DATA:
      return {
        ...state,
        data: action.rooms,
      };

    default:
      return state;
  }
}
