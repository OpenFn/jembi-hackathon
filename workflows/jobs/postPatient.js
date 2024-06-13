// language-http
post("Patient", {body: state.data,  
 headers: {'content-type': 'application/json'}, 
 //parseAs: 'json',
 }
//**NOTE: later I added below callback to manually write error object to state **//
//  , state => {
//   //console.log('response ::', JSON.stringify(state.response, null,2));
//   state.data.response = state.response; 
//   return state; 
//  }
)
