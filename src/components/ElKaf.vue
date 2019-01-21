<template>
  <div>
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

    
      <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/kef.jpg"  >
      <p id="desc"><b><h2 id="title"> MOUNTAINS AND MEDINA</h2></b><br>
      The imposing Atlas Mountains boast stunning panoramas, including, for example, the Ottoman fort in El Kef. You can also enjoy fabulous views of the mountains of the Jugurtha Tableland. Take a stroll through the old town of El Kef, which is nestled into the cliff face overlooking stunning valleys. One of its attractions is the plethora of different monuments and relics from all eras and all religions. You’ll be able to see cisterns and Roman baths, an ancient church dedicated to St Peter, an 18th century Jewish synagogue that is also honoured by the town’s Muslims, and three neighbouring cemeteries: Muslim, Jewish and Christian. But El Kef’s most iconic monument is the Sidi Bou Makhlouf Mausoleum, with its ribbed white domes and its octagonal minaret decorated with emerald green ceramics.</p>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/kef1.jpg" >
       <p id="desc"><b><h2 id="title">CULTURE AND WALKING</h2></b><br>
       Enjoy a walk along mountain paths, in the forest or on the banks of a lake. Explore villages on your way, marvel at the work of craftsmen who weave esparto and craftswomen who create rugs and throws. Discover caves, megaliths, the remains of Roman towns and thermal springs. In the Saddine nature reserve near El Kef, you can see some amazing animal species like porcupines and golden eagles. In the old town of El Kef, you can visit the museum of art and popular traditions, housed in a magnificent 18th century religious building; you can find out everything there is to know about equestrian traditions, jewellery from the northwest or life in a Bedouin tent. You can also explore the Ottoman Kasbah (fortress) that marked the border with Algeria: it is made up of two forts, one housing Turkish Janissaries, the other for auxiliary troops.</p>
     </b-carousel-slide>
       <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/sans-titre-2.jpg" >
       <p id="desc"><b><h2 id="title">BARLEY AND COUSCOUS WITH DATES</h2></b><br>
Discover the original cuisine of the western regions and the ingredients produced by this generous land. In El Kef, you can enjoy a really unusual sweet and savoury couscous called berzguen: washed down with milk and served with lamb flavoured with rosemary from the mountains, dried fruit and dates, it is a traditional dish for festive occasions. Another local dish is malthouth: ground barley prepared in the same way as couscous. Try some rustic barley bread or an age-old recipe like zrir, a sesame and hazelnut cream.</p>     </b-carousel-slide>
       <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/kef3.jpg"
      > <p id="desc"><b><h2 id="title"> IN THE COUNTRYSIDE OR THE MEDINA</h2></b><br>
The region’s main town, El Kef, offers a range of small hotels and guesthouses in the medina. You can also stay near the town in a comfortable converted farmhouse.</p>     
      </b-carousel-slide>
       <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/kef4.jpg"
      >
       <p id="desc"><b><h2 id="title">THE ARCHAEOLOGICAL SITES IN THE WEST</h2></b><br>
The western regions were incredibly prosperous in ancient times, and boast a wealth of treasures for amateur archaeologists. The site of Makthar, one of the largest in Tunisia, is home to some spectacular remains, like the Arch of Trajan, the Large Baths and the elegant colonnade of the School Juvenum. Sbeitla is remarkable due to its Capitol, made up of not one, but three temples dedicated to Minerva, Jupiter and Juno, the gods that protected Rome. In Haïdra, you can see the remains of one of the largest Byzantine fortresses in North Africa, as well as a number of Christian churches. Indeed, the western regions boast extensive traces of ancient Christianity. In Sbeitla, the huge Basilica of Vitalis has a stunning basin for baptisms covered in mosaics. In the countryside, the El Gousset archways are all that remain of a large church, 33 metres long, reminding us that Tunisia was once a key stronghold for Christians in the West.</p>     </b-carousel-slide>
       <b-carousel-slide img-src="https://www.discovertunisia.com/en/sites/default/files/jugurtha.jpg"
      >
       <p id="desc"><b><h2 id="title">THE JUGURTHA TABLELAND</h2></b><br>
Jugurtha was a famous ancient Berber prince, a hero of the resistance to the Roman conquest. His grandfather, Massinissa, founded a large kingdom next to Carthage in the 2nd century BC. Towns, temples and monuments sprang up throughout central Maghreb and the northwest of Tunisia.



The Jugurtha Tableland covers 80 hectares and its highest point is at an altitude of 1,271 metres; a real natural fortress that has been used as a refuge throughout history. The Berber prince hid there with his army during his war against the Romans. Completely surrounded by sheer cliffs, it overlooks vast fields of wheat and hills as far as the eye can see. You’ll need to climb up an ancient staircase carved out of the rock to get to the plateau and enjoy a breath-taking 360° view of the surrounding landscape. The site houses a number of different remains, including dolmens, a Byzantine arc, a small mosque, reservoirs carved out of the rock, caves and prehistoric tombs…</p>     </b-carousel-slide>

    

      

    </b-carousel>



<h3 id="know">Good To Know</h3>
<div id="info-container">
<div id="info">
<h2>Weekly markets</h2>
<p>Monday: Makthar. Tuesday: Kasserine. Wednesday: Sers, Sbeitla. Thursday: Le Kef, Siliana. Saturday: Sidi Bouzid</p>
</div>
<div id="info">
<h2>Transport</h2>
<p>El Kef is 170 km from Tunis, 120 km from Sbeitla and 30km from Kasserine.</p>

</div>
<div id="info">
<h2>Shopping</h2>
<p>Dans les régions montagneuses de l’Ouest, on fabrique de la poterie modelée à la main sans tour de potier : braseros, plats et marmites. Les couvertures de laine tissées dans la région du Kef sont d’une finesse remarquable, alternant les rayures aux coloris raffinés. Vous pourrez préférer les tissages bédouins pour leurs couleurs éclatantes, obtenues avec des pigments naturels.</p>

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
    name: 'elkef',
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
        text: 'EL-KEF',
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
footer{
  
}
</style>
