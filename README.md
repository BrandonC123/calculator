# calculator

Calculator web app using JS. Modeled based off TI-108 calculator. TOP  

Calculate process:  
    -Keyboard or button press will display number to screen and update  
    displayValue and displayArray. displayArray stores each child Node that is appended to the display for clearing the screen.  
    -When operation is pressed displayValue is stored in value1. Values and  
    screen is cleared after user starts inputting value2.  
    -After equals is pressed display is cleared and calculations are made using the operate function.  
    -The answer is updated into displayValue & displayArray.  
    -When chaining operations value1 will be set to the result of the initial values of value1 & value2.  
    -afterOP boolean is used for after an operation is used to clear screen when the user begins to input value2.  

Conditions:
    -Prevents user from dividing by 0  
    -Prevents user from using more than one decimal using decimal boolean  
    -Only allows up to 10 numbers at a time on the screen  
    -Floats are rounded to 9 decimals to prevent overflow  
