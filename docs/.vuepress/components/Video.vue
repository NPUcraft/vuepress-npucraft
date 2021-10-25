<!--这是一个能跑的播放器，但是没用到，先留着-->

<template>
  <div>

    <video    :preload="preload"
              :poster="videoImg"
              :controls="controls"
              :autoplay="autoplay"
              style="width: 100%; height: 100%; object-fit: fill"
    >
      <source :src="videoSrc" type="video/mp4">
    </video>
  </div>
</template>


<script>
export default {
  name: 'Video',
  data () {
    return {
      videoSrc: 'https://npucraft-1304448012.cos.ap-nanjing.myqcloud.com/video/%E9%85%B7%E9%85%B7%E7%9A%84Rin-%E6%96%B9%E5%9D%97%E6%A6%82%E5%BF%B5.mp4',
      videoImg: 'https://npucraft-1304448012.cos.ap-nanjing.myqcloud.com/img/%E4%B8%BB%E5%9F%8E.png',
      isMute: true,
      isPlay: false,
      preload: false, //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
      autoplay: false
    }
  }

  // 自动播放属性,muted:静音播放
  // autoplay: 'muted',

}
</script>

<style scoped >

</style>

