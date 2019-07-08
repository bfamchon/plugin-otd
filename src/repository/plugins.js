import axios from 'axios';

const url = 'http://www.mocky.io/v2/5d22fb432e00004f00c3ed59';

export const fetchAllPlugins = async () => {
    const req = axios.get(url);
    const { data } = await req;
    return data;
};
