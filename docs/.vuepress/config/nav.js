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
                text: '扫盲',
                // link: '/basic/introduction/',
                items: [
                    {text: 'Minecraft简介', link: '/basic/introduction/mc/'},
                    {text: '客户端', link: '/basic/introduction/client/'},
                    {text: '服务端', link: '/basic/introduction/server/'},
                ]
            },
            {
                text: '开服指南',
                // link: '/basic/setup',
                items: [
                    {
                        text: '服务器核心',
                        link: '/basic/setup/server_core/vanilla/',
                        items: [
                            {text: 'Vanilla', link: '/basic/setup/server_core/vanilla/'},
                            {text: 'Forge', link: '/basic/setup/server_core/forge/'},
                            {text: 'Fabric', link: '/basic/setup/server_core/fabric/'},
                            {text: 'Spigot', link: '/basic/setup/server_core/spigot/'},
                            {text: 'Paper', link: '/basic/setup/server_core/paper/'},
                            {text: 'Mohist', link: '/basic/setup/server_core/mohist/'},
                        ]
                    },
                    {
                        text: '服务器代理',
                        link: '/basic/setup/proxy/bungeecord/',
                        items: [
                            {text: 'BungeeCord', link: '/basic/setup/proxy/bungeecord/'},
                            {text: 'Waterfall', link: '/basic/setup/proxy/waterfall/'},
                            {text: 'Velocity', link: '/basic/setup/proxy/velocity/'},
                        ]
                    },
                ]
            },
            {
                text: '常用插件/模组',
                // link: '/basic/plugin_mod/',
                items: [
                    {
                        text: '客户端',
                        link: '/basic/plugin_and_mod/client/voxelmap/',
                        items: [
                            {text: 'VoxelMap', link: '/basic/plugin_and_mod/client/voxelmap/'},
                            {text: 'Litematica', link: '/basic/plugin_and_mod/client/litematica/'},
                            {text: 'Wthit', link: '/basic/plugin_and_mod/client/wthit/'},
                            {text: 'Tweakeroo', link: '/basic/plugin_and_mod/client/tweakeroo/'},
                            {text: 'ReplayMod', link: '/basic/plugin_and_mod/client/replaymod/'}
                        ]
                    },
                    {
                        text: '服务端',
                        link: '/basic/plugin_and_mod/server/authme/',
                        items: [
                            {text: 'Authme', link: '/basic/plugin_and_mod/server/authme/'},
                            {text: 'SkinsRestorer', link: '/basic/plugin_and_mod/server/skinsrestorer/'},
                            {text: 'CoreProtect', link: '/basic/plugin_and_mod/server/coreprotect/'},
                            {text: 'LuckPerms', link: '/basic/plugin_and_mod/server/luckperms/'},
                            {text: 'EssentialsX', link: '/basic/plugin_and_mod/server/essentialsx/'},
                        ]
                    },
                ]
            },
        ]
    },
    {
        text: '专业学习',
        // link: '/knowledge/',
        items: [
            {
                text: '编程语言',
                // link: '/knowledge/language/',
                items: [
                    {text: 'C++', link: '/knowledge/language/cpp/'},
                    {text: 'Java', link: '/knowledge/language/java/'},
                    {text: 'Python', link: '/knowledge/language/python/'},
                    {text: 'JavaScript', link: '/knowledge/language/javascript/'},
                ]
            },
            {
                text: '学科知识',
                // link: '/knowledge/course/',
                items: [
                    {text: '数据结构', link: '/knowledge/course/data_structure/'},
                    {text: '计算机操作系统', link: '/knowledge/course/operating_system/'},
                    {text: '数据库系统', link: '/knowledge/course/database/'},
                    {text: '计算机网络', link: '/knowledge/course/network/'},
                    {text: '算法设计与分析', link: '/knowledge/course/algorithm/'},
                ]
            },
        ]
    },
    {
        text: '开发指南',
        // link: '/development/',
        items: [
            {
                text: '准备',
                // link: '/development/start/',
                items: [
                    {text: 'Git使用', link: '/development/start/git/'},
                    {text: '文档写作', link: '/development/start/write/'},
                ]
            },
            {
                text: 'MC开发',
                // link: '/development/mc/',
                items: [
                    {text: '资源包', link: '/development/mc/resource_package/'},
                    {text: '数据包', link: '/development/mc/data_pack/'},
                    {text: 'Forge模组', link: '/development/mc/forge/'},
                    {text: 'Fabric模组', link: '/development/mc/fabric/'},
                    {text: 'Bukkit插件', link: '/development/mc/bukkit/'},
                ]
            },
            {
                text: '建模',
                // link: '/development/model/',
                items: [
                    {text: 'Blockbench', link: '/development/model/blockbench/'},
                    {text: 'Blender', link: '/development/model/blender/'},
                    {text: '3dsMAX', link: '/development/model/3dsmax/'},
                ]
            },
            {
                text: '动画',
                // link: '/development/animation/',
                items: [
                    {text: 'Blockbuster', link: '/development/animation/blockbuster/'},
                    {text: 'Lumion', link: '/development/animation/lumion/'},
                ]
            }
        ]
    },
    {
        text: '项目文档',
        // link: '/docs/',
        items: [
            {text: 'LingCat-bot', link: '/docs/lingcat-bot/'},
            {text: '复原工程Forge版mod', link: '/docs/build-the-world-for-npu/'},
            {text: '复原工程Fabric版mod', link: '/docs/npu_construction_mod/'},
            {text: 'jmc2obj模型导出', link: '/docs/jmc2obj/'},
            {text: '洞穴与山崖数据包', link: '/docs/npu_caves_cliffs/'},
        ]
    },
    {
        text: '实用工具',
        // link: '/tools/',
        items: [
            {
                text: '网络工具',
                // link: '/tools/network/',
                items: [
                    {text: 'Frp', link: '/tools/network/frp/'},
                    {text: 'Nginx', link: '/tools/network/nginx/'},
                ]
            },
            {
                text: '服务端管理',
                // link: '/tools/mc/',
                items: [
                    {text: 'MCSManager', link: '/tools/mc/mcsmanager/'},
                ]
            }
        ]
    },
    {
        text: '效果展示',
        // link: '/display/',
        items: [
            {
                text: '虚拟校园',
                // link: '/display/virtual_campus/',
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
