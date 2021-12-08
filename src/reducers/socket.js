import socketIOClient from "socket.io-client";
import { SERVER_NODE } from "../constants/Config";

const initialState = socketIOClient.connect(SERVER_NODE);
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    default:
      return state;
  }
};
export default myReducer;
