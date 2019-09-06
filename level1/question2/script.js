const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url).then(function(response) {
    console.log(response);

    response.json().then(function(data) {

        for (var i = 0; i < data.length; i++) {
            var todoItem = data[i];

            console.log(data);

            document.getElementById('todos').innerHTML += '<div id="todos"><div class="todo-item"><p>Todo title</p></div></div>';
            document.getElementById('todos').innerHTML += "<span>UserId: " + todoItem.userId + "</span>";
            document.getElementById('todos').innerHTML += "<span>Id:   " + todoItem.id + "CM</span>";
            document.getElementById('todos').innerHTML += "<span>Title: " + todoItem.title + "KG</span>";
            document.getElementById('todos').innerHTML += "<span>Completed:   " + todoItem.completed + "</span>";
        }

    })
})