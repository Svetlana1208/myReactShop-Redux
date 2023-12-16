import { ordersList } from '../store';
import { doc, setDoc } from "firebase/firestore";

export function sendOrderApi(dateOrder, idOrder, user, device) {
    setDoc(doc(ordersList, `${idOrder + " " + device.title}`), {
        dateOrder: `${dateOrder}`,
        idOrder: `${idOrder}`,
        customer: `${user.email}`,
        id: Date.now() + `${device.id}`,
        image: `${device.image}`,
        title: `${device.title}`,
        price: Number(`${device.price}`),
        quantity: `${device.quantity}`
      }); 
}