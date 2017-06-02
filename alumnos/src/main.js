// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Principal from './components/Principal.vue'
import Student from './components/Student.vue'

Vue.use(VueRouter)
const router = new VueRouter({
	routes : [
		{
			name: 'Registro',
			path: '/',
			component: Principal
		},
		{
			name: 'Estudiante',
			path: '/student/:id',
			component: Student
		}
	]
})
new Vue({ // eslint-disable-line no-new
  router,
  render: (h) => h(App)
}).$mount('#app');
