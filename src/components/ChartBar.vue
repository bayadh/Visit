<template>
  <div>
    <h1 style="font-family:Courier, monospace; margin-top:40px; margin-bottom:40px;" id="top"> Most Visited Places Of 2018 By season</h1>
 

    <div class="card">
      <canvas id="fooCanvas" count="2" />

      <chartjs-bar
        v-for="(item, index) in types"
        v-bind:key="index"
        v-bind:backgroundcolor="item.bgColor"
        v-bind:beginzero="beginZero"
        v-bind:bind="true"
        v-bind:bordercolor="item.borderColor"
        v-bind:data="item.data"
        v-bind:datalabel="item.dataLabel"
        v-bind:labels="llabels"
        target="fooCanvas"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginZero: true,
      llabels: ["Hallstatt, Austria","Shirakawa-go, Japan", "Cinque Terre, Italy",  "Oia, Greece", "Wengen, Switzerland", "Larung Gar, Tibet", "Dogga, Tunisia"],
      types: [
        {
          bgColor: "#36A2EB",
          borderColor: "#e91e63",
          data: [71, 88, 24, 22, 82, 34, 46],
          dataLabel: "Winter"
        },
        {
          bgColor: "#FF6384",
          borderColor: "#9c27b0",
          data: [29, 12, 76, 78, 18, 66, 54],
          dataLabel: "Summer"
        }
      ]
    };
  }
};
</script>