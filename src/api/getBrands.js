import { collection, getDocs} from "firebase/firestore";
import { db } from "../store";

export async function getBrands() {
    const data = [{id: 'Всі', value: 'Всі'}];
    const response = await getDocs(collection(db, "brands"));
    response.forEach((item) => {
        data.push(item.data());
      });      
    return data
};
