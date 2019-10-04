$(document).ready(readyNow);

function readyNow() {
    console.log('jquery working!');
    $('#addMeetupButton').on('click', handleClick);
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

}