<template>
  <div id="app">
    <uploader :options="options" class="uploader-example">
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <p>Drop files here to upload to</p>
      <uploader-btn>select files</uploader-btn>
      <uploader-btn :attrs="attrs">select images只传图</uploader-btn>
      <uploader-btn :directory="true">select folder传文件夹</uploader-btn>
    </uploader-drop>
    <uploader-list>
    </uploader-list>
    </uploader>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      options: {
        target: 'http://localhost:3000',
        testChunks: false
      },
      attrs: {
        accept: 'image/*'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.uploader-example {
  width: 880px;
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
}
.uploader-example .uploader-btn {
  margin-right: 4px;
}
.uploader-example .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
