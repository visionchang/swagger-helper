'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/docs', controller.home.docs);
  router.get('/test', controller.home.test);
  router.redirect('*/*', '/public/index.html')
};
