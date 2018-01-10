//To check an empty object
export function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

//Format Date My Style
export function formatDate(date) {
    const d = new Date(date)
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = d.getDate();
    var monthIndex = d.getMonth();
    var year = d.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}