const add_btn = document.querySelector(".todo-add_btn");
const ul = document.querySelector(".todo-list_container");
const input = document.querySelector(".todo-ipt");
const selectDelete = document.querySelector(".selectDelete");
const selectAll = document.querySelector(".selectAll");

add_btn.addEventListener("click", (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  li.className = "todo-list_item";

  const listCheckBtn = document.createElement("input");
  listCheckBtn.setAttribute("type", "checkbox");
  listCheckBtn.className = "todo-listCheck_btn";

  const listContent = document.createElement("p");
  listContent.className = "todo-list_content";
  listContent.textContent = input.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "todo-listDelete_btn";
  deleteBtn.textContent = "삭제";

  deleteBtn.addEventListener("click", (e) => {
    console.log(li);
    ul.removeChild(li);
  });

  li.appendChild(listCheckBtn);
  li.appendChild(listContent);
  ul.appendChild(li);
  li.appendChild(deleteBtn);
});

selectDelete.addEventListener("click", () => {
  const childrenArray = Array.from(ul.children);  
  childrenArray.forEach((child) => {
    if (child.children[0].checked === true) {
      ul.removeChild(child);
    }
  });
});

selectAll.addEventListener("click", (e) => {
  const childrenArray = Array.from(ul.children);
  if (selectAll.checked) {
    console.log("체크함")
    childrenArray.forEach((child) => {
      child.children[0].checked = true;
    });
  }else{
    childrenArray.forEach((child) => {
      child.children[0].checked = false;
    });
  }
});
