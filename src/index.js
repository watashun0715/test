const onClickAdd = () => {
  const inputText = document.getElementById("textAdd").value;
  document.getElementById("textAdd").value = "";

  // li作成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list_row";

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;
  // 完了ボタン生成
  const comp = document.createElement("button");
  comp.innerText = "完了";
  comp.addEventListener("click", () => {
    // TODO項目を未完了リストから削除
    deleteFromIncompleteList(comp.closest("li"));
    // 完了ボタンの親要素(div)を取得
    const addTarget = comp.parentNode;
    // TODO項目のテキスト内容を取得
    const text = addTarget.firstElementChild.innerText;
  });

  // 削除ボタン生成
  const del = document.createElement("button");
  del.innerText = "削除";
  del.addEventListener("click", () => {
    // 押下された削除ボタンの親要素(div)を未完了リストから削除する。
    deleteFromIncompleteList(del.closest("li"));
  });

  div.appendChild(p);
  div.appendChild(comp);
  div.appendChild(del);

  li.appendChild(div);

  document.getElementById("incomplete_list").appendChild(li);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

document
  .getElementById("buttonAdd")
  .addEventListener("click", () => onClickAdd());
