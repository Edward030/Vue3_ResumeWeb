<template >
  <v-footer app class="bg-blue-grey-darken-4" style="opacity: 0.6" >
    <v-card elevation="0" rounded="0" width="100%" class="bg-blue-grey-darken-4 text-center" >
      <div>
        <a href="https://twitter.com/EdwardYang030" target="_blank" class="mr-2">
        <v-btn icon="fa-brands fa-twitter" variant="plain" color="white" class="font-size"></v-btn>
        </a>
        <a href="https://www.facebook.com/guangxian.yang?mibextid=ZbWKwL" target="_blank" class="mr-2">
        <v-btn icon="fa-brands fa-facebook" variant="plain" color="white" class="font-size"></v-btn>
        </a>
        <a href="https://www.linkedin.com/in/edward-yang-ba6311255" target="_blank" class="mr-2">
          <v-btn icon="fa-brands fa-linkedin" variant="plain" color="white" class="font-size"></v-btn>
        </a>
      </div>
      
      <div class="contact-info">
        <div class="text-white mt-1 font-size">Contact phone: 0974256800</div>
        <a class="text-white mt-1 newLink font-size" href="mailto:platinum91420@gmail.com">Email Address: platinum91420@gmail.com</a>
      </div>
      <div class="text-white mt-1" style="display: flex; justify-content: right; align-items: center;">
        <strong class="font-size"> @{{ new Date().getFullYear() }} Edward Yang All rights Reserved</strong>
        <div style="width: 13vw"></div>
        <a class="text-grey-lighten-3 newLink font-size" href="https://pixabay.com/users/quangle-1584596/" target="_blank" >Photo by quangle</a>
      </div>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .font-size {
    font-size: clamp(0.9rem, 1.5vw, 1.2rem);
  }
  .newLink {
    text-decoration: none;
    color: white;
  }
  .newLink:hover {
    background-color: #BDBDBD;
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    width: fit-content;
    /* 置中且文字靠左對齊 */
  }
</style>