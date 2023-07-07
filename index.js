
function createEmployeeRecord(array) {
    let employeeRecord = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
    
    return employeeRecord;
  }
  
  function createEmployeeRecords(employeesData) {
    return employeesData.map(employeeData => createEmployeeRecord(employeeData));
  }
  
  function createTimeInEvent(employeeRecord, dateTimeString) {
    let [date, hour] = dateTimeString.split(" ");
  
    let timeInEvent = {
      type: "TimeIn",
      date: date,
      hour: parseInt(hour)
    };
    
    employeeRecord.timeInEvents.push(timeInEvent);
    
    return employeeRecord;
  }
  
  function createTimeOutEvent(employeeRecord, dateTimeString) {
    let [date, hour] = dateTimeString.split(" ");
    
    let timeOutEvent = {
      type: "TimeOut",
      date: date,
      hour: parseInt(hour)
    };
    
    employeeRecord.timeOutEvents.push(timeOutEvent);
    
    return employeeRecord;
  }
  
  function hoursWorkedOnDate(employeeRecord, date) {
    let timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    let timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
    
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }
  
  function wagesEarnedOnDate(employeeRecord, date) {
    let hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    let payRate = employeeRecord.payPerHour;
    
    return hoursWorked * payRate;
  }
  
  function allWagesFor(employeeRecord) {
    let dates = employeeRecord.timeInEvents.map(event => event.date);
    
    return dates.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employeeRecord, date), 0);
  }
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employeeRecord) => totalPayroll + allWagesFor(employeeRecord), 0);
  }
  
  // Example usage:
  
  let employeeData = [
    ["John", "Doe", "Manager", 20],
    ["Jane", "Smith", "Supervisor", 15]
  ];
  let employeeRecords = createEmployeeRecords(employeeData);
  
  createTimeInEvent(employeeRecords[0], "2023-07-07 09:00");
  createTimeInEvent(employeeRecords[1], "2023-07-07 08:30");
  
  createTimeOutEvent(employeeRecords[0], "2023-07-07 17:00");
  createTimeOutEvent(employeeRecords[1], "2023-07-07 16:30");
  
  let date = "2023-07-07";
  let wages = wagesEarned
  