const data = [
  {
    title:
      "作者初衷：iView Pro要卖￥9999，layui Admin要卖￥2600，作者只好自己动手写一个分享给大家咯。。。框架能走到今天更多的应该感谢巨人给了我肩膀依靠，鸣谢尤雨溪、饿了么、唐金州、花裤衩、贤心、ivew的开源项目给我带来的很多的灵感，弱小的人才习惯嘲讽与否定，内心强大的人从不吝啬赞美与鼓励，人生在世，得到每个人的认可几乎是痴心妄想（有时候借鉴别人也是错，从头造轮子也是错，我尽量让每个人满意，我只知道无论何种评价，赞美或者抹黑，只要帮助到大家，我就是快乐的），我也只是一条略懂前端的咸鱼，可我仍一直怀揣着改变世界的梦想，希望我们每个人，不管过程怎样，结局都是美好的。。。",
    closable: false,
    type: "success",
  },
  {
    title:
      "作者寄语：感谢Star，感恩相遇，愿世间美好与我们环环相扣，加油！屏幕前的我们，打破桎梏，坚守初心。。。",
    closable: false,
    type: "success",
  },
  {
    title:
      "其实人生改变命运的机会并没有太多，我们并不是不优秀，我们也并不是一无是处，我们也希望驻足山巅被众人仰望，也许我们缺少的只是一个机会，缺少的只是生命中的导师，我希望这个框架帮助到更多的人，希望有一天，我们面试的时候不再胆怯，希望有一天别人看到的不仅仅是你的努力，还有你的功成名就，出人头地",
    closable: false,
    type: "success",
  },
];

export default [
  {
    url: "/notice/getList",
    type: "post",
    response: () => {
      return {
        code: 200,
        msg: "success",
        data,
      };
    },
  },
];