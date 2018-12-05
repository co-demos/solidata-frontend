

export const state = () => ({

	msg 			: null,
	alert			: {}, 
	edit_mode		: false,

	parameters 		:  {
		page 		: 1,
		per_page   	: 0, //5, // choices=[0, 2, 5, 10, 20, 30, 40, 50, 100],
		cardSizes	: "xs12 sm6 md4"
	},

	rowsPerPageItems: [ 3, 6, 9, 12 ],
	pagination: {
		rowsPerPage: 6
	},

	query_current 	: null,

	current_file		: '',
	current_filename	: 'no filename',
	csv_sep				: ',',

	current 		: {},
	current_new 	: {

		"infos"			: { 
			"title"			: "your new dataset input", 
			"description"	: null,
			"licence"		: "CC BY-SA"
		},
		"public_auth"	: { 
			"open_level_edit": "private", 
			"open_level_show": "commons" 
		}, 
		"specs": { 
			// "doc_type"	: "dsi" 
			"src_link"		: null,
			"src_type"		: "xls",
			"src_parser"	: "/path/of/your/list/of/records",
		}, 
		// "log": { 
		// 	"created_at": "2018-11-20T14:20:47.661000+00:00", 
		// 	"created_by": "5b55fee90a828659a93e9fc6" 
		// }, 
		// "translations": [
		// ], 
		// "data_raw": { 
		// 	"f_code": "", 
		// 	"f_object": "", 
		// 	"f_type": "text", 
		// 	"f_comments": null, 
		// 	"f_is_required": false 
		// }, 
		// "modif_log": [
		// ], 
		// "datasets": { 
		// 	"tag_list": [] 
		// }, 
		// "_id": "5bf4183f0a8286180b53183c", 
		// "team": [ 
		// 	{ 
		// 		"oid_usr": "5b55fee90a828659a93e9fc6", 
		// 		"edit_auth": "owner", 
		// 		"added_at": "2018-11-20T14:20:47.661000+00:00", 
		// 		"added_by": "5b55fee90a828659a93e9fc6" 
		// 	} 
		// ], 
		// "uses": { 
		// 	"by_usr": [ 
		// 		{ 
		// 			"used_by": "5b55fee90a828659a93e9fc6", 
		// 			"used_at": [ "2018-11-20T14:20:47.661000+00:00" ] 
		// 		} 
		// 	], 
		// 	"by_dmt": [

		// 	] 
		// }
	},

	list_query 		: null,
	list 			: [],
	list_counts 	: null
	
})

export const getters = {

}

export const mutations = {

	set_list (store, data) {
		
		console.log("\n... store/dsi : set_list...")

		store.msg 			= data.msg
		store.list 			= data.data
		store.list_query 	= data.query_resume
		store.list_counts 	= data.counts

	},

	set_current (store, data) {
		console.log("\n... store/dsi : set_current...")
		console.log("... store/dsi - data : ", data )
		console.log("... store/dsi - data['data'] : ", data["data"] )
		store.current 		= data["data"]
	},

	// set a temporary new 
	set_current_new (store, data ) {
		console.log("\n... store/dsi : set_current_new...")
		console.log("... store/dsi - data : ", data )

		if (data.update_current == false ) {
			store.current_new[data.parentField][data.subField] = data.item_data
		}
		else {
			store.current[data.parentField][data.subField] = data.item_data
		}

	},

	// set a temporary new file
	set_current_file (store, file_data) {
		console.log("\n... store/dsi : set_current_file...")
		console.log("... store/dsi - file_data : ", file_data )

		store.current_file 				= file_data 
		store.current_filename 			= file_data.name
		// store.csv_sep 					= file_data.csv_sep

	},

	// set a temporary new file
	set_current_separator (store, csv_separator) {
		console.log("\n... store/dsi : set_current_separator...")
		console.log("... store/dsi - csv_separator : ", csv_separator )

		store.csv_sep 					= csv_separator

	},
		
	reset_current_file(store) {
		console.log("\n... store/dsi : reset_current_file...")

		store.current_file 				= ''
		store.current_filename 			= 'no filename'
		// store.current_new.infos.title 	= 'new dataset'
	},

	
}

export const actions = {

	dispatch_current (store, data) {
		console.log("\n... store/dsi : dispatch_current...")
		store.commit(`set_current`, data);
	},

	// getList ({commit, state, rootState}) {
	// 	console.log("\n... store/dsi : getList...");
	// 	console.log("... store/dsi : parameters : ", state.parameters);
	// 	const config = { 
	// 		headers : { 'Authorization' : rootState.auth.access_token },
	// 		params	: state.parameters
	// 	} ;

	// 	console.log("... store/dsi : config : ", config );

	// 	return this.$axios.$get('dsi/infos/list', config )
	// 	  .then(response => {
	// 		console.log("... store/dsi : response : ", response);
	// 		commit('set_list', response);
	// 		return response
	// 	})
	// },

	// async getItem ({commit, state, rootState}, item_id) {
	// 	console.log("\n... store/dmt : getItem...");
	// 	var config = { 
	// 		headers : { 'Authorization' : rootState.auth.access_token },
	// 	}
	// 	console.log("... store/dmt : config : ", config );
		
	// 	return this.$axios.$get('dmt/infos/get_one/'+item_id , config )
	// 	  .then(response => {
	// 		console.log("... store/dmt : response : ", response);
	// 		commit('set_current', response);
	// 		return response
	// 	  })
	// 	  .catch(error => {
	// 		console.log(error.response)
	// 		return error
	// 	  })
	// },

}