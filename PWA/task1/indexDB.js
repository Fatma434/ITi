
if(navigator.serviceWorker){
    alert("is supportwd")
    console.log("hello");
    navigator.serviceWorker.register('./SW.js').then(res=>{
        console.log(res)
    }).catch(err=>console.log(err))
    }else{
        alert("isn;t supportwd")
    }
    


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    let db;

    const request = indexedDB.open('TodoDB', 1);

    request.onupgradeneeded = (event) => {
        db = event.target.result;
        db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
    };

    request.onsuccess = (event) => {
        db = event.target.result;
        displayTodos();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        if (task.trim() !== '') {
            addTodo({ task });
            input.value = '';
        }
    });

    function addTodo(todo) {
        const transaction = db.transaction(['todos'], 'readwrite');
        const objectStore = transaction.objectStore('todos');
        const request = objectStore.add(todo);

        request.onsuccess = () => {
            displayTodos();
        };
    }

    function displayTodos() {
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }

        const objectStore = db.transaction(['todos'], 'readwrite').objectStore('todos');
        objectStore.openCursor().onsuccess = (event) => {
            const cursor = event.target.result;

            if (cursor) {
                const li = document.createElement('li');

                // Add an input field for editing
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = cursor.value.task;

                // Add save button for editing
                const saveButton = document.createElement('button');
                saveButton.textContent = 'Edit';
                saveButton.addEventListener('click', () => {
                    const updatedTask = inputField.value;

                    // Start a new transaction for the update operation
                    const updateTransaction = db.transaction(['todos'], 'readwrite');
                    const updateObjectStore = updateTransaction.objectStore('todos');

                    // Use the 'put' method to update the existing record
                    const updatedTodo = { id: cursor.value.id, task: updatedTask };
                    const updateRequest = updateObjectStore.put(updatedTodo);

                    updateRequest.onsuccess = () => {
                        // Handle successful update
                        console.log('Task updated successfully!');
                        displayTodos();
                    };

                    updateRequest.onerror = (e) => {
                        // Handle error during update
                        console.error('Error updating task:', e.target.error);
                    };

                    // Complete the transaction after the update
                    updateTransaction.oncomplete = () => {
                        console.log('Transaction completed.');
                    };
                });

                // Add delete button
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    const deleteTransaction = db.transaction(['todos'], 'readwrite');
                    const deleteObjectStore = deleteTransaction.objectStore('todos');

                    const deleteRequest = deleteObjectStore.delete(cursor.value.id);

                    deleteRequest.onsuccess = () => {
                        // Handle successful delete
                        console.log('Task deleted successfully!');
                        displayTodos();
                    };

                    deleteRequest.onerror = (e) => {
                        // Handle error during delete
                        console.error('Error deleting task:', e.target.error);
                    };

                    // Complete the transaction after the delete
                    deleteTransaction.oncomplete = () => {
                        console.log('Transaction completed.');
                    };
                });

                li.appendChild(inputField);
                li.appendChild(saveButton);
                li.appendChild(deleteButton);

                todoList.appendChild(li);

                cursor.continue();
            }
        };
    }
});
