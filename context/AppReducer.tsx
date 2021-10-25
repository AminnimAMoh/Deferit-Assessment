export const initialState = {
  previewState: false,
  url: "",
  pageNumber: 0,
};

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "preview/open_priview": {
      return {
        ...state,
        previewState: true,
        url: action.value,
      };
    }
    case "preview/close_priview": {
      return {
        ...state,
        previewState: false,
        url: "",
      };
    }
    case "paginattion/Increment-pageNumber": {
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    }
  }
};
