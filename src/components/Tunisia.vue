<template>

   <div>
 
<navbar></navbar>

<h1 style="font-family:Courier, monospace; margin-top:40px; margin-bottom:40px;">DISCOVER TUNISIA</h1>
<h5 style="font-family:Courier, monospace; margin-left: 160px; margin-right: 160px;" >Tunisia is a captivating destination unlike any other. One that will surprise and delight you in so many memorable ways.</h5>

 <b-embed class="video" type="iframe"
           src="https://www.youtube.com/embed/6E7jlxGrP9Q?"
           allowfullscreen
           width="700"
           autoplay="true"
  ></b-embed>
  <div class="cont">
<div id="card">
<b-card title="El-Kef "
          img-src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/46128292_2447757935254009_3985824500745764864_n.jpg?_nc_cat=101&_nc_ht=scontent-cdg2-1.xx&oh=7d1f42dae67aa071dd4eb6f7d4053de5&oe=5CCE39C5"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; margin-top: 40px;"
          class="mb-2">
    <p class="card-text">
      Leave behind Tunis and the beaches of the coast and discover a little known side of Tunisia: the Atlas Mountains and the plains of the “hauts plateaux”. In these contrasting landscapes of the west of Tunisia you’ll find Le Kef, a charming little town with a tumultuous past. Natural beauty is not the only thing this region has to offer.
    </p>
    <b-button href="#" variant="primary" to="/elkaf">Read More </b-button>
  </b-card>


 <b-card title="Carthage and Sidi Bou Said"
          img-src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/46230759_2448086251887844_4935060110507507712_n.jpg?_nc_cat=111&_nc_ht=scontent-cdg2-1.xx&oh=8c027a7dad902330f83cff278870c360&oe=5CCD79A7"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; margin-top: 40px;"
          class="mb-2">
    <p class="card-text">
The idyllic, thriving metropolis town of Sidi Bou Said is located atop a steep cliff overlooking the Mediterranean Sea. Twenty kilometers or so from the capital city Tunis, Sidi Bou Said is a favored getaway destination for locals and tourists alike. </p>
    <b-button href="#" variant="primary" to="/carthage">Read More </b-button>
  </b-card>

  <b-card title="Touzeur"
          img-src="https://telombreinwonderland.files.wordpress.com/2017/06/sahara-desert-merzouga.jpg?w=1100"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; margin-top: 40px;"
          class="mb-2">
    <p class="card-text">
Towns arising from the desert and pressed against vast palm groves, Tozeur and Nefta surprise, fascinate and immerse visitors in a surreal landscape. The burning light of the Sahara pours into narrow streets of the old quarters, between the high façades and golden coloured bricks. In Tozeur, palaces, theme parks and museums have flourished around the old town.    </p>
    <b-button  variant="primary" to="/touzeur"> Read More</b-button>
  </b-card>

</div>
<div id="card">
  <b-card title="El-Jam "
          img-src="http://www.cap-voyage.com/wp-content/uploads/2015/05/Amphitheatre-El-Jem-Tunisie-El-Djem-03.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; margin-top: 40px;"
          class="mb-2">
    <p class="card-text">
      The idyllic, thriving metropolis town of Sidi Bou Said is located atop a steep cliff overlooking the Mediterranean Sea. Twenty kilometers or so from the capital city Tunis, Sidi Bou Said is a favored getaway destination for locals and tourists alike.
    </p>
    <b-button href="#" variant="primary">Read More </b-button>
  </b-card>

<b-card title="Dougga "
          img-src="https://lonelyplanetwp.imgix.net/2018/08/dougga-roman-ruins-tunisia-3821f8a12b0c.jpg?fit=min&q=40&sharp=10&vib=20&w=1470"
          img-alt="Image"
          img-top
          img-height=212px
          tag="article"
          style="max-width: 20rem; margin-top: 40px;"
          class="mb-2">
    <p class="card-text">
The ruins of Utica, the first colony founded by the Phoenicians in Tunisia, and of Dougga, a small indigenous town that later became Roman, bear witness to the ancient past of this fertile region    </p>
    <b-button href="#" variant="primary">Read More </b-button>
  </b-card>
 

<b-card title="Nabeul and Cap Bon"
          img-src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/46420890_1108794772614813_9016950651569045504_n.jpg?_nc_cat=101&_nc_ht=scontent-cdg2-1.xx&oh=cacd9255fdbf54844d6552d1e5a6dd22&oe=5CCE1532"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; margin-top: 40px;"
          class="mb-2">
    <p class="card-text">
A promontory pointed towards Sicily, the Cap Bon region is a vast garden where orange and lemon trees put out their flowers in the middle of winter. Its beaches of fine sand are among the most beautiful in Tunisia. The principal town of Cap Bon, Nabeul is famous for its pottery, its rush mats and its flower essences.    </p>
    <b-button href="#" variant="primary">Read More </b-button>
  </b-card>
  </div>
</div>
<hr>
<footer>

    
    <div class="footer-copyright text-center py-3">© 2019 Copyright: BAYA & AMIN & YOUSEF</div>
   

  </footer>
  </div>

</template>

<script>
  export default {
    name: 'tunisia',
      props: {
         
      }
  }
</script>

<style>
#card{
    display:flex !important;
   flex-direction: row !important;
   margin-left: 20px !important;
   justify-content: space-evenly !important;
   align-items: stretch !important;
  
   
}
.cont{
   margin-top: -300px !important;
}
.video{
width:1000px !important;
height: 400px !important;
margin-left: 240px;
margin-top: 40px;
}

</style>