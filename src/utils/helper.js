export const elapsedMinut = (timeStamp) => {
    const diffSeconds = Math.round((Date.now() - timeStamp) / 1000);
    const minutes = Math.floor(diffSeconds / 60);
    return minutes
}
export const elapsedSecond = (timeStamp) => {
    const diffSeconds = Math.round((Date.now() - timeStamp) / 1000);
    const minutes = Math.floor(diffSeconds / 60);
    const seconds = diffSeconds - minutes * 60;
    return seconds
}

export const elapsedTime=(timeStamp)=>{
    return `${elapsedMinut(timeStamp)} min ${elapsedSecond(timeStamp)} sec`;
}