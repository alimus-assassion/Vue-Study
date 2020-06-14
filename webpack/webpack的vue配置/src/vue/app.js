export default {
	template:`
	<div>
		<h2>{{message}}</h2>
	</div>
	<div>
		<button type="button" @click="btnClick"></button>
	</div>`,
	data() {
		return {
			message: "hello vue"
		}
	},
	methods: {
		btnClick() {
			console.log("btnClick")
		}
	}
}