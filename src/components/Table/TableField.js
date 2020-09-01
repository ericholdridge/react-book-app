/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TableField = ({ fieldName, settingsField, handleRemoveBook }) => {
  return (
    <div css={styles} className="tableField">
      {fieldName}
      {settingsField && (
        <div className="icons">
          <i className="far fa-edit"></i>
          <i onClick={handleRemoveBook} className="fas fa-trash"></i>
        </div>
      )}
    </div>
  );
};

const styles = css`
  width: 100%;
  .icons {
    i {
      cursor: pointer;
      &:nth-child(1) {
        margin: 0 10px 0 0;
      }
    }
  }
`;

export default TableField;
