import { collection, addDoc} from "firebase/firestore";
import { db } from "../store";

export function addBrand(newBrand) {
    addDoc(collection(db, "brands"), {
      id: `${newBrand}`,
      value: `${newBrand}`,
    });         
  }
  