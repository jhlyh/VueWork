<template>
  <div class="common-layout" style="height: 49rem">
    <el-container>
      <el-header style="height: 15rem">
        <img src="../assets/logo.png" />
      </el-header>
      <el-main style="height: 19rem">
        <!-- 登录框 -->
        <el-input
          v-model="login_name"
          placeholder="请输入账号"
          clearable
          style="width: auto; display: block"
        />
        <el-input
          v-model="login_psw"
          type="password"
          placeholder="请输入密码"
          show-password
          style="margin-top: 0.625rem; width: auto; display: block"
        />
        <el-button type="primary" @click="login">登录</el-button>
        <!-- 注册框 -->
        <el-button type="primary" @click="dialogVisible = true">注册</el-button>
        <el-dialog
          v-model="dialogVisible"
          title="注册"
          width="30%"
          :before-close="handleClose"
        >
          <el-input
            v-model="register_name"
            placeholder="请输入账号"
            clearable
            style="width: auto; display: block"
          />
          <el-input
            v-model="register_psw"
            type="password"
            placeholder="请输入密码"
            show-password
            style="margin-top: 0.625rem; width: auto"
          />
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="register">确定</el-button>
            </span>
          </template>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import request from '@/utils/ReqForStr'
import { ElMessage } from 'element-plus'

export default {
  data() {
    return {
      dialogVisible: false,
      login_name: '',
      login_psw: '',
      register_name: '',
      register_psw: '',
      is_register: '',
      is_login: '',
      id: '',
    }
  },
  methods: {
    login() {
      request
        .post(
          '/api/user/login?name=' +
            this.login_name +
            '&password=' +
            this.login_psw
        )
        .then((res) => {
          console.log(res)
          this.is_login = res
          this.judge_login()
        })
    },
    register() {
      request
        .post(
          '/api/user/register?name=' +
            this.register_name +
            '&password=' +
            this.register_psw
        )
        .then((res) => {
          console.log(res)
          this.is_register = res
          this.judge_register()
        })
      this.dialogVisible = false
    },
    judge_register() {
      if (this.is_register === 'OK') {
        ElMessage({
          message: '注册成功',
          type: 'success',
        })
        console.log('牛皮')
      } else {
        ElMessage({
          message: '账号已被注册',
          type: 'error',
        })
        console.log('账号已被注册')
      }
      this.is_register = null
    },
    judge_login() {
      if (this.is_login === 'invalid') {
        console.log('账号不存在或密码错误')
        ElMessage({
          message: '账号不存在或密码错误',
          type: 'error',
        })
      } else {
        ElMessage({
          message: '登陆成功',
          type: 'success',
        })
        this.id = this.is_login
        console.log('登陆成功')
        this.$router.push({
          name: 'main',
          params: {
            id: this.id,
            name: this.login_name,
          },
        })
      }
    },
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(to right, #c0c0aa, #1cefff);
}
</style>
