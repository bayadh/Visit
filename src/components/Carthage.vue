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

    
      <b-carousel-slide img-src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/46230759_2448086251887844_4935060110507507712_n.jpg?_nc_cat=111&_nc_ht=scontent-cdg2-1.xx&oh=8c027a7dad902330f83cff278870c360&oe=5CCD79A7"  >
      <p id="desc"><b><h2 id="title">Around Carthage and Sidi Bou Said</h2></b><br>
     Close to the capital, a prestigious location and striking views: this is the introduction to the Coasts of Carthage, named after one of the most glorious ancient cities of the Mediterranean. Founded by the Phoenicians, destroyed then rebuilt by the Romans, Carthage is today a fashionable city. Next door, Sidi Bou Said is an elegant village where the blue and white houses jostle with each other on the hillside, facing the sea. Stretching out close to these inspiring locations are the beaches of Gammarth and La Marsa.
     </p></b-carousel-slide>

      <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/carthage4_1.jpg" >
       <p id="desc"><b><h2 id="title">HISTORY AND POETRY</h2></b><br>
Carthage is built on what is certainly one of the most beautiful sites of the Mediterranean. Even today, visitors are fascinated by the bay with its turquoise reflections, the white houses surrounded by cypress trees, and the distant silhouette of Mount Boukornine standing out against the mist. Discover fragments of history by accident in the streets of modern Carthage: the remains of the basilica of Saint Cyprien overlooking the sea, the Carthaginian houses of the Magon quarter, the Punic ports where a striking serenity reigns… Then climb the narrow paved streets of the famous neighbouring village, Sidi Bou Said, between blue mashrabiya latticework, pink bougainvillea and wrought iron filigree. Contemplate the stunning seascape from the Sidi Chabaane cafe, the lighthouse or the old cemetery. Several artists have chosen to live in this inspiring village. Close by, La Marsa and its seafront, Gammarth and its long beaches both attract the locals of Tunis searching for a place to relax.   </p></b-carousel-slide>
       <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/carthage3_0.jpg" >
       <p id="desc"><b><h2 id="title">CULTURE AND NIGHTLIFE</h2></b><br>
DThe site of Carthage is designated a UNESCO World Heritage Site and is worth a long visit. The accumulation of ruins across a vast zone allows the ancient city to come alive in the imagination: water reservoirs with a capacity of 60 million litres, gigantic Roman baths, an elegant way of life. In the archaeological museum, visitors can discover the art and religious rituals of Punic Carthage. Today, Carthage and its neighbours have remained centres of culture with numerous art galleries. Shows and concerts are held in the Acropolium (former cathedral), in the medieval palace Abdelliya, in the home of the Baron d’Erlanger (see p. 27). The region is also dedicated to entertainment: seaside hotels, water sports, thalasso spa centres, two golf courses, a marina in Sidi Bou Said. There is a rich nightlife there: restaurants, lounges, nightclubs, jazz festivals (Jazz à Carthage) and classical music festivals (Octobre Musical). In summer, the historic theatre hosts international shows for the International Festival of Carthage.  </p></b-carousel-slide>
      
       <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/que-manger-carthage_0.jpg"
      > <p id="desc"><b><h2 id="title"> REFINED GASTRONOMY</h2></b><br>

Former choice holiday destination for the Tunisian bourgeois and the Bey’s family, the Coasts of Carthage are of the most well-reputed regions of Tunisia for gastronomy. The authentic culinary traditions of the capital still take pride of place. Taste for example, the kabkabou, fish stewed with olives and preserved lemon. To start, try the Tunisian tajine – a thick omelette with vegetables and cheese, similar to the Spanish tortilla – and the mechouia salad – grilled and crushed tomatoes and peppers. In Sidi Bou Said, Carthage or La Marsa, the choice of restaurants is wide. You can taste traditional Tunisian recipes in a palatial Ottoman setting, inventive Mediterranean cuisine in a chic restaurant overlooking the sea, snacks served with cocktails in a trendy bar, or hearty Italian dishes in a relaxed atmosphere. When visiting Sidi Bou Said, treat yourself to a bambalouni, a large warm doughnut in the shame of a ring, then drink a mint and pine nut tea in the famous Cafe des Nattes.  </p></b-carousel-slide>
      
      <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/carthage-ville-phare-de-lantiquite_0.jpg"
      >
       <p id="desc"><b><h2 id="title">CARTHAGE, FLAGSHIP CITY OF THE ANCIENT ERA</h2></b><br>
Carthage was founded by the Phoenician Queen Elyssa, known today by the name of Dido. One of the most powerful metropolises of the ancient era, its empire stretched as far as Sardinia and Spain. Longtime rivals of the Greeks, the Carthaginians (also known as the Punics) were excellent navigators, traders and expert farmers. But despite the victories of the famed general Hannibal, the Romans conquered Carthage and made it one of the most opulent cities of their empire. Later still, St Augustine, one of the Fathers of the Western Church, studied there. In the museum of Carthage, you will be introduced to the Punic civilisation: a statue of the god Baal seated on his throne, terracotta masks, engraved stone slabs showing the mysterious “sign of Tanit”. On the site itself, you will see the ancient Punic interior ports, ruins of houses, and the sanctuary known as Tophet. As for the numerous Roman ruins, they are evidence of exceptional elegance.  

 </p></b-carousel-slide>

<b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/palsidi.jpg"
      >
       <p id="desc"><b><h2 id="title">HOUSES AND PALACES OF SIDI BOU SAID</h2></b><br>

In Sidi Bou Said, the doors are the smiling face of the houses. Painted in bright blue or yellow, arched or rectangular, framed with carved stone, ceramic tiles or black and white marble… each has its own style. The most beautiful are decorated with large black studs expertly arranged into stars, flowers, or the shapes of cypress trees or fish. On your strolls, don’t hesitate to go off the beaten track and explore the alleyways: with each step, a new door will surprise you. Sidi Bou Said was once a favourite holiday destination for the privileged families of Tunis. Close to the sea, they lived out their elegant way of life under the protection of the tomb of Sidi Abou Said, a saint from the 13th century. Behind the walls simply whitewashed with lime sometimes veritable palaces are concealed. One of them was built by a European who fell in love with the village in 1912, the baron Rodolphe d’Erlanger; transformed into a museum, in the present day it hosts concerts. Other houses have become art galleries or guesthouses.
 </p></b-carousel-slide>

</b-carousel>
   




<h3 id="know">Good To Know</h3>
<div id="info-container">
<div id="info">
<h2>Festivals</h2>
<p>Jazz in Carthage (April) 

Musical October in Carthage: classical music

International Festival of Carthage: music, theatre (July-August).</p>
</div>
<div id="info">
<h2>Transport</h2>
<p>Tunis-Carthage airport is 20 km away from the hotels in Gammarth. The small TGM train links La Marsa, Sidi Bou Said, Carthage, la Goulette and Tunis. Fast coach services link the region with Tunis. To visit Carthage, it is possible to agree a fee with a taxi to visit the different sites spread out in the modern city.</p>

</div>
<div id="info">
<h2>Shopping</h2>
<p>In the souk of Sidi Bou Said, you can buy carpets, souvenirs in ceramic, leather slippers and oriental tunics. Take advantage of the numerous handicraft boutiques of Carthage and the neighbouring towns: beautiful weavings in wool or in silk, lamps and figurines in blown glass, reimagined traditional jewellery… Other options: Tunisian pastries, date sweets, soaps perfumed with jasmine, the foutas (hammam towels)…</p>

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
    name: 'carthage',
      components: {
    Comment
  },
   
    data: function() {
        return {
          items: [{
        text: 'DISCOVER',
        href: '/'
      }, {
        text: 'TUNISIA',
        href: '/tunisia'
      }, {
        text: 'CARTHAGE',
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

</style>
