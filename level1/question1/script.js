var myButton = document.getElementById('myButton');

myButton.addEventListener('click', function(event) {
    alert('hello world!')
    event.stopPropagation();
    console.log(event);
});