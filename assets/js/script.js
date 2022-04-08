





var secondsLeftToday;
var secondsToEOD;
var blockColorClass;

//SET GLOBAL VARIABLES ABOVE
//---------------------------------------------------------------------------------------------------------------
//DEFINE UTILITY FUNCTIONS BELOW

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    // var hourNow = moment().format('H');
    var hourNow = 12;
    var minNow = moment().format('m');
    var secNow = moment().format('s');
    var ampmNow = moment().format('a');
    secondsLeftToday = (((24 - hourNow) * 60 * 60) - (minNow * 60) - secNow);
    $('#currentDay').text(rightNow);
    window.setTimeout("displayTime()", 1000);
}


//Get storage
function retrieveStoredArray(storedDataName) {
    const forceArray = (v) => [].concat(v).map(name => name);
    var storedArray = forceArray(JSON.parse(localStorage.getItem(storedDataName)));
    return storedArray;
}

//Update storage
function updateStoredArray(storedDataName, addData) {
    const forceArray = (v) => [].concat(v).map(name => name);
    var storedArray = JSON.parse(localStorage.getItem(storedDataName));
    if (typeof storedArray === 'string' && storedArray.length > 0) {
        storedArray = forceArray(JSON.parse(localStorage.getItem(storedDataName)));
        var combinedArray = storedArray.push(addData);
        var backToStorage = JSON.stringify(combinedArray);
    } else if (typeof storedarray === 'object') {
        var combinedArray = storedArray.push(addData);
        var backToStorage = JSON.stringify(combinedArray);
    } else {
        var backToStorage = JSON.stringify(forceArray(addData));
    }
    localStorage.setItem(storedDataName, backToStorage);
    return console.log('Stored ' + storedDataName + ' as: ' + backToStorage)
}

//DEFINE UTILITY FUNCTIONS ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW

// psuedocode
// create everything from jquery inside of class container
// a for loop that iterates for all instances


function createTimeblocks() {
    //populate the content
            var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
        for (var i = 0; i < hours.length; i++) {

            secondsToEOD = ((24 - (i + hours.length)) * 60 * 60);
            if (secondsLeftToday < (secondsToEOD) && secondsLeftToday > (secondsToEOD - 1200)) {
               var blockColorClass = 'present';
            } else if (secondsLeftToday > secondsToEOD) {
               var blockColorClass = 'future';
            } else if (secondsLeftToday < (secondsToEOD + 1200)) {
                var blockColorClass = 'past';
            }

            var createTimeBlock = $('<div>').addClass('time-block row d-flex col-12').attr('id', 'timeblock' + i);
            var createHour = $('<div>').addClass('hour col').text(hours.at(i));
            var createTextInput = $('<input>').addClass('textarea ' + blockColorClass + ' col-8')
            var addStoredText = createTextInput.val(retrieveStoredArray(createHour.text()+'-Data').at(0));
            createSaveButton = $('<button>').addClass('saveBtn col').attr('id', 'button' + i);
            $('.container').append(createTimeBlock);
            createTimeBlock.append(createHour, createTextInput, createSaveButton);
        }
    }




displayTime();
    createTimeblocks();





//DEFINE THE PRIMARY FUNCTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW


document.querySelectorAll('.saveBtn').forEach(item => { item.addEventListener('click', function (event) {
    var btnEl = $(event.target);
    var activatedTimeBlock = btnEl.parent();
    var targetedText = activatedTimeBlock.children('.textarea').val();
    var hourText = activatedTimeBlock.children('.hour').text() + '-Data';
    updateStoredArray(hourText, targetedText);
});
});





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
