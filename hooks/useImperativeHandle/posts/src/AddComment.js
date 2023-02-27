import { forwardRef } from 'react';

const AddComment = forwardRef((_props, ref) => {
  return <input placeholder="Add comment..." ref={ref} />;
});

export default AddComment;
