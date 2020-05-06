'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async docs() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { url } = params;
    console.log(ctx)
    const res = await ctx.curl(url, { dataType: 'json' })
    ctx.body = {
      status: res.status,
      headers: res.headers,
      package: res.data
    }
  }
  async index() {
    await this.ctx.render('index.html')
  }
}

module.exports = HomeController;
