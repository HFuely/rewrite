// 首页右上角的 tab 栏（删除了游戏中心栏目）
body['data']['top'] = [
    {
        id: 176,
        icon: 'http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png',
        name: '消息',
        uri: 'bilibili://link/im_home',
        tab_id: '消息Top',
        pos: 1
    },
]
// app 是下边 tab 栏（删除了会员购栏目）
body['data']['bottom'] =[
    {
        id: 177,
        icon: 'http://i0.hdslb.com/bfs/archive/63d7ee88d471786c1af45af86e8cb7f607edf91b.png',
        icon_selected: 'http://i0.hdslb.com/bfs/archive/e5106aa688dc729e7f0eafcbb80317feb54a43bd.png',
        name: '首页',
        uri: 'bilibili://main/home/',
        tab_id: 'home',
        pos: 1
    },
    {
        id: 178,
        icon: 'http://i0.hdslb.com/bfs/archive/9c453a54eb83f5140cd098bf2e8ed8a599edc7fe.png',
        icon_selected: 'http://i0.hdslb.com/bfs/archive/79d29e6ac3b6e52652881b050e63988e2038130f.png',
        name: '动态',
        uri: 'bilibili://following/home/',
        tab_id: 'dynamic',
        pos: 2
    },
    {
        id: 179,
        icon: 'http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png',
        icon_selected: 'http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png',
        name: '我的',
        uri: 'bilibili://user_center/',
        tab_id: '我的Bottom',
        pos: 3
    },
];
$done({body: JSON.stringify(body)});
