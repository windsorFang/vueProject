new Vue({
	el: "#app",
	data: {
		// name:"米其林西餐厅",
		// job:"厨师长",
		// website:'https://www.cnblogs.com/luzhenqian/p/9049354.html',
		// text:'0',
		// a:0,
		// b:0,
		// age:18,
		colorTrigger: false,
		lengthTrigger: false,
		name: "",
		count: 0,
		obj: {
			name: "windsor",
			info: {
				age: 18,
				height: "180cm"
			},
			packs: []
		},
		arr1:[{"bossOfferId":"600000452092","offerName":"设备押金减免-宽带电视","bossGradeId":"600000599268"},{"bossOfferId":"600000452864","offerName":"宽带电视基础包","bossGradeId":"600000599268"},{"bossOfferId":"600000463027","offerName":"融合套餐宽带电视包月优惠促销","bossGradeId":"600000599268"},{"bossOfferId":"600000452092","offerName":"设备押金减免-宽带电视","bossGradeId":"600000599269"},{"bossOfferId":"600000452864","offerName":"宽带电视基础包","bossGradeId":"600000599269"}],
		arr2:[{"bossOfferId":"600000452864","offerName":"宽带电视基础包","bossGradeId":"600000599268"},{"bossOfferId":"600000463027","offerName":"融合套餐宽带电视包月优惠促销","bossGradeId":"600000599268"},{"bossOfferId":"600000452864","offerName":"宽带电视基础包","bossGradeId":"600000599269"}]
	},
	methods: {
		// greet(){
		// 	let date = new Date();
		// 	let year = date.getFullYear();
		// 	let month = date.getMonth()+1;
		// 	let day = date.getDate();
		// 	let hour = date.getHours();
		// 	let min = date.getMinutes();
		// 	let second = date.getSeconds();
		// 	return this.name+year+'-'+month+'-'+day+' '+hour+':'+min+':'+second;
		// },
		// add(){
		// 	this.text++;
		// },
		// alert(){
		// 	alert('prevent default event');
		// },
		// logName(){
		// 	console.log('log your name');
		// },
		// logAge(){
		// 	console.log('log your age');
		// },
		// addA(){
		// 	console.log('add a')
		// 	return this.a+this.age;
		// },
		// addB(){
		// 	console.log('add b')
		// 	return this.b+this.age;
		// }
		clickMethod() {
			console.log("click method");
			// this.name = "name updated"
			this.count++;
		},


	},
	//如果需要相关的数据改变才调用方法，则使用计算属性（性能比放在Method中好，method中无论数据改变与否，都会调用）
	computed: {
		// addA(){
		// 	console.log('add a')
		// 	return this.a+this.age;
		// },
		// addB(){
		// 	console.log('add b')
		// 	return this.b+this.age;
		// },
		compClass() {
			return {
				changeColor: this.colorTrigger,
				changeLength: this.lengthTrigger
			}
		}

	},
	beforeCreate() {
		console.log('before create')
	},
	created() {
		console.log('created')
		//ES6解构的魅力
		let {
			obj: { name, info: { height } }
		} = this
		console.log('name:', name)
		console.log('height:', height)
		console.log('=========================================');
		console.log(this.arr1);
		console.log(this.arr2);
		let arr22 = [...this.arr2];
		let arr11 = [...this.arr1];

		let diffOffersArr = arr22.filter(x => arr11.every(y => JSON.stringify(x) !== JSON.stringify(y)));
		console.log(diffOffersArr);

		let arr = [];
		let flag = true;
		for(let i in arr11){
			
			for(let j in arr22){
				
				if(JSON.stringify(arr11[i]) != JSON.stringify(arr22[j])){
					flag = false;
					if(!flag && j == (arr22.length -1)){
						arr.push(arr11[i]);
						flag = true;
					}
				}else{
					break;
				}
				
				
			}
		}

		console.log(arr);
	},
	beforeMount() {
		console.log('before mount')
	},
	mounted() {
		console.log('mounted')
	},
	//该钩子在页面渲染的时候不会进行，只有发生data数据更新（并用于页面渲染了），才会调用一次。
	beforeUpdate() {
		console.log('beforeUpdate')
	},
	updated() {
		console.log('updated')
	}

});