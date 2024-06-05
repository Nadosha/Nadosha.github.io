import { UserT } from '@Types/DataState.types'

interface GroupedDataI {
    name: string
    uv: number
    pv: number
    amt: number
    count: number
}

export const balanceByAgeGroups = (rawData: any[]) => {
    const groupedData: Record<string, GroupedDataI> = {
        '20-30': { name: '20-30', uv: 0, pv: 0, amt: 0, count: 0 },
        '30-40': { name: '30-40', uv: 0, pv: 0, amt: 0, count: 0 },
        '40-50': { name: '40-50', uv: 0, pv: 0, amt: 0, count: 0 },
        '50-60': { name: '50-60', uv: 0, pv: 0, amt: 0, count: 0 },
        '60-70': { name: '60-70', uv: 0, pv: 0, amt: 0, count: 0 },
        '70-80': { name: '70-80', uv: 0, pv: 0, amt: 0, count: 0 },
        '80-90': { name: '80-90', uv: 0, pv: 0, amt: 0, count: 0 },
    }

    rawData.forEach((item) => {
        const ageRange = Math.floor(item.age / 10) * 10
        const rangeKey = `${ageRange}-${ageRange + 10}`
        if (groupedData.hasOwnProperty(rangeKey)) {
            groupedData[rangeKey].uv += item.age // Sum of ages
            groupedData[rangeKey].pv += 1 // Count of items
            groupedData[rangeKey].amt += parseFloat(item.balance.replace(/[^0-9.-]+/g, '')) // Sum of balances
            groupedData[rangeKey].count++ // Increment count
        }
    })

    Object.keys(groupedData).forEach((key) => {
        if (groupedData[key].count > 0) {
            groupedData[key].amt /= groupedData[key].count // Calculate average balance
        }
    })

    const chartData: GroupedDataI[] = Object.values(groupedData)

    return chartData
}

interface PieChartDataI {
    name: string
    value: number
}

export const balanceByMale = (rawData: UserT[]) => {
    const maleData = rawData.filter((item) => item.gender === 'male')
    const femaleData = rawData.filter((item) => item.gender === 'female')

    const calculateAverageBalance = (data: UserT[]): number => {
        if (data.length === 0) return 0

        const totalBalance = data.reduce((acc, item) => {
            return acc + parseFloat(item.balance.replace(/[^0-9.-]+/g, ''))
        }, 0)

        return totalBalance / data.length
    }

    const maleAverageBalance: number = calculateAverageBalance(maleData)
    const femaleAverageBalance: number = calculateAverageBalance(femaleData)

    const pieChartData: PieChartDataI[] = [
        { name: 'Male', value: maleAverageBalance },
        { name: 'Female', value: femaleAverageBalance },
    ]

    return pieChartData
}
