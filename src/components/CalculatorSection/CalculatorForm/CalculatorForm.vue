<template>
  <form>
    <label for="sourceProgram">Transfer my...</label>
    <select
      id="sourceProgram"
      :v-model="selectedProgram"
      @input="
        $emit('selectionChanged', {
          name: $event.target.value,
          id: $event.target.options[$event.target.selectedIndex].id,
        })
      "
    >
      <option value="">Select a program</option>
      <option
        v-for="program in programOptions"
        :key="program.id"
        :id="program.id"
      >
        {{ program.name }}
      </option>
    </select>
    <label for="destinationProgram">to...</label>
    <select
      id="destinationProgram"
      :v-model="destinationProgram"
      @input="
        $emit('destinationProgramSelected', {
          name: $event.target.value,
          id: $event.target.options[$event.target.selectedIndex].id,
        })
      "
    >
      <option value="">Transfer to...</option>
      <option
        v-for="program in partnerPrograms"
        :key="program.id"
        :id="program.destination_program_id"
      >
        {{ program.destination_program_name }}
      </option>
    </select>
  </form>
</template>
<script>
import { getProgramOptions } from "../../services/ApiService";

export default {
  name: "CalculatorForm",
  props: {
    apiData: {
      type: Object,
      required: true,
    },
    sourceProgram: {
      type: String,
      required: false,
    },
    destinationProgram: {
      type: String,
      required: false,
    },
    rate: {
      type: Number,
      required: false,
    },
    transferTime: {
      type: Number,
      required: false,
    },
    transferTimeUnits: {
      type: String,
      required: false,
    },
    selectedProgram: {
      type: Object,
      required: false,
      default: null,
    },
    partnerPrograms: {
      type: Array,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      programOptions: [],
    };
  },
  mounted() {
    this.fetchOptions();
  },

  methods: {
    async fetchOptions() {
      try {
        const data = await getProgramOptions();
        this.programOptions = data;
      } catch (error) {
        console.error("Error:", error);
      }
    },
    calculateRatio: function (value) {
      const numerator = value % 100;
      const denominator = Math.floor(value / 100);
      return `${numerator} : ${denominator}`;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px0 auto;
  width: 100%;
}
label {
  margin: 0px 10px 0px 30px;
}
</style>