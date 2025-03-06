function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    this.parentNode.removeChild(this);
  };

  // Toggle completed status on click
  li.onclick = function (e) {
    if (e.target !== deleteBtn) {
      this.classList.toggle("completed");
    }
  };

  // Append delete button to list item
  li.appendChild(deleteBtn);

  // Add list item to task list
  document.getElementById("taskList").appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Allow adding task with Enter key
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
