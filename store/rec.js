

export const state = () => ({

	msg 			: null,
	alert			: {}, 
	edit_mode		: false,

	parameters 		:  {
		page 		: 1,
		per_page   	: 5 // choices=[2, 5, 10, 20, 30, 40, 50, 100],
	},

	query_current 	: null,
	current 		: {},
	
	list_query 		: null,
	list_counts 	: null,
	
	// list 			: [],
	list : [
		{ title: 'Rec one', 	id:"fgsthezr" },
		{ title: 'Rec two',		id:"getyrnb" },
		{ title: 'Rec three',	id:"nbzcqs" }
	  ]
})

export const getters = {

}

export const mutations = {

}

export const actions = {

}