<template>
  <div>
    <section>
      <Header
        headerText="Points Transfer Calculator"
        :bodyText="`Find out what your ${
          selectedProgram ? selectedProgram.name : ''
        } ${
          selectedProgram &&
          selectedProgram.name.toLowerCase().includes('miles')
            ? ''
            : 'points'
        } are worth when transferring to partner programs!`"
      />
    </section>
    <div v-if="transferDetails">
      <p>
        Transfer {{ transferDetails.source_program_name }} to
        {{ transferDetails.destination_program_name }}
      </p>
      <p>Ratio: {{ ratio }}</p>
      <p>
        Transfer time:
        {{
          transferDetails.transfer_time === 0
            ? "Instant"
            : transferDetails.transfer_time +
              " " +
              transferDetails.transfer_time_units
        }}
      </p>
    </div>
    <div v-else>
      Get started by selecting a reward partner and entering the amount of
      points you want to convert.
    </div>
  </div>
</template>
<script>
import Header from "@/components/global/header/Header.vue";
import { decimalToRatio } from "../../utils/Utilities";

export default {
  name: "Calculator",
  components: {
    Header,
  },
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  props: {
    sourceProgram: {
      type: String,
      required: false,
    },
    destinationProgram: {
      type: String,
      required: false,
    },
    selectedProgram: {
      type: Object,
      required: false,
      default: null,
    },
    transferDetails: {
      type: Object,
      required: false,
      default: null,
    },
  },
  computed: {
    ratio() {
      if (this.transferDetails) {
        return decimalToRatio(this.transferDetails.transfer_rate);
      }
      return "";
    },
  },
};
</script>

<style scoped>
</style>
