import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../login/Login'
import SignUp from '../login/signup'
import Logout from '../login/Logout'
import dashBordUser from '../dashbord/DashBordComponent'
import DashBordUserControl from '../dashbord/DashBordUserControl'
import DashBordComponent from '../dashbord/UserModal'
import DashBordUserControl2 from '../dashbord/DashBordUserControl2'
import DashBordComponentTv from  '../dashbord/DashBordComponentTv'
import DashBordComponentIn from '../dashbord/DashBordComponentIn'
import TantouUser from '../dashbord/TantouUser'
import DashBordTagForm from '../dashbord/DashBordTagForm'



Vue.use(VueRouter)

const routes = [
    {path: '/login', component: Login},
    {path: '/signup', component: SignUp},
    {path: '/', component: DashBordComponentIn},
    {path: '/logout', component: Logout},
    {path: '/dashboard', component: DashBordComponentTv},
    {path: '/TantouUser', component: TantouUser},
    {path: '/tag'       , component: DashBordTagForm}
]

const router = new VueRouter({
    routes,
    hashbang : false,
    mode: 'history'
  
})

export default router