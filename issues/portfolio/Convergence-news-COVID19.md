# Convergence News

## Introduction
The work is a convergence  news piece that emerged from in-depth interviews with students returning home during the COVID-19. 

Its primary feature lies in the continuous advancement of a 🚗 on the map at the top of the article, symbolizing the journey home, as users read through the content.

<style>
    @keyframes ani_dotRun {
        0%{
            left: -100vw;
            width: 0vw;
        }
        50%{
            left: 0vw;
            width: 100vw;
        }
        100%{
            left: 100vw;
            width: 0vw;
        }
    }
    .mindleDot{
        margin-top: 0vh;
        text-align: center;
        color: rgb(32, 32, 32);
        font-weight: bold;
        overflow: hidden;
        position: relative;
        animation: ani_dotRun 3s infinite;
    }
</style>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

const iframe = ref()
const loading_div = ref()
const iframe_height = ref(window.innerHeight)
const iframe_weight = ref(iframe_height.value * 0.53)


onMounted(() => {
    fetch(withBase("/H5/html.txt"))
        .then((Response) =>  Response.text())
        .then((data) => iframe.value.srcdoc = data)

    iframe.value.onload = function(){
        iframe.value.style.visibility = "visible"
        loading_div.value.style.display = "none"
    };
})
</script>

## Experience

::: info
You can read and experience the work directly after the content below has finished loading. But please note that the language of the work is **Chinese**
:::

<div ref="loading_div" style="overflow:hidden;text-align: center;">
    <div style="font-size: 200%">Wait loading</div> 
    <div class="mindleDot">......</div>
</div>


<div style="overflow:hidden;text-align: center;justify-content:center;display:flex;">
    <iframe ref="iframe" sandbox="allow-forms allow-scripts allow-modals" :height="iframe_height" :width="iframe_weight" style="visibility: hidden;transform: scale(0.85);border-radius: 10px;border: solid 10px #fff;box-shadow: rgba(74, 74, 74, 0.325) 0px 0px 15px;"></iframe>
</div>


