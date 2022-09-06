function analyzeArray(arr) {

    const lengthOfArray = () => {
        return arr.length;
    }

    const min = () => {
        let minValue = arr.reduce((prev, curr) => Math.min(prev, curr), Infinity)
        return minValue;
    }

    const max = () => {
        let mavValue = arr.reduce((prev, curr) => Math.max(prev, curr), -Infinity)
        return mavValue;
    }

    const average = () => {
        let av = arr.reduce((prev, curr) => Math.round(prev + curr/arr.length), 0)
        return av;
    }
    if(arr.length == 0) {
        return "The array should not be empty"
    }

    return {
        length: lengthOfArray(),
        min: min(),
        max: max(),
        average: average()
    }
}

export default analyzeArray;