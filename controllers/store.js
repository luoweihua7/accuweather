const Redis = require('../services/redis')
const { STORE } = require('../config')

class Store {
  constructor() {
    this.store = new Redis(STORE.redis)
  }

  /**
   * 获取预警信息
   */
  async getAlerts() {
    let value = []

    if (this.store) {
      value = await this.store.getAlerts()
    }

    return value
  }

  /**
   * 设置保存预警信息
   * @param {array} alerts 预警信息列表
   */
  async setAlerts(alerts = []) {
    if (!Array.isArray(alerts)) {
      throw new Error(`预警信息列表数据格式不正确`)
    }

    if (this.store) {
      await this.store.setAlerts(alerts)
    }
  }
}

module.exports = new Store()
