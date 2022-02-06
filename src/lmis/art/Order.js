import { Button, Container, Grid } from '@mui/material'

import DrugDetails from './DrugDetails'
import OrderHeader from '../OrderHeader'
import PaediatricPatients from './PaediatricPatients'
import AdultPatients from './AdultPatients'
import FluconazolePatients from './FluconazolePaitents'
import OtherPatients from './OtherPatients'

export default function Order(props) {

    return (
        // <Container  maxWidth="xl">
            // <br />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <OrderHeader />
                </Grid>
                <Grid item xs={12}>
                    <DrugDetails />
                </Grid>
                <Grid item xs={5}>
                    <AdultPatients />
                </Grid>
                <Grid item xs={4}>
                    <PaediatricPatients />
                </Grid>
                <Grid item xs={3}>
                    <Grid>
                        <FluconazolePatients />
                    </Grid>
                    <br />
                    <Grid>
                        <OtherPatients />
                    </Grid>
                </Grid>
                <Grid item xs={-2}>
                    <Button variant='contained'>Save</Button>
                </Grid>
            </Grid>
        // </Container>
    )
}