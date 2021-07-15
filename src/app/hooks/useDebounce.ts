type TFunction = (e: React.ChangeEvent<HTMLInputElement>) => void;

export function useDebounceEvent(fn: TFunction, timeout: number = 300) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any) => {
        args[0].persist(); //NOTE: We persist the Synthetic Event to prevent nullify
        clearTimeout(timer);
        timer = setTimeout(() => { fn.apply(null, args) }, timeout);
    };
}