import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: "AIzaSyDjZDiUicv2xtAV_oGiAlUcgQKS5zaqSxU",
  cx: "4664e2678ac17419c",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
