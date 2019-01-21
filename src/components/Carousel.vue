<template>
  <div>
  


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

      <!-- Text slides with image -->
      <b-carousel-slide caption="Sidi Bou Said, Tunisia"
                        text="The idyllic, thriving metropolis town of Sidi Bou Said is located atop a steep cliff overlooking the Mediterranean Sea."
                        img-src="https://www.roadaffair.com/wp-content/uploads/2017/09/sidi-bou-said-tunisia-shutterstock_343992563.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://www.roadaffair.com/wp-content/uploads/2017/09/manarola-cinque-terre-italy-road-affair.jpg" caption="Cinque Terre, Italy" text="Cinque Terre offers timeless appeal and a feel of authentic Italy with its rugged coastlines and romantic town area." >
      
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://www.roadaffair.com/wp-content/uploads/2017/09/ait-benhaddou-morocco-shutterstock_400558897.jpg" caption="Ait Ben-Haddou, Morocco" text="Ait-Ben-Haddou is a traditional southern Morocco earthen village made from clay bricks.">
      </b-carousel-slide>
       <b-carousel-slide caption="Wengen, Switzerland"
                        text="Wengen is a resort town teeming with tourists eager to ski the snow-covered slopes in the Winter and hike trails in the Summer."
                        img-src="https://www.roadaffair.com/wp-content/uploads/2017/09/wengen-switzerland-shutterstock_661298698.jpg"
      ></b-carousel-slide>
       <b-carousel-slide caption="Bibury, England"
                        text="Easily one of the most beautiful small towns in Europe, is Bibury, a little town in Gloucestershire Cotswolds."
                        img-src="https://www.roadaffair.com/wp-content/uploads/2017/09/bibury-england-shutterstock_172701116.jpg"
      ></b-carousel-slide>

    

      

    </b-carousel>
  </div>

</template>

<script>
  export default {
    name: 'carousel',
     
  }
</script>
