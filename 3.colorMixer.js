let color1 = "yellow"
let color2 = "blue"
let colorMixer = color1 + color2 
switch (colorMixer) {
    case 'bluered':
    case 'redblue':
     console.log("Purple");
         break;

    case 'redyellow':
    case 'yellowred':
        console.log("Orange");
        break;

    case 'blueyellow':
    case 'yellowblue':
          console.log("Green");
          break;

    default:
        console.log("Invalid color Combination");
        break;
}