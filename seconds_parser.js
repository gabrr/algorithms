export const secondsParser = (s) => {
    if (s < 60) {
        return `${s} s`
    }
    
    if (s < 3600) {
        const result = parseInt(s / 60)
        return `${result} min`
    }
    
    const isInteger = s / 3600 % 1 === 0
    const minutesAndHour = (seconds) => {
    
        if (s < 3660) {
            return '1 h'
        }

        const hours = (seconds / 3600).toString().split('.')[0]
        const minRelative = parseInt((seconds / 3600).toString().split('.')[1].slice(0, 2))
        const minutes = parseInt((3600 / 100) * minRelative / 60).toString().slice(0, 2)
        
        return `${hours} h ${minutes} min`
    }
    
    return isInteger ? (s / 3600 > 1 ? `${s / 3600} h` : `1 h`) : minutesAndHour(s)   
}
