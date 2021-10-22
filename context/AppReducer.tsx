export const initialState={
    previewState: false,
    url: ''
}

export const AppReducer=(state: any, action:any)=>{
    switch (action.type){
        case "preview/open_priview":{
            return {
                ...state,
                previewState: true
            }
        }
        case "preview/close_priview":{
            return {
                ...state,
                previewState: true
            }
        }
    }
}