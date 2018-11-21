'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '卧槽，被你发现了！';
  }

  async list() {
    this.ctx.body = 'list';
  }
}

module.exports = HomeController;
