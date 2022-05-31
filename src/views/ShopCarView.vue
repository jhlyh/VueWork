<template>
  <el-affix :offset="20" style="margin-left: 30rem">
    <el-button type="primary" @click="createOrder">生成订单</el-button>
  </el-affix>
  <div class="common-layout" v-for="example in goods" :key="example">
    <el-checkbox-button v-model="example.check" label="选择" size="large" />
    <h2>数量:{{ example.num }}</h2>
    <el-button
      type="warning"
      style="margin-left: 90%"
      @click="delFromCart(example)"
      >删除</el-button
    >
    <single-good-vue
      :img_location="path + example.thumbnail"
      :name="example.name"
      :id="example.id"
      :price="example.price"
    ></single-good-vue>
  </div>
</template>
<script>
import request from '@/utils/request'
import SingleGoodVue from '@/components/SingleGood.vue'
export default {
  components: { SingleGoodVue },
  data() {
    return {
      userId: '',
      goods: '',
      example: '',
      path: 'http://202.193.53.235:8080/',
      cartList: '',
    }
  },
  methods: {
    load() {
      request.get('/api/cart/listByUser?userId=' + this.userId).then((res) => {
        console.log(res)
        this.goods = res
      })
    },
    delFromCart(example) {
      request
        .get(
          '/api/cart/deleteById?userId=' +
            this.userId +
            '&cartId=' +
            example.cardid
        )
        .then((res) => {
          console.log(res)
          this.goods = res
        })
    },
    createOrder() {
      this.cartList = ''
      var alreadyHave = false
      for (var i = 0; i < this.goods.length; i++) {
        this.example = this.goods[i]
        if (this.example.check) {
          if (alreadyHave) {
            this.cartList = this.cartList.concat(',')
            this.cartList = this.cartList.concat(this.example.cardid)
          } else {
            this.cartList = this.cartList.concat(this.example.cardid)
            alreadyHave = true
          }
        }
      }
      console.log(this.cartList)
      request
        .get(
          '/api/order/addCastOrder?userId=' +
            this.userId +
            '&cartList=' +
            this.cartList
        )
        .then((res) => console.log(res))
    },
  },
  mounted() {
    this.userId = this.$route.params.id
    this.load()
  },
}
</script>

<style></style>
