import axios from "axios";

const searchImages = async() => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID PAt_izADRvVpzQx2pRmMYy6PjsMjqElzZfzIV1tIC98'
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;