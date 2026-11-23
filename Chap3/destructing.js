function getEmployee(id) {
  return {
    name: 'John',
    age: 35,
    address: '123 St',
  };
}

const { name: fullName, age } = getEmployee(22);
console.log('employee', fullName, age);

function getEmployeeWorkInfor(id) {
  return [id, 'White st', 'France'];
}

const [id, officeAddress] = getEmployeeWorkInfor(33);
console.log('employee', id, officeAddress);
