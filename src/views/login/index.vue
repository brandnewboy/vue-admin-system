<template>
  <div class="login-container">
    <el-form
      ref="loginFormRef"
      class="login-form"
      :model="loginForm"
      :rules="loginFormRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="password"
          name="password"
        ></el-input>
        <span class="show-pwd" @click="onPasswordTypeChange">
          <svg-icon
            :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
          ></svg-icon>
        </span>
      </el-form-item>
      <el-button
        :loading="loginLoading"
        @click="onLogin"
        type="primary"
        style="width: 100%; margin-bootom: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script setup>
// 导入的组件可直接使用
import { reactive, ref } from "vue";
import { MutActKey } from "@/constants/index";
import { useStore } from "vuex";
import { validatePassword } from "@/utils/validateLogin";

const store = useStore();
const loginForm = reactive({
  username: "super-admin",
  password: "123456"
});
const loginFormRules = ref({
  username: [
    {
      required: true,
      type: "string",
      trigger: "blur",
      message: "请输入用户名"
    }
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: validatePassword()
    }
  ]
});
const passwordType = ref("password");
const onPasswordTypeChange = () => {
  if (passwordType.value === "password") passwordType.value = "text";
  else if (passwordType.value === "text") passwordType.value = "password";
};

/**
 * 登录动作处理
 */
let loginLoading = ref(false);
const loginFormRef = ref();
const onLogin = () => {
  loginFormRef.value.validate((res) => {
    if (!res) return;
    loginLoading.value = true;
    store
      .dispatch(MutActKey.LOGIN, loginForm)
      .then((res) => console.log(res))
      .catch((err) => console.error("login error", err))
      .finally(() => (loginLoading.value = false));
  });
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      // margin-bottom: 60px;
    }

    ::v-deep .el-input {
      // display: inline-block;
      height: 47px;
      box-sizing: border-box;
      width: 90%;
      border: none;
      background: $bg;
      .el-input__wrapper {
        border-color: $bg;
        background: $bg;
      }
      input {
        background: $bg;
        border: none;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        // height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    box-sizing: border-box;
    width: 10%;
    vertical-align: middle;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .el-button {
    margin-top: 50px;
    height: 47px;
    font-size: 16px;
  }
}
</style>
