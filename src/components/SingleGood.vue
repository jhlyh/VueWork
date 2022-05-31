<template>
  <el-container style="width:80%">
    <el-aside width="12.5rem" style="width=12.5rem;height: 12.5rem;;">
      <img :src="img_location" style="width=12.274rem;  height: 12.274rem" />
    </el-aside>
    <el-main>
      <div>
        <h1>{{ name }}</h1>
        <h2>{{ price }}￥</h2>
      </div>
    </el-main>
  </el-container>
  <el-divider></el-divider>
</template>
<script>
export default {
  props: ['img_location', 'name', 'id', 'price'],
  data() {
    return {
      data() {
        return {}
      },
    }
  },
}
</script>

<style></style>
