var customerName = 'bob'

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(name){
  bestCustomer = name
}


const leastFavoriteCustomer = 'some initial value'
function changeLeastFavoriteCustomer(value) {
  leastFavoriteCustomer = value
}