import {axiosInstance} from './config';

//获取轮播图
export const getBanner = () => {
    return axiosInstance.get("/banner");
}

//获取推荐歌单
export const getRecommendlist = () => {
    return axiosInstance.get("/personalized");
}