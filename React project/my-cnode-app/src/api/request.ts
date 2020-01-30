import {axiosInstance} from './config';

//主题首页
export const gettopics = () => {
    return axiosInstance().get('/topics');
}