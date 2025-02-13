import { 
    type RouteConfig, 
    index, 
    route, 
    layout, 
    prefix 
} from "@react-router/dev/routes";

export default [
    index("routes/login.tsx"),
    route("cadastro-gms","routes/cadGMS.tsx"),
    route("cadastro-dados","routes/cadDados.tsx"),
    route("cadastro-fornecedor","routes/cadFornecedor.tsx"),
    route("pesquisa-contrato","routes/pesquisar.tsx"),
] satisfies RouteConfig;
