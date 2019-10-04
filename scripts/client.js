$(document).ready(readyNow);

let totalMeetups = 3;

function readyNow() {
    console.log('jquery working!');
    // add event listener for addMeetupButton
    $('#addMeetupButton').on('click', handleAddGroupClick);
    // add event listener for deleteButton
    $('#tableBody').on('click', '.deleteButton', handleDelete)
}

function handleAddGroupClick(){
    console.log('I was clicked');
    // get input values
    let newGroupInput = $('#newGroupInput').val();
    let meetupDateInput = $('#meetupDateInput').val();
    let deleteButton = '<button class="deleteButton" type="button">Delete</button>';
    // append values to table body
    $('#tableBody').append(`
    <tr>
        <td>${newGroupInput}</td>
        <td>${meetupDateInput}</td>
        <td>${deleteButton}</td>
    </tr>`);
    // increase totalMeetups by 1
    totalMeetups += 1;
    // add count of total meetups to total meetups h2
    $('#totalMeetupsOutput').text(totalMeetups);
    // clear inputs
    $('#newGroupInput').val('');
    $('#meetupDateInput').val('');
}

function handleDelete(){
    console.log('in handleDelete');
    // get closest tr
    let newTableRow = $(this).closest('tr');
    // Remove entire tr element
    $(newTableRow).remove();
    // Decrement totalMeetups
    totalMeetups --;
    // Replace totalMeetupsOutput text with new value
    $('#totalMeetupsOutput').text(totalMeetups);
}
