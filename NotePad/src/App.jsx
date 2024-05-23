import "./App.css";
import TextNote from "./components/TextNote";
import UtilityBtn from "./components/UtilityBtn";
import Summary from "./components/Summary";
import { useReducer } from "react";

const initialState = {
  text: "",
  numWords: 0,
  numChars: 0,
  readTime: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      const updatedNumberOfWords = action.payload
        .split(" ")
        .filter((word) => word.trim().length > 0).length;
      return {
        ...state,
        numChars: action.payload.length,
        numWords: updatedNumberOfWords,
        readTime: 0.008 * updatedNumberOfWords,
        text: action.payload,
      };
    case "CONVERT_UPPCASE":
      return {
        ...state,
        text: state.text.toUpperCase(),
      };
    case "CONVERT_LOWERCASE":
      return {
        ...state,
        text: state.text.toLowerCase(),
      };
    case "CLEAR_TEXT":
      return initialState;
    case "COPY_TEXT":
      navigator.clipboard.writeText(state.text);
      return state;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <TextNote state={state} dispatch={dispatch} />
      <UtilityBtn dispatch={dispatch} />
      <Summary state={state} />
    </>
  );
}

export default App;
