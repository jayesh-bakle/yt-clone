import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
};

// export async function fetchFromAPI(url){
//     try {
//       const response = await fetch(`${BASE_URL}/${url}`, options);
//       const result = await response.text();
//       const responseObject = JSON.parse(result);
//       console.log("objeto JS: "+responseObject);
//       return responseObject;
//     } catch (error) {
//       console.error(error);
//     }
//   }