<template>
  <div id="app">
    <router-view/>
    <!--tabbar-->
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item :id="item.id" @click.native="toPage(item.path)" v-for="item,index in tabbarList" :key="index">
          <img slot="icon" src="./assets/logo.png" class="iconPic">
          {{item.id}}
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected: '首页',
      tabbarList:[
        {id:'首页',path:'/'},
        {id:'订单',path:'/order'},
        {id:'发现',path:'/find'},
        {id:'我的',path:'/mine'}
      ]
    };
  },
  methods:{
    toPage(path){
      var vm=this;
      vm.$router.push({
        path:path
      })
    }
  }


}
</script>

<style scoped lang="scss">
  @import './base/css/base.scss';
  /*@import './base/css/normalize.scss';*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .iconPic{
    width:24px;
    height:24px;
  }
</style>
