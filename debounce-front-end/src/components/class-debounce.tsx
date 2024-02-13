export function debounce(func: (...args: any) => void, delay: number) {
        let timer: any;

        return function (this: any, ...args: any) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
}

