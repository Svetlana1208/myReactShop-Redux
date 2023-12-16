import { useSelector } from 'react-redux';

export default function useData() {
  let devices = useSelector((state) => state.devices.value);
  const selectedType = useSelector((state) => state.selectedType.value);
  const selectedBrand = useSelector((state) => state.selectedBrand.value);

    if((selectedBrand === 'Всі' && selectedType === null) || (selectedBrand === 'Всі' && selectedType === "Каталог") || (selectedBrand === null && selectedType === "Каталог") || (selectedBrand === 'Всі' && selectedType === "Каталог")) {
        return devices;
      } else if((selectedType !== null && selectedBrand === null && selectedType !== "Каталог") || (selectedBrand === 'Всі' && selectedType !== null)) {
        devices = devices.filter(device => device.category === selectedType)
      } else if(selectedType !== null && selectedBrand  !== null && selectedType !== "Каталог") {
        devices = devices.filter(device => device.brand === selectedBrand && device.category === selectedType)
      } else if((selectedType === null && selectedBrand !== null) || (selectedType === "Каталог" && selectedBrand !== null)) {
        devices = devices.filter(device => device.brand === selectedBrand)
      };
    return devices;
}