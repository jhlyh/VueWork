<template>
  <div class="common-layout" v-for="example in goods" :key="example">
    <el-button
      type="warning"
      style="margin-left: 90%"
      @click="addToCart(example)"
      >加入购物车</el-button
    >
    <el-input-number
      style="margin-left: 51rem"
      v-model="example.num"
      :min="1"
      :max="10"
      :step="1"
      @change="handleChange(example)"
      placeholder="数量"
    />
    <single-good-vue
      :img_location="path + example.pthumbnail"
      :name="example.name"
      :id="example.id"
      :price="example.price1"
    ></single-good-vue>
  </div>
</template>
<script>
import request from '@/utils/request'
import SingleGoodVue from '@/components/SingleGood.vue'
export default {
  components: {
    SingleGoodVue,
  },
  data() {
    return {
      userId: '',
      goods: '',
      example: '',
      path: 'http://202.193.53.235:8080/',
    }
  },
  methods: {
    load() {
      request.get('/api/goods/list').then((res) => {
        this.goods = res
        console.log(this.goods)
      })
      this.userId = this.$route.params.id
    },
    addToCart(example) {
      request
        .post(
          '/api/cart/add?userId=' +
            this.userId +
            '&goodsId=' +
            example.id +
            '&num=' +
            example.num +
            '&price=' +
            example.price1
        )
        .then((res) => console.log(res))
    },
    handleChange(example) {
      console.log(example.num)
    },
  },
  mounted() {
    this.load()
  },
}
</script>

<style></style>
