function scuberGreetingForFeet(newCustomer){
  if ( newCustomer <= 400 ) {
    return 'This one is on me!'
  } else {
      if ( newCustomer > 2500 ) {
        return 'No can do.'
      } else if ( newCustomer >= 2000 ) {
        return 'I will gladly take your thirty bucks.'
      }
  }
}

function ternaryCheckCity(destination){
  return destination === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(customerService){
  switch(customerService){
    case 'generous':
      return 'Thank you so much.'
    case 'notGenerous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}