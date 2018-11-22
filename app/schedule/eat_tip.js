'use strict';

const dateFormat = require('dateformat');
const robot = require('dingtalk-robot')('9c50a26167fe49c84323dfaf7394f056a2f420f30754d19c95b45423421dab5c');

module.exports = app => {
  return {
    schedule: {
      cron: '0 40 11,17 * * 1-5 *',
      // cron: '0 40 * * * 1-5 *',
      // interval: '2s',
      type: 'worker', // all 所有worker 都执行
    },
    async task(ctx) {
      // const now = new Date();
      // let _ss = (+now) % 1e3;
      // _ss = ((1e3 + _ss) + '').substring(1);
      // app.logger.info('[task]: 任务开始');
      // console.log(dateFormat(now, 'HH:MM:ss.') + _ss);

      app.logger.info('[task]: 还有 5 分钟');
      robot.send({
        msgtype: 'text',
        text: {
          content: '距离吃饭时间还有 5 分钟，请大家做好准备！',
        },
        at: {
          isAtAll: true,
        },
      }, function(err, data) {
        if (err) {
          app.logger.warn(`[task]: ${err}`);
          return;
        }
        app.logger.info(`[task]: ${data}`);
      });


      const eattip = () => {
        setTimeout(() => {
          app.logger.info('[task]: 正式提醒');
          robot.send({
            msgtype: 'markdown',
            markdown: {
              title: '🍚吃饭⚠️',
              text: '# 同志们\n' +
                    '## 开饭了!!!!\n\n' +
                    '![吃饭了](https://i01picsos.sogoucdn.com/8f6f41d5c02fb63f)\n\n' +
                    '🏃  🏃  🏃  🏃  🏃\n\n' +
                    '@所有人',
            },
            at: {
              isAtAll: true,
            },
          }, function(err, data) {
            if (err) {
              app.logger.warn(`[task]: ${err}`);
              return;
            }
            app.logger.info(`[task]: ${data}`);
          });
        }, 15000);
      };


      let timer;

      let _s1 = 1;
      const cycle2 = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          app.logger.info('[task]: 还有45秒');
          robot.send({
            msgtype: 'text',
            text: {
              content: `距离吃饭时间还有 ${15 * (4 - _s1)} 秒`,
            },
            at: {
              isAtAll: true,
            },
          }, function(err, data) {
            if (err) {
              app.logger.warn(`[task]: ${err}`);
              return;
            }
            app.logger.info(`[task]: ${data}`);
          });

          _s1++;
          if (_s1 < 4) {
            cycle2();
          } else {
            eattip();
          }
        }, 15000);
      };

      let _s = 0;
      const cycle1 = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          app.logger.info(`[task]: 还有 ${4 - _s} 分钟`);
          robot.send({
            msgtype: 'text',
            text: {
              content: `距离吃饭时间还有 ${4 - _s} 分钟`,
            },
            at: {
              isAtAll: true,
            },
          }, function(err, data) {
            if (err) {
              app.logger.warn(`[task]: ${err}`);
              return;
            }
            app.logger.info(`[task]: ${data}`);
          });

          _s++;
          if (_s < 4) {
            cycle1();
          } else {
            cycle2();
          }
        }, 60000);
      };

      cycle1();

      // try {
      //   console.log('🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃');
      //   app.logger.info('[task]: 任务完成');
      // } catch (err) {
      //   app.logger.warn('[task]: 任务失败');
      //   console.err('🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃🏃');
      // }

      // TODO: TEXT
      // robot.send({
      //   msgtype: 'text',
      //   text: {
      //     content: '杨艳艳，大吃死',
      //   },
      //   at: {
      //     atMobiles: [
      //       // '156xxxx8827',
      //       // '189xxxx8325',
      //     ],
      //     isAtAll: true,
      //   },
      // }, function(err, data) {
      //   if (err) {
      //     console.error(err);
      //     return;
      //   }
      //   console.log(data);
      // });

      // TODO: Link
      // robot.send({
      //   msgtype: 'link',
      //   link: {
      //     text: '这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？',
      //     title: '时代的火车向前开',
      //     picUrl: '',
      //     messageUrl: 'https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI',
      //   },
      // }, function(err, data) {
      //   if (err) {
      //     console.error(err);
      //     return;
      //   }
      //   console.log(data);
      // });

      // TODO: markdown
      // robot.send({
      //   msgtype: 'markdown',
      //   markdown: {
      //     title: '🍚吃饭⚠️',
      //     text: '# 同志们\n' +
      //           '## 开饭了!!!!\n\n' +
      //           '![吃饭了](https://i01picsos.sogoucdn.com/8f6f41d5c02fb63f)\n\n' +
      //           '@所有人',
      //   },
      //   at: {
      //     isAtAll: true,
      //   },
      // }, function(err, data) {
      //   if (err) {
      //     console.error(err);
      //     return;
      //   }
      //   console.log(data);
      // });
    },
  };
};
