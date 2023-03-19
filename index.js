/* Your Code Here */
function createEmployeeRecord(employee){
    return{
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event){
    let [date, hour] = event.split(' ')
    let eventObj = {
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date
    }
    this.timeInEvents.push(eventObj) //bc we don't know which employee will be called we use 'this'
    return this
}

function createTimeOutEvent(event){
    let [date, hour] = event.split(' ')
    let eventObj = {
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date
    }
    this.timeOutEvents.push(eventObj) //bc we don't know which employee will be called we use 'this'
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    // console.log('TIMEIN:', timeIn.hour)
    // console.log('TIMEOUT:', timeOut.hour)
    // console.log('CALC:', timeOut.hour-timeIn.hour)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date){
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
    //console.log('HOURS:', hours)
}

function calculatePayroll(employees){
    const record = employees.map(employee => allWagesFor.call(employee))
    return record.reduce((currentValue, total) => currentValue + total)
}

function findEmployeeByFirstName(collection, firstNameString){
    return collection.find(employee => employee.firstName === firstNameString)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

