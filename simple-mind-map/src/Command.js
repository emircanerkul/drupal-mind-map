import { copyRenderTree, simpleDeepClone } from './utils'

/**
 * @Author: 王林
 * @Date: 2021-05-04 13:10:06
 * @Desc: 命令类
 */
class Command {
  /**
   * @Author: 王林
   * @Date: 2021-05-04 13:10:24
   * @Desc: 构造函数
   */
  constructor(opt = {}) {
    this.opt = opt
    this.mindMap = opt.mindMap
    this.commands = {}
  }

  /**
   * @Author: 王林
   * @Date: 2021-05-04 13:12:30
   * @Desc: 执行命令
   */
  exec(name, ...args) {
    if (this.commands[name]) {
      this.commands[name].forEach(fn => {
        fn(...args)
      })
      if (name === 'BACK' || name === 'FORWARD') {
        return
      }
    }
  }

  /**
   * @Author: 王林
   * @Date: 2021-05-04 13:13:01
   * @Desc: 添加命令
   */
  add(name, fn) {
    if (this.commands[name]) {
      this.commands[name].push(fn)
    } else {
      this.commands[name] = [fn]
    }
  }

  /**
   * @Author: 王林
   * @Date: 2021-07-15 23:02:41
   * @Desc: 移除命令
   */
  remove(name, fn) {
    if (!this.commands[name]) {
      return
    }
    if (!fn) {
      this.commands[name] = []
      delete this.commands[name]
    } else {
      let index = this.commands[name].find(item => {
        return item === fn
      })
      if (index !== -1) {
        this.commands[name].splice(index, 1)
      }
    }
  }


  /**
   * @Author: 王林
   * @Date: 2021-05-04 15:02:58
   * @Desc: 获取渲染树数据副本
   */
  getCopyData() {
    return copyRenderTree({}, this.mindMap.renderer.renderTree)
  }
}

export default Command
