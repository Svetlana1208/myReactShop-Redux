import { deleteDoc, doc } from "firebase/firestore";

export function delOrder(cartRef, device) {
    deleteDoc(doc(cartRef, `${device.title}`));
}