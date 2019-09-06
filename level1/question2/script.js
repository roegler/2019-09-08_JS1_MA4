const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url).then(function(response) {
    console.log(response);

    response.json().then(function(data) {

        for (var i = 0; i < data.length; i++) {
            var todoItem = data[i];

            var titleNode = document.createElement('p');
            titleNode.innerHTML = todoItem.title;
            document.getElementById('todos').appendChild(titleNode);
        }

    })
})