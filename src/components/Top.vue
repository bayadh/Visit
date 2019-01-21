<template>
  <div>
  <navbar></navbar>
  <div class="main">
  <chart-bar></chart-bar>
  <chart-doughnut></chart-doughnut>
</div>
<footer>

    
    <div class="footer-copyright text-center py-3">© 2019 Copyright: BAYA & AMIN & YOUSEF</div>
   

  </footer>
  </div>
</template>

<script>

import ChartBar from './ChartBar.vue';

import ChartDoughnut from './ChartDoughnut.vue';


export default {
  name: "top",
  components: {

     ChartBar, ChartDoughnut
  }
  
};
</script>
<style>
.main{
  margin-left:100px;
   margin-right:100px;
}
</style>