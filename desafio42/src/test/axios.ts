import axios from 'axios';

export const axiosFunc = async (url:string): Promise<object> => {
    const result = await axios.get(url)
    return result.data;
}