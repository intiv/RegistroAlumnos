<template>
  <div id="app" class="hola">
	<div id="content">
		<router-view></router-view>
	</div>
  </div>
</template>

<script>
	import Principal from './components/Principal.vue'
	export default {
	  name: 'app',
	  components: {
	  	Principal
	  }
	}
</script>

<style>
	body{ 
		background-color: lightgrey;
	}
	.hola{
		background-image: url("back_blue.jpg");
	}
</style>