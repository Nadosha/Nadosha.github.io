import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { balanceByMale } from '@Components/Charts/DataCalculation.utils'
import { UserT } from '@Types/DataState.types'

const COLORS = ['#7469b6', '#e1afd1']
const RADIAN = Math.PI / 180
interface renderCustomizedLabelI {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    percent: number
    name: string
    value: number
}
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
    value,
}: renderCustomizedLabelI) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${name}: ${(percent * 100).toFixed(0)}%`}
        </text>
    )
}
export const CircleChart: React.FC<{ rawData: UserT[] }> = ({ rawData }) => {
    const data = balanceByMale(rawData)

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="value" data={data} fill="#8884d8" label={renderCustomizedLabel}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
