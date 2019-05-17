const initalState = [
	{
		id: 1,
		name: "iPhone 6 plus",
		price: 400,
		status: false
	},
	{
		id: 2,
		name: "iPhone 7 plus",
		price: 500,
		status: true
	},
	{
		id: 3,
		name: "iPhone 8 plus",
		price: 700,
		status: true
	}
];

const products = (state = initalState, action)=>{
	switch(action.type){
		default:
			return [...state]; 
	}
}
export default products;