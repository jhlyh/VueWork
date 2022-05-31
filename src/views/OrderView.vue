<template>
  <div class="common-layout" v-for="example in goods" :key="example">
    <single-order :orderDetail=example.orderDetail :orderTime=example.orderTime></single-order>
  </div>
</template>
<script>
import request from '@/utils/request'
import SingleOrder from '@/components/SingleOrder.vue'
export default {
  components: { SingleOrder },
  data() {
    return {
      goods: '',
      example: '',
      userId: '',
      path: 'http://202.193.53.235:8080/',
    }
  },
  methods: {
    load() {
      this.userId = this.$route.params.id
      request
        .get('/api//order/listByUser?userId=' + this.userId)
        .then((res) => {
          this.goods = res
          console.log(this.goods)
        })
    },
  },
  mounted() {
    this.load()
  },
}
</script>

<style></style>
