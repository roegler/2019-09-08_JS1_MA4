var myButton = document.getElementById('myButton');

myButton.addEventListener('click', function(event) {
    alert('Success!')
    event.stopPropagation();
    console.log(event);
});