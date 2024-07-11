import * as React from "react";

const placeholder = () => {};

export default function useList(defaultList = []) {
  const [list, setList] = React.useState(defaultList);

  const set = list => {
    setList(list)
  }

  const push = val => setList(list => [...list, val]);

  const removeAt = idx => setList(list => {
    list.splice(idx, 1)
    return list;
  });

  const insertAt = (idx, val) => setList(list => {
    list.splice(idx, 0, val);
    return list;
  });

  const updateAt = (idx, val) => setList(list => {
    list.splice(idx, 1, val);
    return list;
  });

  const clear = () => setList([]);

  return [list, { set, push, removeAt, insertAt, updateAt, clear }];
}
