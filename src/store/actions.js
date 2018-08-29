import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
import {//调用接口请求函数
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'

export default {

  // 异步获取当前地址信息
  async getAddress ({commit, state}) {
    // 发异步ajax请求
    const {latitude, longitude} = state // 获取经纬度
    const geohash = `${latitude},${longitude}`
    const result = await reqAddress(geohash)
    // 用结果后提交mutation
    const address = result.data
    commit(RECEIVE_ADDRESS, {address})

      reqAddress(geohash)
  },

  // 异步获取食品分类列表
  async getAddress ({commit}) {
    // 发异步ajax请求
    const result = await reqCategorys()
    // 用结果后提交mutation
    const categorys = result.data
    commit(RECEIVE_CATEGORYS, {categorys})

    reqAddress(geohash)
  },


  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 发异步ajax请求
    const {latitude, longitude} = state
    const result = await reqShops(longitude, latitude)
    // 有了结果提交mutation
    const shops = result.data
    commit(RECEIVE_SHOPS, {shops})
  }
}
