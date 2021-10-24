// nav
module.exports = [
    {text: '首页', link: '/'},
    {
        text: '指南',
        // link: '/guide/',
        items: [
            {text: '本站介绍', link: '/guide/introduction/'},
            {text: '复原工程简介', link: '/guide/reconstruction/'},
        ]
    },
    {
        text: '基础教程',
        // link: '/basic/',
        items: [
            {
                text: 'MC扫盲', link: '/basic/mc/',
                items: [
                    {text: 'MC简介', link: '/basic/mc/introduction/'},
                    {text: '客户端', link: '/basic/mc/client/'},
                    {text: '服务端', link: '/basic/mc/server/'},
                ]
            },
            {
                text: '编程语言', link: '/basic/language/',
                items: [
                    {text: 'C++', link: '/basic/language/cpp/'},
                    {text: 'Java', link: '/basic/language/java/'},
                    {text: 'Python', link: '/basic/language/python/'},
                    {text: 'JavaScript', link: '/basic/language/javascript/'},
                ]
            },
            {
                text: '专业知识', link: '/basic/course/',
                items: [
                    {text: '数据结构', link: '/basic/course/data_structure/'},
                    {text: '计算机操作系统', link: '/basic/course/operating_system/'},
                    {text: '数据库系统', link: '/basic/course/database/'},
                    {text: '计算机网络', link: '/basic/course/network/'},
                    {text: '算法设计与分析', link: '/basic/course/algorithm/'},
                ]
            },
        ]
    },
    {
        text: '开发指南',
        // link: '/development/',
        items: [
            {
                text: '准备', link: '/development/start/',
                items: [
                    {text: 'Git使用', link: '/development/start/git/'},
                    {text: '文档写作', link: '/development/start/write/'},
                ]
            },
            {
                text: 'MC开发', link: '/development/mc/',
                items: [
                    {text: '资源包', link: '/development/mc/source_package/'},
                    {text: '指令系统', link: '/development/mc/command/'},
                    {text: '数据包', link: '/development/mc/data_pack/'},
                    {text: 'Forge模组', link: '/development/mc/forge/'},
                    {text: 'Fabric模组', link: '/development/mc/fabric/'},
                    {text: 'Bukkit插件', link: '/development/mc/bukkit/'},
                ]
            },
            {
                text: '模型制作', link: '/development/model/',
                items: [
                    {text: 'blockbench', link: '/development/model/blockbench/'},
                    {text: 'blender', link: '/development/model/blender/'},
                    {text: '3dsMAX', link: '/development/model/3dsmax/'},
                ]
            },
            {
                text: '动画制作', link: '/development/animation/',
                items: [
                    {text: 'ReplayMod', link: '/development/animation/replaymod/'},
                    {text: 'Lumion', link: '/development/animation/lumion/'},
                ]
            }
        ]
    },
    {
        text: '实用工具',
        // link: '/tools/',
        items: [
            {
                text: '网络工具', link: '/tools/network/',
                items: [
                    {text: 'Frp', link: '/tools/network/frp/'},
                    {text: 'Nginx', link: '/tools/network/nginx/'},
                ]
            },
            {
                text: 'MC管理', link: '/tools/mc/',
                items: [
                    {text: 'MCSManager', link: '/tools/mc/mcsmanager/'},
                ]
            }
        ]
    },
    {
        text: '项目文档',
        // link: '/docs/',
        items: [
            {text: 'LingCat-bot', link: '/docs/lingcat-bot/'},
            {text: 'Forge建筑mod', link: '/docs/build-the-world-for-npu/'},
            {text: 'Fabric建筑mod', link: '/docs/npu_construction_mod/'},
            {text: 'jmc2obj模型导出', link: '/docs/jmc2obj/'},
            {text: '洞穴与山崖数据包', link: '/docs/npu_caves_cliffs/'},
        ]
    },
    {
        text: '效果展示',
        // link: '/display/',
        items: [
            {
                text: '虚拟校园', link: '/display/virtual_campus/',
                items: [
                    {text: '操作指南', link: '/display/virtual_campus/'},
                    {text: '浏览', link: 'http://virtualcampus.npucraft.com/'}
                ]
            },
        ]
    },
    {
        text: '关于',
        // link: '/about/',
        items: [
            {text: '个人介绍', link: '/about/self_introduction/'},
            {text: '友情链接', link: '/about/friends/'},
            {text: '感谢', link: '/about/thanks/'}
        ]

    }

]
