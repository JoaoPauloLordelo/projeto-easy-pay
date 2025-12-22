import { createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Pagamentos from "../views/Pagamentos.vue"
import Cartoes from "../views/Cartoes.vue"
import Emprestimos from "../views/Emprestimos.vue"
import Pix from "../views/Pix.vue"

const routes = [
    {
        path : '/',
        name: 'Home',
        component: Home
    },
    {
        path : '/pagamentos',
        name: 'Pagamentos',
        component: Pagamentos
    },
    {
        path : '/cartoes',
        name: 'Cartoes',
        component: Cartoes
    },
    {
        path : '/emprestimos',
        name: 'Emprestimos',
        component: Emprestimos
    },
    {
        path : '/pix',
        name: 'Pix',
        component: Pix
    },
] 

const router = createRouter({
    history : createWebHistory(),
    routes,
})


export default router