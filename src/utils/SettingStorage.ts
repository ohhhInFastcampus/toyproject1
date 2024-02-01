export const getLocalStorage = (key : string) : string => {
    const data = localStorage.getItem(key);
    if(data) {
        return JSON.parse(data);
    } else {
        return "";
    }
}
export const setLocalStorage = (key: string, value : string) => {
    let isSuccess = false;
    if(!isSuccess) {
        localStorage.setItem(key,value);
        isSuccess = true;
    }
    return isSuccess;
}

export const deleteLocalStorage = (key:string) => {
    let isSuccess = false;
    if(!isSuccess) {
        localStorage.removeItem(key);
        isSuccess = true;
    }
    return isSuccess;
}
export const setJsonToString = (value : Object) => {
    return JSON.stringify(value);
}

// export const setStringToJson = (value:string) => {
//     return JSON.parse(value);
// }