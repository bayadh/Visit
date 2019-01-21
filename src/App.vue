<template>
<div id="app">
 <router-view/>
</div>
</template>

<script>




export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      msg: 'Hello Vue.js!',
       emptyIcon: 'mdi-heart-outline',
      fullIcon: 'mdi-heart',
      halfIcon: 'mdi-heart-half-full',
      halfIncrements: false,
      hover: true,
      length: 5,
      rating: 2,
      readonly: false

    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
 
  
}
</script>

<style scooped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.drop{
  
  margin-top: 60px;
  margin-bottom: 60px;
}

.txt{

   padding-top:25px;
   color: #fff !important; 
   
}
.r{
display: flex;
flex-direction: column;
}
.c{
  margin-bottom: 40px;
display: flex;
flex-direction: row;
}
</style>

