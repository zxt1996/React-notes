import {axiosInstance} from './config';

//获取轮播图
export const getBanner = () => {
    return axiosInstance.get("/banner");
}

//获取推荐歌单
export const getRecommendlist = () => {
    return axiosInstance.get("/personalized");
}

//获取歌手分类列表
export const getSongerlist = (cat,initial) => {
    if(!cat && !initial){
        return axiosInstance.get("/artist/list");
    }else if(cat && !initial){
        let temp = "/artist/list?cat=" + cat;
        return axiosInstance.get(temp);
    }else{
        let temp = "/artist/list?cat=" + cat + "&initial=" + initial;
        return axiosInstance.get(temp);
    }
}

//获取歌单详情
export const getplaylistdetail = (uid) => {
    let data = `/playlist/detail?id=${uid}`;
    return axiosInstance.get(data);
}

//获取歌曲详情
export const getSongdetail = (ids) => {
    let data = `/song/detail?ids=${ids}`;
    return axiosInstance.get(data);
}