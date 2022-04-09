import { createApp } from 'vue'
import App from './App.vue'

//importing the tailwind css file form the css folder
import './css/index.css'
import axios from 'axios'

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      width: 0,
      isActive: false,
      pageNumber: 1,
      baseUrl: "http://127.0.0.1:80",
      news: [],
      totalNews: null,
    }
  },
  mutations: {
    showProgressBar(state) {
      state.isActive = true;
      this.commit('IncrementWidth');


    },
    hideProgressBar(state) {

      state.isActive = false

    },
    IncrementWidth(state) {

      while (state.width < 100) {
        state.width = state.width + 25;
      }


    },
    getNews(state, payload) {
      state.news = payload.news;
      state.totalNews = payload.totalArticles;
    },
    next(state) {
      state.pageNumber++;

    },
    previous(state) {
      state.pageNumber--;
    },
  },
  actions: {
    async getNews() {
      this.commit("showProgressBar");
      try {
        const news = await fetch(`${this.state.baseUrl}/news?page=${this.state.pageNumber}`);
        const newsdDta = await news.json();
        this.commit('getNews', newsdDta);
        this.commit("hideProgressBar");

      } catch (err) {
        console.log(err);
        this.commit("hideProgressBar");
      }
    },
    next() {

      this.commit('next');
      this.dispatch('getNews');
    },
    previous() {

      this.commit('previous');
      this.dispatch('getNews');
    },
    async ordinePerTitolo(state,payload) {

      try{
        const newsGotBackFromDb=await axios.get(`${this.state.baseUrl}/news?orderByTitle=${payload.orderByTitle}&page=${this.state.pageNumber}`);
        this.commit('getNews', newsGotBackFromDb.data);

      }catch(err){
        console.log(err);
      }

    
    },async search(state,payload){
      console.log(payload)
      if(payload.search.length>=4){
        try{
          const dataGotFromBackend=await axios.get(`${this.state.baseUrl}/news?&page=${this.state.pageNumber}&q=${payload.search}`);
          console.log(dataGotFromBackend)
          this.commit('getNews', dataGotFromBackend.data);

        }catch(err){
            console.log(err)
        }
      }
    }


  }
})

createApp(App).use(store).mount('#app')
