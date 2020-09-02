/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Form = ({
  title,
  setTitle,
  author,
  setAuthor,
  isbn,
  setISBN,
  currentBookId,
  handleSubmit,
  cancelEdit,
}) => {
  return (
    <form css={styles} onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input
        type="text"
        autoFocus
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="">Author</label>
      <input
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="">ISBN#</label>
      <input
        type="number"
        required
        value={isbn}
        onChange={(e) => setISBN(e.target.value)}
      />
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
      {currentBookId !== null && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    padding: 10px 0 4px 0;
  }
  input {
    height: 35px;
    padding: 0 0 0 6px;
  }
`;

export default Form;
