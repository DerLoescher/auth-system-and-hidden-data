<template>
  <MainComponent />
</template>

<script>
import MainComponent from "./components/Main";

export default {
  name: "App",
  components: {
    MainComponent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
/* rubik-regular - latin_cyrillic */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  src: url("../public/fonts/rubik-v20-latin_cyrillic-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("../public/fonts/rubik-v20-latin_cyrillic-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../public/fonts/rubik-v20-latin_cyrillic-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../public/fonts/rubik-v20-latin_cyrillic-regular.woff")
      format("woff"),
    /* Modern Browsers */
      url("../public/fonts/rubik-v20-latin_cyrillic-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../public/fonts/rubik-v20-latin_cyrillic-regular.svg#Rubik")
      format("svg"); /* Legacy iOS */
}
/* rubik-700 - latin_cyrillic */
@font-face {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  src: url("../public/fonts/rubik-v20-latin_cyrillic-700.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("../public/fonts/rubik-v20-latin_cyrillic-700.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../public/fonts/rubik-v20-latin_cyrillic-700.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../public/fonts/rubik-v20-latin_cyrillic-700.woff") format("woff"),
    /* Modern Browsers */
      url("../public/fonts/rubik-v20-latin_cyrillic-700.ttf") format("truetype"),
    /* Safari, Android, iOS */
      url("../public/fonts/rubik-v20-latin_cyrillic-700.svg#Rubik")
      format("svg"); /* Legacy iOS */
}
</style>
