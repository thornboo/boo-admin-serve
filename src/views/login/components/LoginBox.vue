<template>
  <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: '请输入用户名！' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon"/>
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: '请输入密码！' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon"/>
        </template>
      </a-input-password>
    </a-form-item>

    <div class="login-form-wrap">
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
      </a-form-item>
      <a class="login-form-forgot" href="">忘记密码？</a>
    </div>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
        登 录
      </a-button>
      Or
      <a href="">现在注册！</a>
    </a-form-item>
  </a-form>
</template>

<script>
import {defineComponent, reactive, computed} from 'vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
    };
  },

});
</script>
<style>
.login-form {
  max-width: 300px;
}

.login-form-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login-form-forgot {
  margin-bottom: 24px;
}

.login-form-button {
  width: 100%;
}
</style>