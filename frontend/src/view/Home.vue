<template>
  <div class="container">
    <div class="flex justify-between items-center">
      <h2 class="text-5xl">News</h2>
      
      <form action="" class="flex items-center">
        <label class="text-base" for="orderByTitle">Ordina per titolo</label>
        <input
          type="checkbox"
          v-on:change="OrderByTitleChanged"
          v-model="OrderByTitle"
          name="orderByTitle"
          class="ml-2 w-4 h-4"
          id="orderByTitle"
        />
      </form>
    </div>
    <News :news="this.$store.state.news" />
    <div class="flex justify-between items-center mb-3">
      <button
      :disabled="this.$store.state.pageNumber==1"
        v-on:click="previousPage"
        class="mt-4 py-2 px-4 text-white text-center rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition-all delay-150"
      >
        Previous
      </button>
      
      <button
        :disabled="this.$store.state.pageNumber+1 > Math.ceil(this.$store.state.totalNews/20)"
        v-on:click="nextPage"
        class="mt-4 py-2 px-4 text-white text-center rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition-all delay-150"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
const baseUrl = "http://127.0.0.1:80";
import News from "../components/News.vue";
export default {
  name: "Home",
  components: {
    News,
  },
  data() {
    return {
      OrderByTitle: "",
      pageNumber: 1,
      totalNews:null,
    };
  },
  methods: {
    OrderByTitleChanged() {
      this.$store.dispatch("ordinePerTitolo", {orderByTitle:this.OrderByTitle});
    },
    nextPage(){
      this.$store.dispatch("next");
    },
    previousPage() {
      this.$store.dispatch("previous");
    },
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
};
</script>
