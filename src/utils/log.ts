import LogEventEmitter from "./LogEventEmitter";
const baseKeyStyle: string = `color: #fff; font-size: 12px;background: #7c7c7c;border-top-left-radius: 5px;border-bottom-left-radius:5px;padding: 0 4px;`
const baseValStyle: string = `color: #fff; font-size: 12px;background: orange;border-top-right-radius: 5px;border-bottom-right-radius:5px;padding: 0 4px;`


export const printLog = (type:string,name: string)=> {
    console.log(`%c${type}%c${name}`, `${baseKeyStyle}`,`${baseValStyle}`)
}
LogEventEmitter.on('BUTTON',(name: string)=>{
    printLog('BUTTON',name)
})