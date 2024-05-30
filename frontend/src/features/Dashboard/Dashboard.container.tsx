import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import UserList from '@Features/Dashboard/UserList/UserList'
import { Panel } from '@Components/UI/Panel'
import { BarChart } from '@Components/Charts/BarChart'
import { useAppDispatch, useAppSelector } from '@Redux/store'
import { selectFetchUsers } from '@Redux/selectors'
import { fetchUsers } from '@Redux/actions'
import { CircleChart } from '@Components/Charts/CircleChart'

const DashboardContainer = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(selectFetchUsers)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <Grid container spacing={2} mt={2} p={2}>
            <Grid item xs={12} md={6}>
                <Panel>
                    <BarChart rawData={users} />
                </Panel>
            </Grid>
            <Grid item xs={12} md={6}>
                <Panel>
                    <CircleChart rawData={users} />
                </Panel>
            </Grid>
            <Grid item xs={12}>
                <Panel>
                    <UserList data={users} />
                </Panel>
            </Grid>
        </Grid>
    )
}

export default DashboardContainer
