<template>
  <div class="container">
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" width="100%" style="height:300px;object-fit:cover"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="btnValue">
      {{$store.state.myLoading.flag}}
      <span>当前的数据 {{$store.state.test.number}}</span>
        <van-button type="primary" @click="add" :loading="loading">异步按钮+1</van-button>
        <van-button type="info" @click="addOne">同步按钮+1</van-button>

    </div>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import FooterBar from "components/FooterBar";
import { Swipe, SwipeItem,Button } from "vant";
import {mapState,mapMutations,mapActions} from 'vuex';
import "style/home.scss";
export default {
  data(){
    return {
      images:[
        'https://www.bing.com/th?id=OIP.Vu6vhmLH2sN0kzMEYcAF0QHaF0&w=245&h=193&c=7&o=5&dpr=2&pid=1.7',
        'https://www.bing.com/th?id=OIP.U_b56MIn6zbEFagqO81XjgHaHa&w=221&h=217&c=7&o=5&dpr=2&pid=1.7'
      ]
    }
  },
  computed:{
    ...mapState({loading:state=>state.myLoading.effects['test/onePlusAsync']})
  },
  methods:{
    add(){
        this.onePlusAsync(1)
    },
    addOne(){
        this.onePlus(1)
    },
    ...mapMutations({onePlus:'test/onePlus'}),
    ...mapActions({onePlusAsync:'test/onePlusAsync'})
  },
  components: {
    FooterBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]:Button
  }
};
</script>