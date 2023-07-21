<template>
  <section>
    <Calculator
      :apiData="apiData"
      :selectedProgram="selectedProgram"
      :destinationProgram="destinationProgram ? destinationProgram.name : null"
      :transferDetails="transferDetails"
    />
    <CalculatorForm
      :apiData="apiData"
      :partnerPrograms="partnerPrograms"
      :transferDetails="transferDetails"
      @selectionChanged="handleSelectionChanged"
      @destinationProgramSelected="handleDestinationChanged"
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
      transferDetails: null,
      partnerPrograms: [],
    };
  },
  mounted() {
    // this.fetchData();
  },
  watch: {
    selectedProgram: function (newValue) {
      if (newValue) {
        this.fetchPartners();
      }
    },
    destinationProgram: function (newValue) {
      if (this.selectedProgram && this.destinationProgram) {
        this.fetchTransferDetails();
      }
    },
  },
  methods: {
    handleSelectionChanged(input) {
      this.selectedProgram = input;

      // this.fetchData();
    },

    handleDestinationChanged(input) {
      this.destinationProgram = input;
      console.log(this.destinationProgram);
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
        this.partnerPrograms = data;
      } catch (error) {
        console.error(error);
      }
    },

    async fetchTransferDetails() {
      if (!this.selectedProgram || !this.destinationProgram) return;
      try {
        const data = await getTransferRates(
          this.selectedProgram.id,
          this.destinationProgram.id
        );
        this.transferDetails = data[0];
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
</style>
