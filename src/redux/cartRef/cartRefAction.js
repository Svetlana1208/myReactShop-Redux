import { usersCarts } from '../../store';
import { collection, doc} from "firebase/firestore";


export function getCartRefAction(state, action) {
    if(action.payload) {
        const userRef = doc(usersCarts, `${action.payload.email}`);
        state.value = collection(userRef, "cart");
      }
}
