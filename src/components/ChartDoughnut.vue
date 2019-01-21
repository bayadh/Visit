<template>
  <div>
      <h1 style="font-family:Courier, monospace; margin-top:40px; margin-bottom:40px;" id="top"> Most Searched activities</h1>
 

    <div class="card">
      <chartjs-doughnut
        v-bind:bind="true"
        v-bind:datasets="ddatasets"
        v-bind:labels="dlabels"
        v-bind:option="doption"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ddatasets: [
        {
          data: [15, 20, 25,35 ,5],
          backgroundColor: ["#ff8000","#b388ff", "#FFCE56","#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#ff8000","#b388ff", "#FFCE56","#FF6384", "#36A2EB"]
        }
      ],
      dlabels: ["outdoor adventures", "historical sites", "beautiful vista", "hidden gems", "city life"],
      doption: {}
    };
  }
};
</script>