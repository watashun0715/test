const onClickAdd = () => {
  // 追加TODO項目テキスト取得
  const inputText1 = document.getElementById("textAdd").value;
  // 追加欄初期化
  document.getElementById("textAdd").value = "";
  if (inputText1 !== "")
    // 未完了リスト追加関数呼び出し
    createIncompleteList(inputText1);
};

// 未完了リストからTODO項目削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};
// 未完了リストにTODO項目追加
const createIncompleteList = (text) => {
  // li作成
  const li1 = document.createElement("li");

  // div生成
  const div1 = document.createElement("div");
  div1.className = "list_row";

  // p生成
  const p1 = document.createElement("p");
  p1.innerText = text;

  // 完了ボタン生成
  const comp = document.createElement("button");
  comp.innerText = "完了";

  // 完了ボタンイベント追加
  comp.addEventListener("click", () => {
    // TODO項目を未完了リストから削除
    deleteFromIncompleteList(comp.closest("li"));

    // 完了ボタンの親要素(div)を取得
    const addTarget = comp.parentNode;

    // TODO項目のテキスト内容を取得
    const inputText2 = addTarget.firstElementChild.innerText;

    // TODO項目のdivの子要素初期化
    addTarget.textContent = null;

    // li生成
    const li2 = document.createElement("li");

    // p作成
    const p2 = document.createElement("p");
    p2.innerText = inputText2;

    // 戻すボタン作成
    const buttonBack = document.createElement("button");
    buttonBack.innerText = "戻す";

    // 戻すボタンイベント追加
    buttonBack.addEventListener("click", () => {
      // TODO項目を完了リストから削除
      document
        .getElementById("complete_list")
        .removeChild(buttonBack.closest("li"));
      // テキストを取得
      const inputText3 = buttonBack.parentNode.firstElementChild.innerText;

      //未完了リスト追加関数呼び出し
      createIncompleteList(inputText3);
    });

    addTarget.appendChild(p2);
    addTarget.appendChild(buttonBack);

    li2.appendChild(addTarget);

    document.getElementById("complete_list").appendChild(li2);
  });

  // 削除ボタン生成
  const del = document.createElement("button");
  del.innerText = "削除";

  del.addEventListener("click", () => {
    // 押下された削除ボタンの親要素(div)を未完了リストから削除する。
    deleteFromIncompleteList(del.closest("li"));
  });

  div1.appendChild(p1);
  div1.appendChild(comp);
  div1.appendChild(del);

  li1.appendChild(div1);

  document.getElementById("incomplete_list").appendChild(li1);
};

document
  .getElementById("buttonAdd")
  .addEventListener("click", () => onClickAdd());
