import axios from "axios";

const get = async(TMBD_API_URL) => {
    const response = await axios.get(TMBD_API_URL);
    return response.data;
}

export default { get };