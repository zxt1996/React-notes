import axios from 'axios';

//axios的实例及拦截器配置
const axiosInstance = () => {
    const baseUrl = 'https://cnodejs.org/api/v1';
    let instance = axios.create({
        baseURL:baseUrl
    });

    instance.interceptors.response.use(
        res => {
            if(res.status === 200){
                return res.data;
            }
        },
        err => {
            console.log(err,'网络错误');
        }
    )

    return instance;
}

export {axiosInstance};