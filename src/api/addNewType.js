import { collection, addDoc} from "firebase/firestore";
import { db } from "../store";

export function addType(newType) {
    addDoc(collection(db, "types"), {
      id: `${newType}`,
      value: `${newType}`,
    });         
  }
  