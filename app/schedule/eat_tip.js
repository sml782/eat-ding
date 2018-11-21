'use strict';

const robot = require('dingtalk-robot')('7ef51fc623081cfff22ce2dfa1f9ed0d90c22a5e046ef21bd763e78004c7c064');

module.exports = app => {
  return {
    schedule: {
      // cron: '0 45 11,18 ? * 2-6',
      interval: '10s',
      type: 'worker', // all 所有worker 都执行
    },
    async task(ctx) {
      // app.logger.info('[task]: 任务开始');

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
      robot.send({
        msgtype: 'markdown',
        markdown: {
          title: '🍚吃饭⚠️',
          text: '# 同志们\n' +
                '## 开饭了!!!!\n\n' +
                '![吃饭了](https://i01picsos.sogoucdn.com/8f6f41d5c02fb63f)\n' +
                '@所有人',
        },
        at: {
          isAtAll: true,
        },
      }, function(err, data) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
    },
  };
};
