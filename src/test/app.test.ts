import {response, BicycleInput} from '../index';

jest.useFakeTimers(); //create jest timers

describe('BicycleInput', () => {

    it('should return the same data.json title', () => {
        const bicycleInput = new BicycleInput();
        expect(bicycleInput.renderTitle()).toBe('BiciFlex');
    });


    it('should return debounce function calls', () => {
        const mockFunction = jest.fn();
        const bicycleInput = new BicycleInput();
        const response = bicycleInput.debounce( 
            mockFunction, 3000);
        
        response();

        setTimeout(() => response(), 2000);
        setTimeout(() => response(), 7100);

        jest.runAllTimers();
        
        expect(mockFunction).toHaveBeenCalledTimes(2);
    })
});