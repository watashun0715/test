const onClickAdd = () => {
  const inputText = document.getElementById("textAdd").value;
  alert(inputText);
};

document
  .getElementById("buttonAdd")
  .addEventListener("click", () => onClickAdd());
