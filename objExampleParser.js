export const parseChartData = (chartsDataResponse, days) => {

    const parseWeekPeriod = (data) => {
        const startPeriod = new Date(data.startDate).toGMTString().match(/[\d]...../i)[0]
        const endPeriod = new Date(data.endDate).toGMTString().match(/[\d]./i)[0]
        return `${startPeriod} - ${endPeriod}`
    }

    const parseYearPeriod = (data) => {
        return new Date(data.startDate).toGMTString().match(/\s\w{3}/i)[0].trim()
    }

    const parseDayPeriod = (data) => {
        return new Date(data.startDate).toGMTString().match(/[\d]...../i)[0]
    }

    const isKeyExisting = (key, arrayOfKeys) => arrayOfKeys.includes(key) 

    const chartBarsKeys = ['recharge', 'duration', 'energy', 'autonomy', 'frequency']
    const chartsWithDynamicX = ['recharge', 'duration', 'energy', 'autonomy',]

    const filterChartBars = Object.entries(chartsDataResponse).filter(([key]) => isKeyExisting(key, chartBarsKeys))
    const dailyChartsData = Object.entries(chartsDataResponse.dailyDistributions).filter(([key]) => isKeyExisting(key, chartBarsKeys))

    const filterChartBars2 = dailyChartsData.map(([ key, obj ]) => {

        const customKey = key === 'duration' ? 'duration2' : key
        const customData = key === 'duration' ? {
            '<1h': obj['<1h'],
            '1h-2h': obj['1h-2h'],
            '2h-4h': obj['2h-4h'],
            '>4h': obj['>4h'],
        } : obj
        
        return [customKey, Object.entries(customData).map(([ objKey, objValues ]) => {
            return { x: objKey, value: objValues }
        })]
    })
    
    const allChartsBar = [...filterChartBars, ...filterChartBars2]
    
    const parseToChartsModel = (arrayWithAllChartsBar) => {
        return arrayWithAllChartsBar.map(([chartsBarKey, chartsBarValues]) => {

            let title;

            if (chartsBarKey === 'recharge') title = `Recargas nos Últimos ${days} Dias`
            if (chartsBarKey === 'duration') title = `Duração nos Últimos ${days} Dias (h)`
            if (chartsBarKey === 'energy') title = `Consumo nos Últimos ${days} Dias (kWh)`
            if (chartsBarKey === 'autonomy') title = `Autonomia nos Últimos ${days} Dias (km)`
            if (chartsBarKey === 'duration2') title = `Tempo de Permanência nos Últimos ${days} Dias`
            if (chartsBarKey === 'frequency') title = `Horários mais Populares nos Últimos ${days} Dias (h)`
            
            const getPeriodByKeyAndDays = (valueToCheck) => {

                if (days === "28" && isKeyExisting(chartsBarKey, chartsWithDynamicX)) return parseWeekPeriod(valueToCheck)
                if (days === "365" && isKeyExisting(chartsBarKey, chartsWithDynamicX)) return parseYearPeriod(valueToCheck)
                if (days === "7" && isKeyExisting(chartsBarKey, chartsWithDynamicX)) return parseDayPeriod(valueToCheck)

                return valueToCheck.x
            } 

            return {
                title,
                key: chartsBarKey,
                className: chartsBarKey + '_chart',
                series: chartsBarValues.map((singleChartData) => {
                    return {
                        x: getPeriodByKeyAndDays(singleChartData),
                        y: singleChartData.value,
                    }
                })
            }
        })
    }

    return parseToChartsModel(allChartsBar)

}
