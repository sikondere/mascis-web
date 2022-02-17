import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

const { Grid } = require("@mui/material")

function OrderHeader(props) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <DropDownListComponent placeholder='facility'  id='facility' />
            </Grid>
            <Grid item xs={3}>
                <DropDownListComponent placeholder='district' id='district' />
            </Grid>
            <Grid item xs={3}>
                <DropDownListComponent placeholder='warehouse' id='warehouse' />
            </Grid>
            <Grid item xs={3}>
                <DropDownListComponent placeholder='delivery zone' id='deliveryzone' />
            </Grid>
            <Grid item xs={3}>
                <DropDownListComponent placeholder='cycle' id='cycle' />
            </Grid>
            <Grid item xs={3}>
                <DatePickerComponent placeholder='start date' id='startdate' />
            </Grid>
            <Grid item xs={3}>
                <DatePickerComponent placeholder='end date' id='enddate' />
            </Grid>
            <Grid item xs={3}>
                <DatePickerComponent placeholder='date completed' id='datecompleted' />
            </Grid>
        </Grid>
    )
}

export default OrderHeader