'use strict';

const Controller = require('egg').Controller;
const robot = require('dingtalk-robot')('9c50a26167fe49c84323dfaf7394f056a2f420f30754d19c95b45423421dab5c');

class HomeController extends Controller {
  async index() {
    this.ctx.body = '卧槽，被你发现了！';
  }

  async list() {
    console.log(this);
    this.app.logger.info('[task]: 大家好，我是吃饭助手');
    robot.send({
      msgtype: 'text',
      text: {
        content: '大家好，我是吃饭助手，我将在工作日每天 11:45/17:45 提醒大家吃饭！',
        // content: '换个头像看看',
        // content: '🏃  🏃  🏃  🏃  🏃',
      },
      at: {
        isAtAll: true,
      },
    }, function(err, data) {
      if (err) {
        this.app.logger.warn(`[task]: ${err}`);
        return;
      }
      this.app.logger.info(`[task]: ${data}`);
    });
    this.ctx.body = 'list';
  }
}

module.exports = HomeController;
