import fs from "fs";
import { Bicycle } from "./interface-data";

export class BicycleInput {
    id: string;
    title: string;
    description: string;

    constructor() {
        const data = this.readFiles(); //return the data.json into an object

        const matchingBike = this.findMatchingBike(data, "BiciFlex"); //check the string input === to the title of the data.json

        if (matchingBike) { // if the title exists return an object with the interface contract
            this.id = matchingBike.id;
            this.title = matchingBike.title;
            this.description = matchingBike.description;
        } else {
            throw new Error("There's no bicycle with that name");
        }
    }

    readFiles(): Bicycle[] {
        const data = fs.readFileSync("./src/data.json", 'utf-8');
        return JSON.parse(data);
    }

    findMatchingBike(data: Bicycle[], input: string): Bicycle | undefined {
        for (const bike of data) {
            if (bike.title.toLowerCase() === input.toLowerCase()) {
                return bike;
            }
        }
        return undefined;
    }

    debounce(func: (...args: any) => void, delay: number) {
        let timer: any;

        return function (this: any, ...args: any) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    renderTitle(): string {
      return this.title;
    }
}

const bicycleInput = new BicycleInput();

export const response = bicycleInput.debounce(() => {
  console.log(bicycleInput.renderTitle());
}, 3000);

// response();

// setTimeout(() => response(), 2000);
// setTimeout(() => response(), 7100);



