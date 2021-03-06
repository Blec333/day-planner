





var secondsLeftToday;
var secondsToEOD;
var blockColorClass;

//SET GLOBAL VARIABLES ABOVE
//------------------------------------------------------------------------------------------------------------------
//DEFINE UTILITY FUNCTIONS BELOW

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    var hourNow = moment().format('H');
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
//DEFINE THE PRIMARY FUNCTION BELOW

function createTimeblocks() {
    //populate the content
    var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    for (var i = 0; i < hours.length; i++) {

        secondsToEOD = ((24 - (i + hours.length)) * 60 * 60);
        if (secondsLeftToday < secondsToEOD && secondsLeftToday > (secondsToEOD - 3600)) {
            var blockColorClass = 'present';
        } else if (secondsLeftToday > secondsToEOD) {
            var blockColorClass = 'future';
        } else if (secondsLeftToday < (secondsToEOD)) {
            var blockColorClass = 'past';
        }
        console.log(blockColorClass);

        var createTimeBlock = $('<div>').addClass('time-block row d-flex col-12').attr('id', 'timeblock' + i);
        var createHour = $('<div>').addClass('hour col').text(hours.at(i));
        var createTextInput = $('<input>').addClass('textarea ' + blockColorClass + ' col-8');
        var addStoredText = createTextInput.val(retrieveStoredArray(createHour.text() + '-Data').at(0));
        createSaveButton = $('<button>').addClass('saveBtn col').attr('id', 'button' + i);
        createSaveIcon = $('<span>').addClass('glyphicon glyphicon-floppy-save');
        var completeSaveButton = createSaveButton.append(createSaveIcon);
        $('.container').append(createTimeBlock);
        createTimeBlock.append(createHour, createTextInput, completeSaveButton);
    }
}
displayTime();
createTimeblocks();

//DEFINE THE PRIMARY FUNCTION ABOVE
//------------------------------------------------------------------------------------------------------------------
//LISTEN AND TAKE ACTION BELOW

document.querySelectorAll('.saveBtn').forEach(item => {
    item.addEventListener('click', function (event) {
        var btnEl = $(event.target);
        var activatedTimeBlock = btnEl.parent();
        var targetedText = activatedTimeBlock.children('.textarea').val();
        var hourText = activatedTimeBlock.children('.hour').text() + '-Data';
        updateStoredArray(hourText, targetedText);
    });
});

