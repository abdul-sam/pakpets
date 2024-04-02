import { useEffect, useState } from "react";
import { listShops } from "../services/shop";
import { PetShops } from "../constants/shops";

const useShops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // TODO: Fetch categories from the API
    // listShops()
    //   .then(response => {
    //     setShops(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    setShops(PetShops);
  };

  return shops;
}

export default useShops;