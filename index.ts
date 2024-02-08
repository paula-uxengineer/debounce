import fs from "fs"


function mainFunction(input: any) {

    const data = fs.readFileSync("data.json", 'utf-8') //as type <- interface o type para igualar el title con el title de la interface o type
    
    const jsonRead = JSON.parse(data);

    const jsonExtract = jsonRead[0].title.toLowerCase();
    // console.log(jsonExtract)

    if (jsonExtract === input) {
        return jsonExtract;

    }else{
        return "error input";
    }

    // return jsonRead
}


const debounce = (mainFunction: (...args : any) => void, delay : number) => {
    // Declare a variable called 'timer' to store the timer ID
    let timer : any;

    // Return an anonymous function that takes in any number of arguments
    return function (this: any, ...args: any) {
      // Clear the previous timer to prevent the execution of 'mainFunction'
      clearTimeout(timer);

      // Set a new timer that will execute 'mainFunction' after the specified delay
      timer = setTimeout(() => {
        mainFunction.apply(this, args);
      }, delay);

    };

  };



  const response = debounce(() => {console.log(mainFunction("Biciflex".toLowerCase()))},3000);
  response()
 
  setTimeout(()=> response(), 4000)
  setTimeout(()=> response(), 7100)


  module.exports = debounce;