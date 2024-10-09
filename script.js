function add() {
    // Get the input field element by its ID
    var input = document.getElementById("input")

    // Get the unordered list element (to-do list container) by its ID
    var ul = document.getElementById("listcontainer")

    // Create a new 'li' element to hold the to-do item
    var li = document.createElement("li")

    // Create a 'span' element to display the task text
    var span = document.createElement('span')

    // Create a 'button' element for deleting the task
    var button = document.createElement("button")

    // Set the text content of the span element to the value entered in the input field
    span.textContent = input.value

    // Add a click event listener to the span to toggle the 'completed' class (for marking the task as done)
    span.addEventListener('click', function() {
        span.classList.toggle('completed') // Toggle a CSS class to strike through or highlight the task
    })

    // Set the button's text to 'Delete'
    button.textContent = "Delete"

    // Add a click event listener to the button to remove the corresponding list item (task)
    button.addEventListener('click', function(event) {
        // Remove the parent 'li' element of the button (the task item) from the list
        event.target.parentNode.remove()
    })

    // Append the span (task text) to the 'li' element
    li.append(span)

    // Append the delete button to the 'li' element
    li.append(button)

    // Append the 'li' element to the unordered list (the to-do list container)
    ul.append(li)

    // Clear the input field after adding the task
    input.value = ""

    // Focus the input field so the user can start typing a new task immediately
    input.focus()
}
