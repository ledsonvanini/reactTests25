import { 
    type RouteConfig, 
    index, 
    route, 
    layout, 
    prefix 
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("financas","routes/financas.tsx"),
    route("dashboard","routes/dashboard.tsx"),
    route("compras","routes/compras.tsx"),
] satisfies RouteConfig;
