import readline from 'readline'
import { BicycleInput} from '../index';

function promptEnterInput() {
    const readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const bicycleInput = new BicycleInput();
  
    readLine.question('Enter title product: ', (input: string) => {

        const matchingBike = bicycleInput.findMatchingBike(bicycleInput.readFiles(), input);

        if (matchingBike) {
            console.log(`Bicycle found with title '${input}':`);
            console.log(matchingBike);
            
        } else {
            console.error(`No bicycle found with title '${input}'`);
        }
        
        readLine.close();
     });
}

promptEnterInput();