







//SET GLOBAL VARIABLES ABOVE
//---------------------------------------------------------------------------------------------------------------
//DEFINE UTILITY FUNCTIONS BELOW



// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    return rightNow;
}




//DEFINE UTILITY FUNCTIONS ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW


// psuedocode

// create everything from jquery inside of class container
// a for loop that iterates for all instances


function createTimeblocks() {
        for (var i = 0; i < 9; i++) {
            var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
            timeBlockContainer = $('.container');
            var createTimeBlock = $('<div>').addClass('.time-block d-flex').attr('id', 'timeblock' + i);
            var createHour = $('<div>').addClass('.hour').text(hours.at(i));
            var createTextInput = $('<input>').addClass('.textarea');
            createSaveButton = $('<button>').addClass('.saveBtn');
            timeBlockContainer.append(createTimeBlock);
            createTimeBlock.append(createHour, createTextInput, createSaveButton);

        }
    }

    createTimeblocks();





//DEFINE THE PRIMARY FUNCTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW









//LISTEN AND TAKE ACTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW





















//------------------------------------------------------------------------------------------------------------------
//NOTES BELOW HERE
//------------------------------------------------------------------------------------------------------------------



// Javascript
//     SELECT BY ID
//         document.querySelector('#someIDHere');
//     SELECT BY CLASS
//         document.querySelector('.someClassHere');
//     SELECT CHILDREN OF
//         document.querySelector('someSelectorHere).children[0].children[0];
//     CREATE DOM ELEMENT
//         document.createElement("someTagHere");
//     ASSIGN A CONTAINER ELEMENT
//         document.querySelector("someSelectorHere");
//     ADD ATTRIBUTE (CLASS)
//         document.querySelector("someSelectorHere").setAttribute('.someClassHere');
//     ADD TEXT
//         document.querySelector("someSelectorHere").setAttribute('.someClassHere').textContent;
//     RANDOM CONSOLIDATED EXAMPLE
//         document.querySelector("someSelectorHere").setAttribute('.someClassHere').textContent = 'some text';
//     EVENT LISTENERS
//         document.querySelector("someSelectorHere").addEventListener('click', function () {
//             function goes here
//         })


// jQuery
//     SELECT BY ID
//         $('#someIDhere');
//     SELECT BY CLASS
//         $('.someClassHere');
//     SELECT CHILDREN OF
//         $('.someClassHere').child(0).child(0);
//     CREATE DOM ELEMENT
//         $('<someTagHere>');
//     ASSIGN A CONTAINER ELEMENT
//         $('someSelectorHere');
//     ADD ATTRIBUTE (CLASS)
//         $('someSelectorHere').addClass('someClassAssignmentHere');
//     ADD TEXT
//         $('someSelectorHere').addClass('someClassAssignmentHere').text('someTextHere');
//     RANDOM CONSOLIDATED EXAMPLE
//         $('<td>').addClass('p-2').text(type);


















// TO BE ORGANIZED LATER



//   // You can also chain methods onto new lines to keep code clean
//   var totalTdEl = $('<td>').addClass('p-2').text('$' + totalEarnings);

//   var deleteProjectBtn = $('<td>')
//     .addClass('p-2 delete-project-btn text-center')
//     .text('X');

//   // By listing each `<td>` variable as an argument, each one will be appended in that order
//   projectRowEl.append(
//     projectNameTdEl,
//     projectTypeTdEl,
//     rateTdEl,
//     dueDateTdEl,
//     daysLeftTdEl,
//     totalTdEl,
//     deleteProjectBtn
//   );

//   projectDisplayEl.append(projectRowEl);
//   //modal (hide)
//   projectModalEl.modal('hide');
// }

// function calculateTotalEarnings(rate, days) {
//   var dailyTotal = rate * 8;
//   var total = dailyTotal * days;
//   return total;
// }

// function handleDeleteProject(event) {
//   console.log(event.target);
//   var btnClicked = $(event.target);
//   btnClicked.parent('tr').remove();
// }

// // handle project form submission
// function handleProjectFormSubmit(event) {
//   event.preventDefault();

//   var projectName = projectNameInputEl.val().trim();
//   var projectType = projectTypeInputEl.val().trim();
//   var hourlyRate = hourlyRateInputEl.val().trim();
//   var dueDate = dueDateInputEl.val().trim();

//   printProjectData(projectName, projectType, hourlyRate, dueDate);

//   projectFormEl[0].reset();
// }

// projectFormEl.on('submit', handleProjectFormSubmit);
// projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
// dueDateInputEl.datepicker({ minDate: 1 });

// setInterval(displayTime, 1000);