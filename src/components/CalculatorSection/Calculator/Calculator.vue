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
    <div v-if="selectedProgram">
      <p>Transfer {{ selectedProgram.id }} to {{ destinationProgram }}</p>
      <p>Ratio: {{}}</p>
      <p>Transfer time: {{ transferTime }}{{ transferTimeUnits }}</p>
    </div>
    <div v-else>
      Get started by selecting a reward partner and entering the amount of
      points you want to convert.
    </div>
  </div>
</template>
<script>
import Header from "@/components/global/header/Header.vue";

export default {
  name: "Calculator",
  components: {
    Header,
  },
  mounted() {},
  watch: {
    selectedProgram(newValue) {
      // console.log("selected program", newValue);
    },
  },
  props: {
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
  },
};
</script>

<style scoped>
</style>
