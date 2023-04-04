import axios from 'axios'
import cookie from 'react-cookies';


//axios.defaults.withCredentials = true;

export const getResource = () => axios.get(`/api/resource`);

const prefix = "//192.168.43.133:9080/DataBase/V1/";
//const prefix = "http://110.42.214.206:9090/DataBase/V1/";

// 登陆注册接口
export const registerUser = (email: String, pwd: String) => axios.post(`${prefix}registerUser`, 
{userEmail: email, userPwd: pwd}, {headers: {'Content-Type':'application/x-www-form-urlencoded', 'Content-Security-Policy': 'upgrade-insecure-requests'}});
export const userLogin = (email: string, pwd: string) => axios.post(`${prefix}userLogin`, 
{userEmail: email, userPwd: pwd}, {headers: {'Content-Type':'application/x-www-form-urlencoded', 'Content-Security-Policy': 'upgrade-insecure-requests'}});

// 个人主页的接口
export const uploadImg = (file: string, fileType: string) => axios.post(`${prefix}uploadFile`, 
{file: file, fileType: fileType}, {headers: {'Content-Type':'application/x-www-form-urlencoded', 'Content-Security-Policy': 'upgrade-insecure-requests'}});  // 上传图片
export const queryUserInfo = () => axios.get(`${prefix}queryUserInfo`, 
{headers: {Accept: "application/json", "Cache-Control": "no-cache", 'Content-Security-Policy': 'upgrade-insecure-requests'}});  // 根据token获取用户信息
export const updateUserInfo = (avatar: string, name: string) => axios.post(`${prefix}updateUserInfo`, 
{avatarUrl: avatar, userName: name}, {headers: {'Content-Type':'application/x-www-form-urlencoded', 'Content-Security-Policy': 'upgrade-insecure-requests'}});  // 更新个人信息
export const getDemoList = () => axios.get(`${prefix}getDemoList`, 
{headers: {Accept: "application/json", "Cache-Control": "no-cache", 'Content-Security-Policy': 'upgrade-insecure-requests'}});  // 获取案例
export const getMyProject = () => axios.get(`${prefix}getMyProject`, 
{headers: {Accept: "application/json", "Cache-Control": "no-cache", 'Content-Security-Policy': 'upgrade-insecure-requests'}});  // 获取历史项目

export const getModelList = () => axios.get(`${prefix}getModelList`,
{headers: {Accept: "application/json", "Cache-Control": "no-cache", 'Content-Security-Policy': 'upgrade-insecure-requests'}});  // 获取设计模板
export const saveDesignInfo = (data: string) => axios.post(`${prefix}saveDesignInfo`, 
{dataJson: data}, {headers: {'Content-Type':'application/x-www-form-urlencoded', 'Content-Security-Policy': 'upgrade-insecure-requests'}});  // 开始生成
export const getDesignByProjectId = (projectId: number) => axios.get(`${prefix}getDesignByProjectId`,
{params: {projectId: projectId}, headers:{Accept: "application/json", "Cache-Control": "no-cache", 'Content-Security-Policy': 'upgrade-insecure-requests'}});  // 获取历史设计
