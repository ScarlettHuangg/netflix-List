const initState = {
    myList: [
      {
        title: "Futurama",
        id: 1,
        img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
      },
  
      {
        title: "The Interview",
        id: 2,
        img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
      },
  
      {
        title: "Gilmore Girls",
        id: 3,
        img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
      }
    ],
    recommendations: [
      {
        title: "Family Guy",
        id: 4,
        img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
      },
      {
        title: "The Croods",
        id: 5,
        img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
      },
      {
        title: "Friends",
        id: 6,
        img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
      }
    ]
  };
  
  const myfavorite = (state = initState, action) => {
    switch (action.type) {
      case "ADD_MOVIE":
        let currentadd = [...state.myList, action.data];
        let recomList = state.recommendations.filter(element => element.id !== action.data.id);
        return {
          ...state,
          myList:currentadd,
          recommendations:recomList
        }
      case "DELETE_MOVIE":
        let currentdel = state.myList.filter(element => element.id !== action.data.id);
        let recom = [...state.recommendations, action.data]
        return {
          ...state,
          myList:currentdel, 
          recommendations:recom
        };
      default:
        return state;
    }
  };
  
  export default myfavorite;
  