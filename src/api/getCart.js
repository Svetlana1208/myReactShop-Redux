import { collection, getDocs} from "firebase/firestore";

export async function getCart(userRef) {
    const currentCart = [];
    const data = await getDocs(collection(userRef, "cart"));
    data.forEach((device) => {
      currentCart.push(device.data());
    });
    return currentCart
}
