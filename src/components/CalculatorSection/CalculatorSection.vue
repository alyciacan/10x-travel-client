<template>
  <section>
    <Calculator :apiData="apiData" :selectedProgram="selectedProgram" />
    <CalculatorForm
      :apiData="apiData"
      :partnerPrograms="partnerPrograms"
      @selectionChanged="handleSelectionChanged"
    />
  </section>
</template>

<script>
import {
  getPartnerProgramsById,
  getTransferRates,
} from "../services/ApiService";
import Calculator from "./Calculator/Calculator";
import CalculatorForm from "./CalculatorForm/CalculatorForm.vue";

export default {
  name: "CalculatorSection",
  components: {
    Calculator,
    CalculatorForm,
  },
  data() {
    return {
      apiData: {},
      selectedProgram: null,
      destinationProgram: null,
      ratio: null,
      transferTime: null,
      transferTimeUnits: null,
      partnerPrograms: [],
    };
  },
  mounted() {
    // this.fetchData();
  },
  watch: {
    selectedProgram: function(newValue) {
      if(newValue) {
        this.fetchPartners();
    }
  }
},
  methods: {
    handleSelectionChanged(input) {
      this.selectedProgram = input;

      // this.fetchData();
    },

    async fetchData() {
      if (!this.selectedProgram) return;

      try {
        const data = await getTransferRates();
        this.apiData = data.data;
      } catch (error) {
        console.error(error);
      }
    },

    async fetchPartners() {
      if (!this.selectedProgram) return;
      try {
        const data = await getPartnerProgramsById(this.selectedProgram.id);
        this.partnerPrograms = data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
</style>
