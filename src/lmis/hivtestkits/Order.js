import { Container, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import OrderHeader from '../OrderHeader'
import TestKitDetails from './TestKitDetails'
import UseSummary from './UseSummary'
import { loadRegimens } from '../../redux/utilities/artReginmenSlice'
import { testKits } from '../../redux/lmis/dataTestKits'

export default function Order(props) { 

    const dispatch = useDispatch()

    useEffect(() => {
        const regimens = [...testKits]
        dispatch(loadRegimens(regimens))
    },[dispatch])

    const regimens = useSelector((state) => state.artRegimens.regimens)

    return (
        // <Container maxWidth='xl'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <OrderHeader />
                </Grid>
                <Grid item xs={12}>
                    <TestKitDetails data={regimens} />
                </Grid>
                <Grid item xs={12}>
                    <UseSummary data={regimens} />
                </Grid>
            </Grid>
        // </Container>
    )
}
