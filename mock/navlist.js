var data = [
    {
        path: '/home',
        name: '首页'
    },
    {
        name: '鲸与青年',
        child: [
            {
                name: '介绍',
                path: '/components'
            },
            {
                name: '上传类',
                child: [
                    {
                        path: '/components/permission',
                        name: '商品上传'
                    },
                    {
                        path: '/components/pageTable',
                        name: '上帝模式'
                    }
                ]
            },
            {
                name: '查看类',
                child: [
                    {
                        path: '/components/pageTitle',
                        name: '商品查看'
                    },
                    {
                        path: '/components/pageSection',
                        name: '信息查看'
                    },
                    {
                        path: '/components/pageSearch',
                        name: '商品搜索'
                    },
                    {
                        path: '/components/pageToolbar',
                        name: '鲸与工具'
                    }
                ]
            },
            {
                name: '修改类',
                child: [
                    {
                        path: '/components/pageNotes',
                        name: '修改信息'
                    }
                ]
            }
        ]
    },
    {
        name: '鲸与旅购',
        child: [
            {
                path: '/example/table',
                name: '商品页面',
                permission: ['edit']
            },
            {
                path: '/example',
                name: '订单页面',
                child: [
                    {
                        path: '/example/charts',
                        name: '订单信息'
                    }
                ]
            },
            {
                path: '/example/map',
                name: '地图页面'
            }
        ]
    },
    {
        path: '/theme',
        name: '主题切换'
    }
]

export default [{
    path: '/user/navlist',
    data: data
}]