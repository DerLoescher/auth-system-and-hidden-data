<template>
  <div class="main_wrapper">
    <nav class="navigation">
      <ul class="nav_list">
        <li class="nav_item">
          <router-link to="/auth" class="nav_link">Авторизация</router-link>
        </li>
        <li class="nav_item" v-if="key">
          <router-link to="/analytics" class="nav_link">Аналитика</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MainComponent",

  computed: {
    key() {
      return this.$store.state.key;
    },
  },
  beforeMount() {
    this.$store.commit("getSiteId");
    if (this.key == null) {
      this.$router.replace("/");
    }
  },
};
</script>


<style scoped>
.main_wrapper {
  height: 100vh;
  width: 100vw;
  background-color: #202124;
  color: #e8eaed;
  font-family: "Rubik";
}
.navigation {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: rgb(125, 118, 118) 1px solid;
}
.nav_list {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.nav_item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.nav_link {
  text-decoration: none;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #9aa0a6;
}
.nav_link:hover,
.nav_link:focus {
  cursor: pointer;
}
.nav_link:hover {
  text-decoration: underline;
}
@media screen and (max-width: 500px) {
  .nav_list {
    width: 80%;
  }
}
</style>
