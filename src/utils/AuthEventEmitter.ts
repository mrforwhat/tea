const eventNames = ['API:UN_AUTH','API:VALIDATE_ERROR'] as const
type EventNames = (typeof eventNames)[number]
class EventEmiiter {
    private listeners: Record<EventNames, Set<Function>> = {
        'API:UN_AUTH': new Set(),
        'API:VALIDATE_ERROR': new Set(),
    };

    on(eventName: EventNames, listener: Function): void {
        console.log(`output before on-> ${eventName}`, listener)
        this.listeners[eventName].add(listener)
        console.log(`output after on-> ${eventName}`, listener)
    }

    off(eventName: EventNames, listener: Function): void {
        console.log(`output before off-> ${eventName}`, listener)
        this.listeners[eventName].delete(listener)
        console.log(`output after off-> ${eventName}`, listener)
    }
    emit(eventName: EventNames, ...args: any[]):void {
        console.log(`output before emit-> ${eventName}`, args)
        this.listeners[eventName].forEach(listener => listener(...args))
    }
}

export default new EventEmiiter()