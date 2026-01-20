import { createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Pagamentos from "../views/Pagamentos.vue"
import Cartoes from "../views/Cartoes.vue"
import Emprestimos from "../views/Emprestimos.vue"
import Pix from "../views/Pix.vue"
import Configuracao from '@/views/Configuracao.vue'
import { patchProp } from 'vue'
import Investimentos from '@/views/Investimentos.vue'
import Login from '@/views/Login.vue'
import Cadastro from '@/views/Cadastro.vue'
import EsqueciSenha from '@/views/EsqueciSenha.vue'

const routes = [
    {
        path : '/home',
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
    {
        path : '/config',
        name: 'Configuracao',
        component: Configuracao
    },
    {
        path: '/investimentos',
        name: 'Investimentos',
        component: Investimentos
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro
    },
    {
        path: '/resetsenha',
        name : 'ResetSenha',
        component: EsqueciSenha
    }
] 

const router = createRouter({
    history : createWebHistory(),
    routes,
})


export default router