---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Hello!"
  text: "&zwnj;"
  tagline: This is my blog.
  actions:
    - theme: brand
      text: Portfolio
      link: /Portfolio/Big_data_EmpiricalStudy
    - theme: alt
      text: About Me
      link: /AboutMe/intro
---

<style scope>
	@keyframes ani_inputFlash {
        0%{
            color: #fff;
        }
        50%{
            color: #000;
        }
        100%{
            color: #fff;
        }
    }

	.text_after::after{
		content: "|";
		animation: ani_inputFlash 0.7s infinite;
	}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	var text_dom = document.getElementsByClassName("text")[0]
	text_dom.classList.add("text_after")
	var counts = 0
	var text_list = [
		"n",
		"ni",
		"ni'",
		"ni'h",
		"ni'ha",
		"ni'hao",
		"你好",
		"你好",
		"你",
		"&zwnj;",
		"H",
		"He",
		"Hel",
		"Hell",
		"Hello",
		"Hello!",
		"Hell",
		"Hel",
		"He",
		"H",
		"&zwnj;",
		"お",
		"お元",
		"お元気",
		"お元気で",
		"お元気です",
		"お元気ですか",
		"お元気ですか？",
		"お元気ですか",
		"お元気です",
		"お元気で",
		"お元気",
		"お元",
		"お",
		"&zwnj;",
	]
	let intervalfun = setInterval(()=>{
		text_dom.innerHTML = text_list[counts%text_list.length]
		counts += 1
		counts = counts%text_list.length
	}, 350)
})
</script>