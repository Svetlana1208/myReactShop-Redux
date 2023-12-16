import { collection, getDocs} from "firebase/firestore";

export async function getData(folder, document) {
    const data = [];
    const response = await getDocs(collection(folder, document));
    response.forEach((item) => {
        data.push(item.data());
      });     
    return data
};
