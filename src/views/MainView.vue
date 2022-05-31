<template>
  <div class="common-layout" style="height: 49rem">
    <!-- 菜单栏 -->
    <el-affix>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        background-color="#545c64"
        text-color="#fff"
        mode="horizontal"
      >
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <h4>{{name}}用户</h4>
        <el-menu-item index="1" @click="goods">商品</el-menu-item>
        <el-menu-item index="2" @click="order">订单</el-menu-item>
        <el-menu-item index="3" @click="shopcar">购物车</el-menu-item>
        <el-menu-item index="4" @click="exit">退出</el-menu-item>
      </el-menu>
    </el-affix>
    <router-view></router-view>
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>
<script>
export default {
  data() {
    return {
      id: '',
      name: '',
    }
  },
  methods: {
    load() {
      this.id = this.$route.params.id
      this.name = this.$route.params.name
      console.log(this.id)
      this.goods()
    },
    goods() {
      this.$router.push({ 
        // path: '/main/goods',
        name: 'goods',
        params: {
            id: this.id,
            name: this.name,
          },
       })
    },
    order() {
      this.$router.push({ 
        // path: '/main/order' ,
        name: 'order',
        params: {
            id: this.id,
            name: this.login_name,
          },
        })
    },
    shopcar() {
      this.$router.push({
        //  path: '/main/shopcar',
         name: 'shopcar',
         params: {
            id: this.id,
            name: this.login_name,
          },
      })
    },
    exit() {
      this.$router.push({ path: '/' })
    },
  },
  mounted() {
    this.load()
  },
}
</script>

<style></style>
