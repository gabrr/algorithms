const organizeData = [
    {name: "Station movE SE 1.6J", status: "MAINTENANCE", distance: 4},
    {name: "Estacao MovE 001", status: "AVAILABLE", distance: 560},
    {name: "Estacao movE PM 1.6J Andre", status: "MAINTENANCE", distance: 6},
    {name: "Estacao EMB PM 1.5S", status: "MAINTENANCE", distance: 481},
    {name: "Station movE SE 1.6J Andre", status: "MAINTENANCE", distance: 4},
    {name: "Estação CFL", status: "MAINTENANCE", distance: 7},
    {name: "Estacao MovE 001", status: "AVAILABLE", distance: 20},
    {name: "Charger123456", status: "MAINTENANCE", distance: 252},
    {name: "CPFLCAMP", status: "MAINTENANCE", distance: 543},
    {name: "Public Charger 1.5", status: "MAINTENANCE", distance: 965},
    {name: "Estacao PC VIVO", status: "MAINTENANCE", distance: 480},
    {name: "Estacao Move - WEG", status: "MAINTENANCE", distance: 6},
    {name: "CB SOLAR SN10005204281180", status: "MAINTENANCE", distance: 2575},
    {name: "CBDash1", status: "MAINTENANCE", distance: 10839},
    {name: "ESTACAO_CFL_1", status: "MAINTENANCE", distance: 4},
    {name: "Estacao MovE 001", status: "AVAILABLE", distance: 4},
    {name: "Estacao Ordem", status: "BUSY", distance: 220},
    {name: "QC24S - BMW Agulhas Negras", status: "AVAILABLE", distance: 485},
    {name: "BRPR_TNU01", status: "MAINTENANCE", distance: 480},
    {name: "Estacao do Gabriel", status: "BUSY", distance: 2},
    {name: "Estacao hahhaha", status: "BUSY", distance: 20},
]



const filteredData = (array = organizeData) => {
    let first = []
    let second = []
    let third = []

    array.forEach(station => {
        if (station.status === 'AVAILABLE') return first = [...first, station]
        if (station.status === 'BUSY') return second = [...second, station]
        if (station.status === 'MAINTENANCE') return third = [...third, station]
    })
    
    first.sort((a, b) => {
        return a.distance - b.distance
    })
    second.sort((a, b) => {
        return a.distance - b.distance
    })
    third.sort((a, b) => {
        return a.distance - b.distance
    })

    return [...first, ...second, ...third]
}


console.time('teste')
const newValue = filteredData(organizeData)
console.timeEnd('teste')

console.log(newValue)