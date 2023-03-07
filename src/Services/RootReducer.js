

const initialState={
  employee:{},

 }

 export default function RootReducer(state=initialState,actions)
 {
    switch(actions.type)
    {
   
        case 'ADD_EMPLOYEE':
            console.log("ADD EMPLOYEE:",actions)
            state.employee[actions.payload[0]]=actions.payload[1]
        //    return ({state:employee.state})
     
        default:
            return state

    }
   
 } 