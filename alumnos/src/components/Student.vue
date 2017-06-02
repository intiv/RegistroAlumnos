<template>
	<div id="root">
		<div class="row">
			<div id="profile" class="col l10 offset-l1">
				<div class="card blue-grey darken-1">
					<div class="card-content white-text">
						<div class="card-title">
							<h1>{{ident}} - {{nombre}}</h1>
						</div>
					</div>
					<div class="card-action">

						<p><u># Cuenta:</u> {{numCuenta}}</p>
						<p><u>Hobbies:</u> {{hobbies}}</p>
						<p><u>Edad:</u> {{edad}}</p>
						<p><u>Comida:</u> {{comida}}</p>
						
					</div>
					
				</div>
				<div>
					 <router-link to="/"><button class="blue btn">Back</button></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'student',
		data(){
			return {
				ident: this.$route.params.id,
				nombre : '',
				numCuenta : '',
				hobbies: '',
				edad: '',
				comida: ''
			}	
		},
		mounted(){
			var stud=JSON.parse(localStorage.getItem(this.ident));
			this.nombre = stud.Name;
			this.numCuenta= stud.nCuenta;
			this.hobbies = stud.hobbies;
			this.edad = stud.edad;
			this.comida = stud.comida;
		}
	}
</script>

<style scoped>
	#profile{
		vertical-align: center;
		font-family: "Roboto";
		text-align: center;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
	}
	.card{
		background-color: #0C374D !important;
		border: 3px solid lightgrey;
		padding: 1%;
	}
	p{
		font-size: 24px;
	}
</style>