/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import TableField from "./TableField";

const Table = ({ books, handleRemoveBook, editBook }) => {
  return (
    <div css={styles} className="table">
      <div className="tableHeading">
        <TableField fieldName="Title" />
        <TableField fieldName="Author" />
        <TableField fieldName="ISBN#" />
        <TableField fieldName="Settings" />
      </div>
      {books.map((book) => (
        <div key={book.bookId} className="tableRow">
          <TableField fieldName={book.bookTitle} />
          <TableField fieldName={book.bookAuthor} />
          <TableField fieldName={book.bookISBN} />
          <TableField
            settingsField
            handleRemoveBook={() => handleRemoveBook(book.bookId)}
            editBook={() => editBook(book)}
          />
        </div>
      ))}
    </div>
  );
};

const styles = css`
  width: 100%;
  .tableHeading,
  .tableRow {
    display: flex;
    justify-content: space-between;
    text-align: center;
    background: orange;
    padding: 20px 0;
    margin: 20px 0 0 0;
  }
  .tableRow {
    background: #fff;
    border: 1px solid #ccc;
    border-top: none;
  }
`;

export default Table;
