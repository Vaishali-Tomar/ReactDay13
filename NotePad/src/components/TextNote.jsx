import  "./TextNote.css";

function TextNote({ state, dispatch }) {
  const handleTextChange = (e) => {
    dispatch({
      type: "UPDATE_TEXT",
      payload: e.target.value,
    });
  };
  return (
    <div className="note">
      <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
      <h2>Text Area</h2>
      <textarea className="text-name"
        name="note-pad"
        rows="10"
        cols="40"
        placeholder="enter your text"
        value={state.text}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
}

export default TextNote;