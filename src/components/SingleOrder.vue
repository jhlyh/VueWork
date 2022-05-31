<template>
  <div class="order">
    <!-- 左 -->
    <div>
      <h2>下单时间：<br />{{ orderTime }}</h2>
    </div>
    <!-- 中 -->

    <div class="order">
      <div v-for="example in orderDetail" :key="example">
        <h2>{{ example.goodsName }}</h2>
        <h3>数量与价格{{ example.nums }}</h3>
      </div>
    </div>
  </div>
  <el-divider />
</template>

<script>
export default {
  props: ['orderDetail', 'orderTime'],
  data() {
    return {
      example: '',
    }
  },
}
</script>

<style>
.order {
  display: flex;
}
</style>
