<template>
	<div id="root">
		<div v-bind:style="{ backgroundImage: 'url(../back_blue.jpg)'}">
		<div class="row" id="inputs">
			<div class="row" id="title">
				<div class="col l10 offset-l1">
					<h2><i class="medium material-icons">person_pin</i> Registro de Alumnos</h2>
				</div>
			</div>	
			<div class="col l10 offset-l1" id="inputContainer">
				<!--Nombre-->
				<div class="row">
					<div class="col l10 offset-l1 input-field" id="nombreContainer">
						<input type="text" class="validate" id="nombre" v-model="nombre">
						<label for="nombre" class="active">Nombres</label>
					</div>
				</div>
				<!--Cuenta-->
				<div class="row">
					<div class="col l10 offset-l1 input-field" id="cuentaContainer">
						<input type="text" class="validate" id="cuenta" v-model="cuenta">
						<label for="cuenta" class="active">Numero de Cuenta</label>
					</div>
				</div>
				<!--ID-->
				<div class="row">
					<div class="col l10 offset-l1 input-field" id="idContainer">
						<input type="text" class="validate" id="id" v-model="id">
						<label for="id" class="active">ID</label>
					</div>
				</div>
				<!--Hobbies-->
				<div class="row">
					<div class="col l10 offset-l1 input-field" id="hobbiesContainer">
						<input type="text" class="validate" id="hobbies" v-model="hobbies">
						<label for="hobbies" class="active">Hobbies</label>
					</div>
				</div>
				<!--Edad-->
				<div class="row">
					<div class="col l10 offset-l1 input-field" id="edadContainer">
						<input type="text" class="validate" id="edad" v-model="edad">
						<label for="edad" class="active">Edad</label>
					</div>
				</div>
				<!--Comida-->
				<div class="row">
					<div class="col l10 offset-l1 input-field" id="comidaContainer">
						<input type="text" class="validate" id="comida" v-model="comida_fav">
						<label for="comida" class="active">Comida Favorita</label>
					</div>
				</div>
				<!--Insertar-->
				<div class="row">
					<div class="col l4 offset-l4">
						<button class="waves-effect waves-light blue btn" v-on:click="dataInserted('true'); insertStudent();">Insertar</button>
					</div>
				</div>
			</div>
		</div>
		<div class="row" v-if="hasData()==='true'">
			<div class="col l10 offset-l1" id="tablaContainer">
				<table id="tabla" class="centered bordered white">
					<thead>
						<tr>
							<td>ID</td>
							<td>#Cuenta</td>
							<td>Nombre</td>
							<td>Accion</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in rows">
							<td>{{row.identidad}}</td>
							<td>{{row.nCuenta}}</td>
							<td>{{row.Name}}</td>
							<td>
								<a v-on:click="removeStudent(row)"><i class="small material-icons">delete</i></a>
								<a>
									<router-link :to="'/student/'+row.identidad">
										<i class="small material-icons">visibility</i>
									</router-link>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	export defaul
	t{
		name: 'principal',
		data(){
			return{
				isNotEmpty: 'false',
				nombre: '',
				id: '',
				cuenta: '',
				hobbies: '',
				edad: '',
				comida_fav: '',
				rows: [],
			}
		},
		methods : {
			hasData(){
				return this.isNotEmpty;
			},
			dataInserted(nBoolean){
				this.isNotEmpty=nBoolean;
			},
			insertStudent(){
				this.rows.push({
					identidad:this.id, 
					nCuenta:this.cuenta, 
					Name:this.nombre,
					hobbies: this.hobbies,
					edad: this.edad,
					comida: this.comida_fav
				});
				localStorage.setItem(this.rows[this.rows.length-1].identidad,JSON.stringify(this.rows[this.rows.length-1]));
				this.nombre='';
				this.id='';
				this.cuenta='';
				this.hobbies='';
				this.edad='';
				this.comida_fav='';

			},
			removeStudent(row){
				var index=this.rows.indexOf(row);
				localStorage.removeItem(this.rows[index].identidad);
				this.rows.splice(index,1);	
				if(this.rows.length==0){
					this.isNotEmpty='false';
				}
				
			}
		},
		beforeMount(){
			if(localStorage.length>0){
				console.log('woot');
				this.isNotEmpty='true';
				for (var i = 0; i < localStorage.length; i++) {
					var curr=JSON.parse(localStorage.getItem(localStorage.key(i)));
					var objeto={identidad:curr.identidad, nCuenta:curr.nCuenta, Name: curr.Name, hobbies: curr.hobbies, edad: curr.edad, comida: curr.comida};
					console.log(objeto);
					this.rows.push(objeto);
				}
			}else{
				this.isNotEmpty='false';
			}

		}
	}
</script>

<style scoped>   
	#root{
		margin: 1% 25% 2% 25%;	
		background-image: url('../back_blue.jpg');
		background-size: cover;	
		font-family: "Roboto";
	}

	#inputs{
		border-radius: 8px;
		border: solid lightgrey;
		padding: 2%;
		background-color: #0C374D;
	}

	.input-field input[type="text"]:focus + label{
		color: #2890CC !important;
	}

	.input-field input[type="text"]:focus{
		border-bottom: 1px solid #2890CC;
		box-shadow: 0 1px 0 0 #2890CC;
	}

	.input-field input[type="text"]{
		border-bottom: 1px solid white;
		box-shadow: 0 1px 0 0 white;
		color: white;
	}

	.input-field label{
		color: white;
		font-size: 14px !important;
	}

	h2{
		text-align: center;
		color: white;
	}

	.btn{
		background-color: #2890CC !important; 
	}

	table{
		border: 0.5px solid black;
		text-align: center;
	}
</style>