import { Grid } from '@mui/material'

import DrugDetails from './DrugDetails'
import OrderHeader from './OrderHeader'

export default function Order(props) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <OrderHeader />
            </Grid>
            <Grid item xs={12}>
                <DrugDetails />
            </Grid>
        </Grid>
    )
}