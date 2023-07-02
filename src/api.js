import axios from "axios";

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 58Vb-ZTjlVvv5x2KJ5WkcT4WfHfMnRbD0W22DZQsJ4k'
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;