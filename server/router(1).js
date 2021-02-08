const express = require("express");
const router = express.Router();
const sqlClient = require("./config")
const jwt = require("jsonwebtoken");
const url = require("url");

/**
 * 注册
 */
router.post("/register", (req, res) => {
    const { username, password, email } = req.body;
    const sql = "insert into user values(null,?,?,?)";
    const arr = [username, password, email]
    sqlClient(sql, arr, result => {
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: "注册成功"
            })
        } else {
            res.send({
                status: 401,
                msg: '注册失败'
            })
        }
    })
})

/**
 * 登陆
 */
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const sql = "select * from user where username=? and password=?";
    const arr = [username, password];
    sqlClient(sql, arr, result => {
        if (result.length > 0) {
            let token = jwt.sign({
                username,
                id: result[0].id
            }, 'soomekeys')
            res.send({
                status: 200,
                token,
                username
            })
        } else {
            res.send({
                status: 401,
                msg: "登陆失败"
            })
        }
    })
})


/**
 * 后面要联调
 */

/**
 * 商品查询
 */
router.get("/backend/item/selectTbItemAllByPage",(req,res) =>{
    // 分页
    const page = url.parse(req.url,true).query.page || 1;
    const sql = "select * from project order by id desc limit 10 offset " + (page - 1) * 10;
    sqlClient(sql,null,result =>{
        if(result.length > 0){
            res.send({
                status:200,
                result
            })
        }else{
            res.send({
                status:401,
                msg:"暂无数据"
            })
        }
    })
})

/**
 * 商品总条数
 */
router.get("/total",(req,res) =>{
    const sql = "select count(*) from project where id";
    sqlClient(sql,null,result =>{
        if(result.length > 0){
            res.send({
                status:200,
                result
            })
        }else{
            res.send({
                status:500,
                msg:"暂无更多数据"
            })
        }
    })
})

module.exports = router;