import axios from 'axios'

let base = "https://www.fastmock.site/mock/1fe399b748ba8bb565da6bb25858b3de/show-me"

const api = {
    //获取个人基础信息
    getBasics: () => axios.get(`${base}/basics`),
    getMyDetail: () => axios.get(`${base}/mydetail`),
    getSkill: () => axios.get(`${base}/skill`)
}

export default api