import axios from 'axios';

export const baseUrl = 'http://music.couchpotato.fun';

//axios的实例及拦截器配置
const axiosInstance = axios.create({
    baseURL:baseUrl
});

axiosInstance.interceptors.response.use(
    res => {
        if(res.status === 200){
            return res.data;
        }
    },
    err => {
        console.log(err,'网络错误');
    }
)

export {axiosInstance};