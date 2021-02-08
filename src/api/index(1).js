import axios from "../utils/request"
import base from "./base"

const api = {
    /**
     * 注册
     */
    register(params){
        return axios.post(base.baseUrl + base.register,params)
    },
    /**
     * 登陆
     */
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    /**
     * 商品列表
     */
    selectTbItemAllByPage(params){
        return axios.get(base.baseUrl + base.selectTbItemAllByPage,{
            params
        })
    },
    /**
     * 商品总条数
     */
    total(){
        return axios.get(base.baseUrl + base.total)
    }
}

export default api;