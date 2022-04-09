<template>
    <div class="group card relative my-4 rounded-xl shadow-md  overflow-hidden transition-all delay-150 transform ">
        <div class="absolute bottom-2 right-4 flex flex-col">
            <h5 class="text-black font-bold">Pubblished on: <span class="font-medium">{{formatDate(data.publishedAt)}}</span></h5>
             <h5 class="text-base font-bold  z-50 text-black">Author: <span class="font-medium">{{data.author}}</span></h5>
        </div>
      <img  :src="data.urlToImage?data.urlToImage:'https://image.shutterstock.com/image-vector/breaking-news-background-planet-260nw-667420906.jpgD'" class=" group-hover:scale-105 group-hover:rotate-1 transform transition-all delay-250 card-img-top h-56 object-cover" alt="..." />
      <div class="card-body">
        <h5 class="card-title font-bold h-12  mb-3">{{data.title && data.title.substring(0,100)}}...</h5>
    
       
        <p class="card-text mb-3 h-20 overflow-hidden">
            {{data.description && data.description.substring(0,80)}}...
        </p>
           
        <a :href="data.url" target="_blank" class=" mt-4 py-2 px-3 text-white text-center  rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition-all delay-150 ">Read more</a>
      </div>
    </div>
</template>


<script>

export default {
    name:'NewsItem',
    props:{
        data:{
            type:Object,
            required:false
        }
    },
    methods: {
        formatDate(dateInUtcFormat){
            return new Date(dateInUtcFormat).getDate()+"/"+new Date(dateInUtcFormat).getMonth()+"/"+new Date(dateInUtcFormat).getFullYear();
        },
        
    },
    
  
    
}

</script>