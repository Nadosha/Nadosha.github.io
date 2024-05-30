import React from 'react'
import { Grid } from '@mui/material'
import UserList from '@Features/Dashboard/UserList/UserList'
import { Panel } from '@Components/UI/Panel'
import { BarChart } from '@Components/Charts/BarChart'
import { DonatChart } from '@Components/Charts/GantChart'

const DashboardContainer = () => {
    return (
        <Grid container spacing={2} mt={2} p={2}>
            <Grid item xs={12} md={6}>
                <Panel>
                    <BarChart />
                </Panel>
            </Grid>
            <Grid item xs={12} md={6}>
                <Panel>
                    <DonatChart />
                </Panel>
            </Grid>
            <Grid item xs={12}>
                <Panel>
                    <UserList />
                </Panel>
            </Grid>
        </Grid>
    )
}

export default DashboardContainer
