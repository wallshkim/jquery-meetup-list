$(document).ready(readyNow);

let totalMeetups = 3;

function readyNow() {
    console.log('jquery working!');
    $('#addMeetupButton').on('click', handleClick);
    $('#tableBody').on('click', '#deleteButton', handleDelete)
}

function handleClick(){
    console.log('I was clicked');
    // get input values
    let newGroupInput = $('#newGroupInput').val();
    let meetupDateInput = $('#meetupDateInput').val();
    let deleteButton = '<td><button id="deleteButton" type="button">Delete</button></td>';
    // append values to table body
    $('#tableBody').append(`
    <tr>
        <td>${newGroupInput}</td>
        <td>${meetupDateInput}</td>
        <td>${deleteButton}</td>
    </tr>`);
    // increase totalMeetups by 1
    totalMeetups ++;
    // add count of total meetups to total meetups h2
    $('#totalMeetupsOutput').text(totalMeetups);
}


function handleDelete(){
    console.log('in handleDelete');
    let newTableRow = $(this).closest('tr');
    $(newTableRow).remove();
}
