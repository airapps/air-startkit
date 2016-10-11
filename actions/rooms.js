/**
 * Created by buhe on 16/9/21.
 */

export const CREATE_ROOM_DATA = "CREATE_ROOM_DATA";
export const FETCH_ROOMS_DATA = "FETCH_ROOMS_DATA";
export const DELETE_ROOM_DATA = "DELETE_ROOM_DATA";

import {BASE_URL} from './actionConst';

export function rooms() {
  return (dispatch, getState) => {

    fetch(BASE_URL + '/pilipili')
        .then(res => {console.log(res) ;return res;})
        .then(res => res.json())
        .then(json => dispatch(fetchRoomsData(json)));

  };
}

export function fetchRoomsData(rooms) {
  return {
    type: FETCH_ROOMS_DATA,
    rooms: rooms
  }
}

export function createRoom(room) {
  return (dispatch) => {

    fetch(BASE_URL + '/pilipili', {
      method: "POST"
    })
        .then(res => res.json())
        .then(json => dispatch(createRoomData(json)));

  };
}

export function createRoomData(room) {
  return {
    type: CREATE_ROOM_DATA,
    room: room
  }
}


export function deleteRoom(id) {
  return (dispatch) => {

    fetch(BASE_URL + '/pilipili' + id, {
      method: "DELETE"
    })
        .then(res => res.json())
        .then(json => dispatch(deleteRoomData(id)));

  };
}

export function deleteRoomData(id) {
  return {
    type: DELETE_ROOM_DATA,
    room: id
  }
}