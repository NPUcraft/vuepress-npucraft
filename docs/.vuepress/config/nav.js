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
                text: '计算机基础',
                // link: '/basic/computer/',
                items: [
                    {text: 'Windows基础', link: '/basic/computer/windows/'},
                    {text: 'Linux基础', link: '/basic/computer/linux/'},
                ]
            },
            {
                text: 'MC基础',
                // link: '/basic/mc/',
                items: [
                    {text: 'Minecraft简介', link: '/basic/mc/intro/'},
                    {text: '客户端', link: '/basic/mc/client/'},
                    {text: '服务端', link: '/basic/mc/server/'},
                ]
            },
            {
                text: '开服指南',
                // link: '/basic/setup',
                items: [
                    {
                        text: '服务器核心',
                        link: '/basic/setup/server-core/vanilla/',
                        items: [
                            {text: 'Vanilla', link: '/basic/setup/server-core/vanilla/'},
                            {text: 'Forge', link: '/basic/setup/server-core/forge/'},
                            {text: 'Fabric', link: '/basic/setup/server-core/fabric/'},
                            {text: 'Spigot', link: '/basic/setup/server-core/spigot/'},
                            {text: 'Paper', link: '/basic/setup/server-core/paper/'},
                            {text: 'Mohist', link: '/basic/setup/server-core/mohist/'},
                            {text: 'Sponge', link: '/basic/setup/server-core/sponge/'},
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
                text: '常用插件与模组',
                // link: '/utility/plugin-mod/',
                items: [
                    {
                        text: '客户端',
                        link: '/basic/plugin-mod/client/voxelmap/',
                        items: [
                            {text: 'VoxelMap', link: '/basic/plugin-mod/client/voxelmap/'},
                            {text: 'Litematica', link: '/basic/plugin-mod/client/litematica/'},
                            {text: 'Wthit', link: '/basic/plugin-mod/client/wthit/'},
                            {text: 'Tweakeroo', link: '/basic/plugin-modd/client/tweakeroo/'},
                            {text: 'ReplayMod', link: '/basic/plugin-mod/client/replaymod/'}
                        ]
                    },
                    {
                        text: '服务端',
                        link: '/basic/plugin-mod/server/authme/',
                        items: [
                            {text: 'Authme', link: '/basic/plugin-mod/server/authme/'},
                            {text: 'AdvancedPortals', link: '/basic/plugin-mod/server/advancedportals/'},
                            {text: 'CoreProtect', link: '/basic/plugin-mod/server/coreprotect/'},
                            {text: 'EssentialsX', link: '/basic/plugin-mod/server/essentialsx/'},
                            {text: 'SkinsRestorer', link: '/basic/plugin-mod/server/skinsrestorer/'},
                            {text: 'LuckPerms', link: '/basic/plugin-mod/server/luckperms/'},
                            {text: 'PlaceholderAPI', link: '/basic/plugin-mod/server/placeholderapi/'},
                            {text: 'PluginManager', link: '/basic/plugin-mod/server/pluginmanager/'},
                            {text: 'ProtocolLib', link: '/basic/plugin-mod/server/protocollib/'},
                            {text: 'Quests', link: '/basic/plugin-mod/server/quests/'},
                            {text: 'WorldEdit', link: '/basic/plugin-mod/server/worldedit/'},
                        ]
                    },
                ]
            },
        ]
    },
    {
        text: '进阶学习',
        // link: '/advanced/',
        items: [
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
                    {text: '数据结构', link: '/advanced/course/data-structure/'},
                    {text: '计算机操作系统', link: '/advanced/course/operating-system/'},
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
                    {text: '编程规范', link: '/development/start/standrad/'}
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
                        ]
                    },
                    {
                        text: '插件', link: '/development/unofficial/plugin/bukkit/',
                        items: [
                            {text: 'Bukkit', link: '/development/unofficial/plugin/bukkit/'},
                            {text: 'Spigot', link: '/development/unofficial/plugin/spigot/'},
                            {text: 'Paper', link: '/development/unofficial/plugin/paper/'},
                            {text: 'Sponge', link: '/development/unofficial/plugin/sponge/'},
                            {text: 'BungeeCord', link: '/development/unofficial/plugin/bungeecord/'},
                            {text: 'Waterfall', link: '/development/unofficial/plugin/waterfall/'},
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
                    {text: 'ContextCapture', link: '/development/model/context-capture/'},
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
        // link: '/tools/',
        items: [
            {
                text: '文档编写',
                // link: '/tools/server/',
                items: [
                    {text: 'NotePad++', link: '/tools/write/npp/'},
                    {text: 'Typora', link: '/tools/write/typora/'},
                ]
            },
            {
                text: '网络工具',
                // link: '/tools/network/',
                items: [
                    {text: 'Frp', link: '/tools/network/frp/'},
                    {text: 'Nginx', link: '/tools/network/nginx/'},
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
            {text: '复原工程Fabric版mod', link: '/docs/npu-construction-mod/'},
            {text: 'jmc2obj模型导出', link: '/docs/jmc2obj/'},
            {text: '洞穴与山崖数据包', link: '/docs/npu-caves-cliffs/'},
        ]
    },
    {
        text: '效果展示',
        // link: '/display/',
        items: [
            {
                text: '虚拟校园',
                // link: '/display/virtual-campus/',
                items: [
                    {text: '操作指南', link: '/display/virtual-campus/'},
                ]
            },
        ]
    },
    {
        text: '关于',
        // link: '/about/',
        items: [
            // 先暂时不显示，直至等备案完成
            // {text: '个人介绍', link: '/about/self-introduction/'},
            // {text: '友情链接', link: '/about/friends/'},
            {text: '鸣谢', link: '/about/thanks/'}
        ]

    },
]
