Vue.component('todo-item',{
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
})

var app2 = new Vue({
	el: '#app2',
	data: {
		message: "You loads this page on "+ new Date()
	}
})

var app3 = new Vue({
	el: '#app3',
	data: {
		seen:true
	}
})

var app4 = new Vue({
	el: '#app4',
	data: {
		todos: [
			{text: "this is 1"},
			{text: "this is 2"},
			{text: "this is 3"}
		]
	}
})

var app5 = new Vue({
	el: '#app5',
	data: {
		message: "Hello Vue.js"
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: '#app6',
	data: {
		msg: 'start here'
	}
})

var app7 = new Vue({
	el: '#app7',
	data: {
		groceryList:[
			{text:'Vegetables'},
			{text:'Cheese'},
			{text:'Whatever else we human like eating'}
		]
	}
})