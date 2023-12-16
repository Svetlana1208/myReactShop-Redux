import { setDoc, doc} from "firebase/firestore";
import { devicesList } from "../store";

export function addNewDevice(newDevice) {
    setDoc(doc(devicesList, `${newDevice.title}`), {
        id: Date.now(),
        brand: `${newDevice.brand}`,
        category: `${newDevice.type}`,
        description: `${newDevice.description}`,
        image: `${newDevice.image}`,
        price: Number(`${newDevice.price}`),
        rating: Number(`${newDevice.rating}`),
        title: `${newDevice.title}`,
        quantity: Number(`${newDevice.quantity}`)
    })
}