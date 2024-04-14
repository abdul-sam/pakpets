import { useEffect, useState } from "react";
import { listBreeders } from "../services/breeder";
import { Breeders } from "../constants/breeders";

const useBreeders = () => {
  const [shops, setBreeders] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // TODO: Fetch breeders from the API
    // listBreeders()
    //   .then(response => {
    //     setBreeders(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    setBreeders(Breeders);
  };

  return shops;
}

export default useBreeders;