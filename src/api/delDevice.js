import { deleteDoc, doc } from "firebase/firestore";
import { devicesList } from "../store";

export function delDevice(currentDevice) {
    deleteDoc(doc(devicesList, `${currentDevice.title}`));
  }