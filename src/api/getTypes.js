import { collection, getDocs} from "firebase/firestore";
import { db } from "../store";

export async function getTypes() {
    const data = [{id: 'Каталог', value: 'Каталог'}];
    const response = await getDocs(collection(db, "types"));
    response.forEach((item) => {
        data.push(item.data());
      });      
    return data
};