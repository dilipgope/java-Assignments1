rent = (carType, noOfDays) => {
    carType == 'economy' ? (cost = 4000) : (carType == 'midsize') ? (cost = 10000) :(carType == 'luxury') ? (cost = 20000) :'Unknown'
    totalCost = cost * noOfDays
    return totalCost
}

console.log(rent('luxury', 5));