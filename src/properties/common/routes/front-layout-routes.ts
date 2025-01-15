import { FundProjectionScreenOutlined, HomeOutlined, TagOutlined, UserAddOutlined } from "@ant-design/icons";
import { MenuDataItem } from "@ant-design/pro-components";

/**
 * 配置前端页面渲染的静态路由信息 & 为每个路由菜单配置 authCode
 * refer:   https://procomponents.ant.design/components/layout#prolayout
 * @param t 多语言翻译
 * @returns 前端静态路由
 * @description
 * * path: 路由路径
 * * name: 路由名称
 * * icon: 路由名称左侧ICON
 * * routes: 子路由
 * * hideInBreadcrumb: false, // 面包屑中不展示隐藏
 * * hideInMenu: true, Menu中不展示，隐藏
 * * exact: false, ，用于在匹配路由时启用精确匹配
 * * hideLayout: true, 隐藏Prolayout头部和侧边栏
 * * canJump: 2  面包屑点击是否可跳转，默认可跳转  2：不可跳转
 */
const getStaticMainLayoutRoutes = (): MenuDataItem[] => {
    const v = [
        {
            name: "Home",
            path: "/",
            icon: <HomeOutlined />,
        },
        {
            name: "热门就业岗位",
            path: "/hot",
            icon: <TagOutlined />,
        },
    ]
    return v;
}