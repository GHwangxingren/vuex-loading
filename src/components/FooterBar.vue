<template>
  <div>
   <van-tabbar v-model="active" route :safe-area-inset-bottom="true">
  <van-tabbar-item icon="home-o"
    replace
    to="/"
  >首页</van-tabbar-item>
  <van-tabbar-item icon="orders-o"
    replace
    to="/article"
  >文章</van-tabbar-item>
 
</van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    data(){
        return {
            active:0
        }
    },
    components:{
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem
    }
}
</script>