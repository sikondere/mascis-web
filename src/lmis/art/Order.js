import { Grid } from '@mui/material'

import DrugDetails from './DrugDetails'
import OrderHeader from './OrderHeader'
import PaediatricPatients from './PaediatricPatients'
import AdultPatients from './AdultPatients'
import FluconazolePatients from './FluconazolePaitents'
import OtherPatients from './OtherPatients'

export default function Order(props) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <OrderHeader />
            </Grid>
            <Grid item xs={12}>
                <DrugDetails />
            </Grid>
            <Grid item xs={4}>
                <AdultPatients />
            </Grid>
            <Grid item xs={3}>
                <PaediatricPatients />
            </Grid>
            <Grid item xs={5}>
                <Grid>
                    <FluconazolePatients />
                </Grid>
                <br />
                <Grid>
                    <OtherPatients />
                </Grid>
            </Grid>
        </Grid>
    )
}