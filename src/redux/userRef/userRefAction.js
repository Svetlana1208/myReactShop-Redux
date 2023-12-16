import { usersCarts } from '../../store';
import { doc} from "firebase/firestore";


export function getUserRefAction(state, action) {
    if(action.payload) {
        state.value = doc(usersCarts, `${action.payload.email}`);
      }
}