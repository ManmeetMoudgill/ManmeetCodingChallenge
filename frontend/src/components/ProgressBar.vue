<template>
    <div id="myProgress" class="w-full fixed top-0 z-50 bg-gray-200">
            <div id="myBar" ref="bar" v-bind:class="[this.$store.state.isActive ? width : '', customProgressClass]"></div>
            
    </div>
</template>

<script>

export default {
    name:"ProgressBar",
    data() {
        return {
            bar:"",
            customProgressClass:"h-1 bg-red-600 transition-all delay-150 transform",
            width:0,
           
            
        }
    },
    mounted() {
        this.width=`w-${this.$store.state.width}`;
        
    },
}
</script>