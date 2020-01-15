//关于歌手查询的url参数
export const buswhosinger = {
    singercat:null,
    singerinitial:null,
}

//歌单id
export const songlistid = {
    id:''
}

//关于歌曲列表的数据
export const songlistdetail = {
    name:'',//歌单名
    coverImgUrl:'',//歌单背景图
    tags:'',//歌单标签
    description:'',//歌单描述
    nickname:null,//创作者
    avatarUrl:null,//创造者头像
    privileges:null//歌曲id列表
}

//播放列表
export const playlistdetail = {
    fullScreen:false,//播放器是否为全屏模式
    playing:false,//当前歌曲是否播放
    playList:[],
    mode:'',//播放模式['sequence','loop','random']
    currentIndex:-1,//当前歌曲在播放列表的索引位置
    showPlayList:false,//是否展示播放列表
    hasbottom:false,//底部播放器是否出现
    privileges:[],//歌曲信息
}

