import React, { PureComponent, ReactNode } from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import { balanceByAgeGroups } from '@Components/Charts/DataCalculation.utils'

export const BarChart: React.FC<{ rawData: any[] }> = ({ rawData }) => {
    const data = balanceByAgeGroups(rawData)
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
