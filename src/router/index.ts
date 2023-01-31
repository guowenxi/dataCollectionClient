import loadable from "@loadable/component";
import Layout, {MainLayout} from "@/layout";
import BasicLayout from "@/layout/basicLayout";
import {RouteConfig} from "react-router-config";
import Home from "@/pages/home";

const routesConfig: RouteConfig[] = [
    // APP 路由
    {
        component: Layout,
        routes: [
            {
                path: "/",
                exact: true,
                name: "login",
                component: loadable(() => import("@/pages/login")),
            },
            {
                exact: true,
                path: "/home",
                component: Home,
                name: "home",
            },
            {
                path: "/about",
                exact: true,
                name: "about",
                component: loadable(() => import("@/pages/about")),
            },
            {
                path: "/basicLayout",
                component: BasicLayout,
                routes: [
                    {
                        path: "/basicLayout/modularManage",
                        exact: true,
                        name: "modularManage",
                        component: loadable(() => import("@/pages/modularManage")),
                    },

                    {
                        path: "/basicLayout/interfaceManage",
                        exact: true,
                        name: "interfaceManage",
                        component: loadable(() => import("@/pages/interfaceManage")),
                    },
                    {
                        path: "/basicLayout/messageForwarding",
                        exact: true,
                        name: "messageForwarding",
                        component: loadable(() => import("@/pages/messageForwarding")),
                    },
                    {
                        path: "/basicLayout/debugLinks",
                        exact: true,
                        name: "debugLinks",
                        component: loadable(() => import("@/pages/debugLinks")),
                    },
                    {
                        path: "/basicLayout/communicationLog",
                        exact: true,
                        name: "communicationLog",
                        component: loadable(() => import("@/pages/communicationLog")),
                    },

                    {
                        path: "/basicLayout/jurisdictionManage",
                        exact: true,
                        name: "jurisdictionManage",
                        component: loadable(() => import("@/pages/jurisdictionManage")),
                    },
                    {
                        path: "/basicLayout/operationLog",
                        exact: true,
                        name: "operationLog",
                        component: loadable(() => import("@/pages/operationLog")),
                    },
                    {
                        path: "/basicLayout/equipmentLog",
                        exact: true,
                        name: "equipmentLog",
                        component: loadable(() => import("@/pages/equipmentLog")),
                    },





                    {
                        path: "/basicLayout/user",
                        exact: true,
                        name: "user",
                        component: loadable(() => import("@/pages/user")),
                    },
                    {
                        path: "/basicLayout/files",
                        exact: true,
                        name: "files",
                        component: loadable(() => import("@/pages/files")),
                    },
                    {
                        path: "/basicLayout/test",
                        exact: true,
                        name: "user",
                        component: loadable(() => import("@/pages/test")),
                    },
                ],
            },
            {
                path: "/main",
                component: MainLayout,
                routes: [
                    {
                        path: "/main/screen",
                        exact: true,
                        name: "screen",
                        component: loadable(() => import("@/pages/screen")),
                    },
                    {
                        path: "*",
                        exact: false,
                        name: "404",
                        component: loadable(() => import("@/pages/404")),
                    },
                ],
            },
            {
                path: "*",
                exact: false,
                name: "404",
                component: loadable(() => import("@/pages/404")),
            },
        ],
    },
];

export default routesConfig;
