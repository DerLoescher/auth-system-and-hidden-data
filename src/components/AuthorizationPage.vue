<template>
  <div class="auth_wrapper">
    <h2 class="title">
      <router-link to="/" class="logo_link">LeadHit</router-link>
    </h2>
    <div class="form_block">
      <input
        type="text"
        class="id_input"
        v-model="inputId"
        maxlength="24"
        placeholder="введите id сайта"
        @keydown.enter="sendId"
      />
      <button @click="sendId" class="sign_in_btn">Войти</button>
    </div>

    <span>5f8475902b0be670555f1bb3</span>
    <span v-if="inputNotFilled" class="atten_text"
      >id сайта должен содержать 24 символа</span
    >
    <span class="atten_text" v-if="this.$store.state.notValidKey"
      >Вы ввели неверный id, попробуйте снова</span
    >
  </div>
</template>

<script>
export default {
  name: "AuthorizationPage",
  data() {
    return {
      inputId: "",
      inputNotFilled: false,
    };
  },
  methods: {
    sendId() {
      if (this.inputId.length == 24) {
        this.$store.dispatch("sendSiteId", this.inputId);
      } else {
        this.inputNotFilled = true;
      }
    },
  },
  watch: {
    inputId() {
      this.inputNotFilled = false;
    },
  },
};
</script>

<style scoped>
.auth_wrapper {
  width: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo_link {
  text-decoration: none;
  color: #cfd1d7;
}
.title {
  margin-bottom: 50px;
  font-size: 30px;
}
.form_block {
  display: flex;
}
.id_input {
  padding: 3px;
}
.id_input:focus {
  outline: none;
  border: #8ab4f8 solid 1.5px;
  border-right: solid 1.5px transparent;
}
.sign_in_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
  background-color: #202124;
  border: #8ab4f8 solid 1.5px;
  color: #9aa0a6;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
}
.sign_in_btn:hover,
.sign_in_btn:active,
.sign_in_btn:focus {
  cursor: pointer;
}
.sign_in_btn:hover {
  color: #cfd1d7;
}
.sign_in_btn:active {
  border: #cfd1d7 solid 2px;
}
.atten_text {
  color: #9aa0a6;
}
</style>
