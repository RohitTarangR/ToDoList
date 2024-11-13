const add_task = document
  .querySelector(".add_task")
  .addEventListener("click", addTask);

function addTask() {
  const task_input = document.querySelector(".task_input");
  task_input.focus();
  const taskTrimText = task_input.value.trim(); // trim removes white spaces from first and last

  if (taskTrimText === "") {
    const errorMsgDiv = document.querySelector(".err")
    errorMsgDiv.textContent = "Please enter your task first!!"
    setTimeout(() => {
      errorMsgDiv.textContent = ""
    }, 1000);
  } else {
    const mainTasks = document.querySelector(".main_tasks");

    const taskList = document.createElement("div");
    taskList.className = "list";

    // creating task text
    const taskItem = document.createElement("div");
    taskItem.className = "text";

    const inputText = document.createElement("p");
    inputText.textContent = taskTrimText;

    //creating task buttons
    const taskButtons = document.createElement("div");
    taskButtons.className = "btns";

    const EditBtn = document.createElement("button");
    EditBtn.className = "EditBtn";
    EditBtn.textContent = "Edit";

    EditBtn.addEventListener("click", () => {
      if (completeBtn.textContent !== "Not Done") {
        if (EditBtn.textContent === "Edit") {
          const textElement = taskItem.querySelector("p");
          const inputElement = document.createElement("input");
          inputElement.type = "text";
          inputElement.value = textElement.textContent;
          taskItem.replaceChild(inputElement, textElement);
          inputElement.focus();
          taskItem.style.padding = "0";
          EditBtn.textContent = "Update";
        } else {
          const inputElement = taskItem.querySelector("input");
          const newP = document.createElement("p");
          newP.textContent = inputElement.value;
          taskItem.replaceChild(newP, inputElement);
          EditBtn.textContent = "Edit";
        }
      }
    });

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.textContent = "Done";

    completeBtn.addEventListener("click", () => {
      if (
        completeBtn.textContent === "Done" &&
        EditBtn.textContent === "Edit"
      ) {
        taskItem.style.backgroundColor = "#74ec74";
        taskItem.style.color = "#ffffff";
        completeBtn.style.backgroundColor = "#74ec74";
        completeBtn.style.color = "#ffffff";
        completeBtn.textContent = "Not Done";
        EditBtn.style.opacity = 0.4;
        EditBtn.style.backgroundColor = "blue";
        EditBtn.style.color = "white";
        deleteBtn.style.opacity = 0.4;
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        taskItem.style.padding = "10px 20px";
      } else {
        taskItem.style.backgroundColor = "";
        taskItem.style.color = "";
        completeBtn.style.backgroundColor = "";
        completeBtn.style.color = "";
        completeBtn.textContent = "Done";
        EditBtn.style.opacity = 1;
        EditBtn.style.backgroundColor = "";
        EditBtn.style.color = "";
        deleteBtn.style.opacity = 1;
        deleteBtn.style.backgroundColor = "";
        deleteBtn.style.color = "";
        taskItem.style.padding = "0";
      }
    });

    const deleteBtn = document.createElement("button");

    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Remove";

    deleteBtn.addEventListener("click", () => {
      if (
        completeBtn.textContent === "Done" &&
        EditBtn.textContent === "Edit"
      ) {
        mainTasks.removeChild(taskList);
      }
    });

    taskItem.appendChild(inputText);
    taskList.appendChild(taskItem);
    taskButtons.appendChild(EditBtn);
    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);
    taskList.appendChild(taskButtons);

    mainTasks.appendChild(taskList);

    task_input.value = "";
  }
}
