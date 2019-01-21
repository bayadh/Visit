<template>
  <div id="main">
 <header>
<b-breadcrumb :items="items" class="b-breadcrumb"/>
</header>
  <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

    
      <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/tozeur2.jpg"  >
 


      <p id="desc"><b><h2 id="title">CHOTTS, PALM TREES AND OLD QUARTERS</h2></b><br>

The old quarters of Tozeur and Nefta have a very particular air to them. Follow the narrow streets and covered passageways which are astonishingly fresh and cool under the Saharan sun. Admire the façades in bricks the colour of sand and their stunning decorations in relief (see p. 79). Then pay a visit to the giant oases, veritable palm tree forests whose shade is used to cultivate fruit trees. On foot or by carriage, appreciate the out of the ordinary atmosphere of the palm groves. The surroundings will surprise you with the variety of desert landscapes: chains of mountains, arid plateaus, giant dunes, salt lakes glittering in the sun. Cross the immense Chott el-Jerid, ancient interior sea almost entirely dried out, covered with a thick crust of blindingly white salt. Follow the road to the oases of the mountains – Chebika, Tamerza, Mides – and explore the canyons, the waterfalls and the palm groves nestled into the rock. Further north lies the oasis of Gafsa, a town known for its Roman stone basins and brightly coloured drapes.   
  </p></b-carousel-slide>

      <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/star-wars-sud_1.jpg" >
       <p id="desc" dragabble="true" ><b><h2 id="title">STAR WARS AND LAND SAILING</h2></b><br>

Clean air, the beauty of the palm grove, the immensity of the landscapes… the region lends itself to escapism and contemplation. But there is more than one way to enjoy the desert. If you are sporty, go quad biking in the dunes of Onk Jmel, land sailing on the Chott el-Jerid, trekking along the trails in the Atlas, or even play golf in an impressive setting of rock formations and palm trees. Whether as a family or with friends, visit the theme park Chak Wak where dinosaurs and religious history mix. Try a tree top adventure course in the palm trees in the Sahara Lounge park. Relive Star Wars on the original set of Mos Espa. Watch the date harvest (in November) and become unbeatable in your knowledge of the universe of the palm tree in the educational complex Eden Palm. Cross impressive canyons aboard a small historical train, the Red Lizard. Admire the costumes and precious artifacts brought to life at the Dar Chraiet museum, or objects from everyday life in the museum of folk art and traditions.    
    </p></b-carousel-slide>
   <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/tozeur3_0.jpg" >
       <p id="desc"><b><h2 id="title">LAMB AND DATES</h2></b><br>
Tozeur is the date capital: discover the different varieties of this emblematic southern fruit, from the sweet and red allig to the translucent and creamy deglet nour. Try rfiss, the date dumplings seasoned with just a hint of salted butter. Taste the chakhchoukha of Jerid, lamb cooked in sauce accompanied by a traditional semolina bread called mtabga. Feast yourself on barkoukech, a sort of couscous with large grains garnished with meat and small dried fish. More unusual, give camel steak a try. In Tozeur, the avenue which lies alongside the palm grove is a meeting point for gourmets with several restaurants offering a choice between the regional cuisine of Jerid, Italian food and international dishes. You can also choose to dine the hotels of the area.      
 </p></b-carousel-slide>
       <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/tozeur4.jpg"
      > <p id="desc"><b><h2 id="title"> SAHARAN PALACE, ANCIENT DWELLING OR OASIS LODGE</h2></b><br>
Capital of Saharan tourism, Tozeur has several beautiful high class hotels to which Nefta adds a few more. Views across the palm grove, traditional brick decor, swimming pool, spa and occasionally entertainment worthy of a holiday club… everything is designed to give you the most privileged and enjoyable stay in these two magical towns. There are several other accommodation options: bed and breakfast, guesthouses in the medina, or villa of your dreams in the heart of the palm grove.     
   </p></b-carousel-slide>
 <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/tozeur5.jpg"
      >
       <p id="desc"><b><h2 id="title">THE GREAT OASES</h2></b><br>
The region of Tozeur and Nefta is known as the Jerid, a name which signifies “land of the palm”. The oases are the fruit of man’s work over thousands of years, which brought life and abundance to the heart of the desert; those of Tozeur and Nefta today have several hundred thousand palm trees. Several springs water the palm groves; “these streams are split into countless channels in stone canals, according to a scrupulously fair system”, wrote Ibn Chabbat in the 13th century. With the passing of centuries, the land became fertile and allowed agricultural cultivation in three levels: vegetable crops and cereals grow in the shade of fruit trees, which themselves are protected by the tall date palms. Tozeur and Nefta were also mandatory stops on the journeys of great caravans, and have long been prosperous. Tozeur occupies a special place in Tunisia as a cultural centre for the Arab language, and Nefta as an important site for Sufism.
 </p></b-carousel-slide>

<b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/tozeur1_1.jpg"
      >
       <p id="desc"><b><h2 id="title">THE ARCHITECTURE OF TOZEUR AND NEFTA</h2></b><br>
Explore the old quarters of Tozeur and Nefta. Between the high walls of golden bricks, explore a labyrinth of alleyways and dead ends. Long vaulted passageways open out onto small plazas where the sunlight plays on the façades decorated with patterns in relief. In these great desert towns, the decoration of the houses comes not from stone carvings, but from artistically placed bricks, some protruding outwards, some receding inwards. Diamonds, chevrons, palms or hexagons, the geometric patterns set a background for your stroll. The small bricks made of clay mixed with sand are characteristic of the architecture of Jerid; they give the towns the ochre colour of the desert. The principal tree of the region, the palm, provides wood for beams and flooring. If you have the chance to visit a beautiful house in Tozeur, you will find there a veritable Saharan palace: around a vast interior courtyard, there is a succession of hallways, archways, bedrooms with high palm ceilings, and chambers with narrow windows where the dates from the last harvest hang.
 </p></b-carousel-slide>

</b-carousel>
   




<h3 id="know">Good To Know</h3>
<div id="info-container">
<div id="info">
<h2>Festivals</h2>
<p>Festival of the Oasis: date harvest (in November)

Electronic dunes: electronic music on the location of Star Wars</p>
</div>
<div id="info">
<h2>Transport</h2>
<p>Tozeur and Nefta are served by an international airport, located 5 minutes from from Tozeur. It is also possible to take a night train from Tunis. Once there, excellent paved roads allow for easy exploration of the region via passenger car (Chott el-Jerid, mountain oases…). To discover the town and the palm grove, get around with taxis or rent a carriage.</p>

</div>
<div id="info">
<h2>Shopping</h2>
<p>Don’t leave the region without stocking up on a box of fresh dates or one of the date-based specialities: jam, pastry, syrup… All parts of the palm tree are used for handicrafts: baskets of braided palm leaves, chests of palm wood… Buy the beautiful carpets and drapes of the area, decorated with camels, palm trees and stylised figures.</p>

</div>

</div>

<comment></comment>

<footer>

    
    <div class="footer-copyright text-center py-3">© 2019 Copyright: BAYA & AMIN & YOUSEF</div>
   

  </footer>


  </div>

</template>

<script>

import Comment from './Comment.vue';
  export default {
    name: 'touzeur',
     components: {
    Comment
  },
      data () {
    return {
      items: [{
        text: 'DISCOVER',
        href: '/'
      }, {
        text: 'TUNISIA',
        href: '/tunisia'
      }, {
        text: 'TOUZEUR',
        active: true
      }]
    }
  }
  }
</script>
<style>
#desc{
  color: #FFF;
  background: rgba(0,0,0,0.5);
  clear: both;
  padding: 10px;
  text-shadow: none;
  line-height: 1.42857143;      
  text-align: left;
  max-width: 550px;
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}
#title{
  text-align: left;
  color: #FFF;
   

}
#title::after {
    float: right;
    content: "";
    display: block;
    width: 70px;
    height: 2px;
    background: #ee621f;
    margin-top: 40px;
    
    clear: both;
    margin-bottom: 35px;
}
#main{

    background-color: #f3f3f3;
}

#info{
  padding: 50px 20px;
  max-width: 20rem;
    min-height: 1px;
    line-height: 1.42857143;
    color: #333;
    text-align: left;
}
#info-container{
  display: flex;
   flex-direction: row ;
   margin-left: 20px !important;
   justify-content: space-evenly !important;
   align-items: flex-start !important;
}
#know{
  font-family:Courier, monospace !important;  
  margin-bottom:20px; 
  margin-top:40px;     
  font-size: 30px;
}
.main-title{
    font-family:Courier, monospace;
     margin-top:40px;
      margin-bottom:40px;

}

.b-breadcrumb{

    background-color: #17a2b8 !important;
}
.breadcrumb-item.active{
  color: #fff !important;
}
.breadcrumb-item>a{
  color:#ee621f !important;
}
</style>
