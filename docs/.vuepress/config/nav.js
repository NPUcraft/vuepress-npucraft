// nav
module.exports = [
    {text: '首页', link: '/'},
    {
        text: '介绍',
        // link: '/intro/',
        items: [
            {text: '本站介绍', link: '/intro/website/'},
            {text: '复原工程简介', link: '/intro/reconstruction/'},
        ]
    },
    {
        text: '基础教程',
        // link: '/basic/',
        items: [
            {
                text: 'MC基础',
                // link: '/basic/introduction/',
                items: [
                    {text: 'Minecraft简介', link: '/basic/introduction/mc/'},
                    {text: '客户端', link: '/basic/introduction/client/'},
                    {text: '服务端', link: '/basic/introduction/server/'},
                ]
            },
            {
                text: '计算机基础',
                // link: '/basic/introduction/',
                items: [
                    {text: '编程规范', link: '/development/start/standrad/'},
                    {text: 'Windows基础', link: '/advanced/course/windows/'},
                    {text: 'Linux基础', link: '/advanced/course/linux/'},
                ]
            },
        ]
    },
    {
        text: '进阶学习',
        // link: '/advanced/',
        items: [
            {
                text: '开服指南',
                // link: '/advanced/server',
                items: [
                    {
                        text: '服务器核心',
                        link: '/basic/setup/server_core/vanilla/',
                        items: [
                            {text: 'Vanilla', link: '/advanced/server/server_core/vanilla/'},
                            {text: 'Forge', link: '/advanced/server/server_core/forge/'},
                            {text: 'Fabric', link: '/advanced/server/server_core/fabric/'},
                            {text: 'Spigot', link: '/advanced/server/server_core/spigot/'},
                            {text: 'Paper', link: '/advanced/server/server_core/paper/'},
                            {text: 'Mohist', link: '/advanced/server/server_core/mohist/'},
                        ]
                    },
                    {
                        text: '服务器代理',
                        link: '/advanced/server/proxy/bungeecord/',
                        items: [
                            {text: 'BungeeCord', link: '/advanced/server/proxy/bungeecord/'},
                            {text: 'Waterfall', link: '/advanced/server/proxy/waterfall/'},
                            {text: 'Velocity', link: '/advanced/server/proxy/velocity/'},
                        ]
                    },
                ]
            },
            {
                text: '编程语言',
                // link: '/advanced/language/',
                items: [
                    {text: 'Java', link: '/advanced/language/java/'},
                    {text: 'C++', link: '/advanced/language/cpp/'},
                    {text: 'Python', link: '/advanced/language/python/'},
                    {text: 'JavaScript', link: '/advanced/language/javascript/'},
                ]
            },
            {
                text: '专业课程',
                // link: '/advanced/course/',
                items: [
                    {text: '数据结构', link: '/advanced/course/data_structure/'},
                    {text: '计算机操作系统', link: '/advanced/course/operating_system/'},
                    {text: '数据库系统', link: '/advanced/course/database/'},
                    {text: '计算机网络', link: '/advanced/course/network/'},
                    {text: '算法设计与分析', link: '/advanced/course/algorithm/'},
                    {text: '软件测试', link: '/advanced/course/testing/'},
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
                text: '原版开发',
                // link: '/development/official/',
                items: [
                    {text: '资源包', link: '/development/official/resourcepack/'},
                    {text: '数据包', link: '/development/official/datapack/'},
                ]
            },
            {
                text: '非原版开发',
                // link: '/development/unofficial/',
                items: [
                    {
                        text: '模组', link: '/development/unofficial/mod/forge/',
                        items: [
                            {text: 'Forge', link: '/development/unofficial/mod/forge/'},
                            {text: 'Fabric', link: '/development/unofficial/mod/fabric/'},
                            {text: 'Sponge', link: '/development/unofficial/mod/sponge/'},
                        ]
                    },
                    {
                        text: '插件', link: '/development/unofficial/plugin/bukkit/',
                        items: [
                            {text: 'Bukkit', link: '/development/unofficial/plugin/bukkit/'},
                            {text: 'BungeeCord', link: '/development/unofficial/plugin/bungeecord/'},
                            {text: 'Velocity', link: '/development/unofficial/plugin/velocity/'},
                        ]
                    },
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
            },
        ]
    },
    {
        text: '实用程序',
        // link: '/utility/',
        items: [
            {
                text: '网络工具',
                // link: '/utility/network/',
                items: [
                    {text: 'Frp', link: '/utility/network/frp/'},
                    {text: 'Nginx', link: '/utility/network/nginx/'},
                ]
            },
            {
                text: '服务端管理',
                // link: '/utility/server/',
                items: [
                    {text: 'VPS', link: '/utility/server/vps/'},
                    {text: 'MCSManager', link: '/utility/server/mcsmanager/'},
                    {text: 'MCDR', link: '/utility/server/mcdr/'},
                ]
            },
            {
                text: '常用插件/模组',
                // link: '/utility/plugin_and_mod/',
                items: [
                    {
                        text: '客户端',
                        link: '/utility/plugin_and_mod/client/voxelmap/',
                        items: [
                            {text: 'VoxelMap', link: '/utility/plugin_and_mod/client/voxelmap/'},
                            {text: 'Litematica', link: '/utility/plugin_and_mod/client/litematica/'},
                            {text: 'Wthit', link: '/utility/plugin_and_mod/client/wthit/'},
                            {text: 'Tweakeroo', link: '/utility/plugin_and_mod/client/tweakeroo/'},
                            {text: 'ReplayMod', link: '/utility/plugin_and_mod/client/replaymod/'}
                        ]
                    },
                    {
                        text: '服务端',
                        link: '/utility/plugin_and_mod/server/authme/',
                        items: [
                            {text: 'Authme', link: '/utility/plugin_and_mod/server/authme/'},
                            {text: 'AdvancedPortals', link: '/utility/plugin_and_mod/server/advancedportals/'},
                            {text: 'CoreProtect', link: '/utility/plugin_and_mod/server/coreprotect/'},
                            {text: 'EssentialsX', link: '/utility/plugin_and_mod/server/essentialsx/'},
                            {text: 'SkinsRestorer', link: '/utility/plugin_and_mod/server/skinsrestorer/'},
                            {text: 'LuckPerms', link: '/utility/plugin_and_mod/server/luckperms/'},
                            {text: 'PlaceholderAPI', link: '/utility/plugin_and_mod/server/placeholderapi/'},
                            {text: 'PluginManager', link: '/utility/plugin_and_mod/server/pluginmanager/'},
                            {text: 'ProtocolLib', link: '/utility/plugin_and_mod/server/protocollib/'},
                            {text: 'Quests', link: '/utility/plugin_and_mod/server/quests/'},
                            {text: 'WorldEdit', link: '/utility/plugin_and_mod/server/worldedit/'},
                        ]
                    },
                ]
            },
        ]
    },
    {
        text: '项目文档',
        // link: '/docs/',
        items: [
            {text: 'LingCat-bot/灵喵', link: '/docs/lingcat-bot/'},
            {text: '复原工程Forge版mod', link: '/docs/build-the-world-for-npu/'},
            {text: '复原工程Fabric版mod', link: '/docs/npu_construction_mod/'},
            {text: 'jmc2obj模型导出', link: '/docs/jmc2obj/'},
            {text: '洞穴与山崖数据包', link: '/docs/npu_caves_cliffs/'},
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
            {text: '鸣谢', link: '/about/thanks/'}
        ]

    },
]
