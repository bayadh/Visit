<template>
<div>
<navbar></navbar>
<carousel></carousel>

<section>

 <b-dropdown id="ddown1" text="Choose Your Destination" variant="info"  class="m-md-2">
    <b-dropdown-item to="/tunisia">Tunisia</b-dropdown-item>
    <b-dropdown-item>Morocco</b-dropdown-item>
    <b-dropdown-item>Greece</b-dropdown-item>
    <b-dropdown-item>Italy</b-dropdown-item>
    <b-dropdown-item>Spain</b-dropdown-item>
    <b-dropdown-item>South Africa</b-dropdown-item>
    <b-dropdown-item>United Arab Emirates</b-dropdown-item>
  </b-dropdown>

</section>

<section>

<h1 style="font-family:Courier, monospace; margin-top:40px; margin-bottom:40px;" id="top"> Most Visited Places Of 2018</h1>
  <b-container fluid class="p-4 bg-info">
  <b-row class="r">
  <div class="c">
    <b-col>
      <b-img thumbnail fluid src="https://www.roadaffair.com/wp-content/uploads/2017/09/hallstatt-austria-shutterstock_583691665.jpg" alt="Hallstatt, Austria" />
      <h4 class="txt">Hallstatt, Austria </h4>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://www.roadaffair.com/wp-content/uploads/2017/09/manarola-cinque-terre-italy-road-affair.jpg" alt="Cinque Terre, Italy" />
      <h4 class="txt">Cinque Terre, Italy</h4>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://www.roadaffair.com/wp-content/uploads/2017/10/tulum-mexico-shutterstock_604913387.jpg" alt="Tulum, Mexico" />
      <h4 class="txt">Tulum, Mexico</h4>
    </b-col>
    </div>
    <div class="c">
    <b-col>
      <b-img thumbnail fluid src="https://www.roadaffair.com/wp-content/uploads/2017/09/santorini-greece-shutterstock_562590757.jpg" alt="Oia, Greece" />
      <h4 class="txt">Oia, Greece</h4>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://www.roadaffair.com/wp-content/uploads/2017/09/wengen-switzerland-shutterstock_661298698.jpg" alt="Wengen, Switzerland" />
      <h4 class="txt">Wengen, Switzerland</h4>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://www.roadaffair.com/wp-content/uploads/2017/09/larung-gar-tibet-shutterstock_248957593.jpg" alt="Larung Gar, Tibet" />
      <h4 class="txt">Larung Gar, Tibet</h4>
    </b-col>
    </div>
    <div class="c">
    <b-col>
      <b-img thumbnail fluid src="https://www.roadaffair.com/wp-content/uploads/2017/09/shirakawa-go-japan-shutterstock_256865620.jpg" alt="Shirakawa-go, Japan" />
      <h4 class="txt">Shirakawa-go, Japan</h4>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://www.roadaffair.com/wp-content/uploads/2017/09/simiane-la-rotonde-france-shutterstock_667553767.jpg" alt="Simiane La Rotonde, France" />
      <h4 class="txt">Simiane La Rotonde, France</h4>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://www.roadaffair.com/wp-content/uploads/2017/09/cua-van-vietnam-shutterstock_117170020.jpg" alt="Cua Van, Vietnam" />
      <h4 class="txt">Cua Van, Vietnam</h4>
    </b-col>
    </div>
    
  </b-row>
</b-container>
</section>
<hr>
<footer>

    
    <div class="footer-copyright text-center py-3">© 2019 Copyright: BAYA & AMIN & YOUSEF</div>
   

  </footer>

</div>
</template>

<script>
import Carousel from './Carousel.vue';
import Navbar from './Navbar.vue';




export default {
  name: 'home',
  components: {
     Carousel, Navbar
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

