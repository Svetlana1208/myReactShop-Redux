import { usersList } from "../store";
import { setDoc, doc } from "firebase/firestore"; 


export function addUser(email) {
    setDoc(doc(usersList, `${email}`), {
        id: `${email}`,
        value: `${email}`,
      });
}