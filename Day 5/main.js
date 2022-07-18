class Task {
    
    constructor(task) {
      this.name = task;
    }
  
    static fromJSON(json) {
      return new Task(
        json.name,
      );
    }
  }

    class UI {
        constructor() {
            this.form = document.getElementById('form');
        
            this.name = document.getElementById('task-input');
        
            this.tableBody = document.getElementById('table-body');
        
            this.form.addEventListener("submit", (e) => this.onFormSubmit(e));
        
            this.tasks = [];
            this.loadTasksFromLocalStorage();
            this.renderTaskTable();
    }

    onFormSubmit(e) {
        e.preventDefault();
    
        const task = new Task(
          this.name.value,
        );
    
        this.tasks.push(task);
    
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
      }

    renderTaskTable() {
        this.tableBody.innerHTML = '';

        for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];

        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
    }
  }

    createTaskTableRow(task) {
        const tr = document.createElement('tr');
        const tdTask = document.createElement('td');
        const tdCompleted = document.createElement('td');
        const tdActions = document.createElement('td');

        tdTask.innerHTML = task.name;

        const checkBox = this.createCheckBox(task);
        tdCompleted.appendChild(checkBox);

        const removeButton = this.createRemoveTaskButton(task);
        tdActions.appendChild(removeButton);

        tr.appendChild(tdTask);
        tr.appendChild(tdCompleted);
        tr.appendChild(tdActions);

        return tr;
    }

    createCheckBox(task) {
        const checkBox = document.createElement('input');
        checkBox.type= "checkbox";
        checkBox.innerHTML = ''
        
        return checkBox;
    }

    createRemoveTaskButton(task) {
        const button = document.createElement('button');

        button.setAttribute('class', 'btn btn-danger btn-sm');
        button.innerHTML = 'X'
        button.addEventListener('click', () => this.onRemoveTaskClicked(task));

        return button;
    }

    onRemoveTaskClicked(task) {
        this.tasks = this.tasks.filter((x) => {
        return task.name !== x.name;
        });

        this.saveTasksToLocalStorage();
        this.renderTaskTable();
    }

    saveTasksToLocalStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
    }

    loadTasksFromLocalStorage() {
        const json = localStorage.getItem('tasks');
        if (json) {
        const taskArr = JSON.parse(json);
        this.tasks = taskArr.map(x => Task.fromJSON(x));
        }
    }
    }

    const ui = new UI();
  
