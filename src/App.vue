<template>
  <NavBar/>
  <CalculatorSection/>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import CalculatorSection from './components/CalculatorSection/CalculatorSection.vue';
import { getAllRates } from './components/services/ApiService'

export default {
name: 'App',
components: {
  NavBar,
  CalculatorSection
},
data() {
  return {
      data: []
  };
},
created() {
  this.fetchData();
},
methods: {
  async fetchData() {
      try {
          const rates = await getAllRates();
          this.data = rates;
      } catch (error) {
          console.error('Error:', error);
      }
  }
}
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
