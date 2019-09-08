const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url).then(function(response) {
    console.log(response);

    response.json().then(function(data) {

        for (var i = 0; i < data.length; i++) {
            var todoItem = data[i];

            console.log(data);

            if (todoItem.completed) {
                document.getElementById('todos').innerHTML += '<div id="todos"><div class="todo-item completed"><p><strong> ' + todoItem.title + ' </strong></p><p>UserId: ' + todoItem.userId + ' </p><p>ID: ' + todoItem.id + ' </p><p> Completed? ' + todoItem.completed + ' </p></div></div>';

            } else {
                document.getElementById('todos').innerHTML += '<div id="todos"><div class="todo-item"><p><strong> ' + todoItem.title + ' </strong></p><p>UserId: ' + todoItem.userId + ' </p><p>ID: ' + todoItem.id + ' </p><p> Completed? ' + todoItem.completed + ' </p></div></div>';

            }
        }

    })
})