import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

const { Grid } = require("@mui/material")

function OrderHeader(props) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <DropDownListComponent id='facility' />
            </Grid>
            <Grid item xs={3}>
                <DropDownListComponent id='district' />
            </Grid>
            <Grid item xs={3}>
                <DropDownListComponent id='warehouse' />
            </Grid>
            <Grid item xs={3}>
                <DropDownListComponent id='deliveryzone' />
            </Grid>
            <Grid item xs={3}>
                <DropDownListComponent id='cycle' />
            </Grid>
            <Grid item xs={3}>
                <DatePickerComponent id='startdate' />
            </Grid>
            <Grid item xs={3}>
                <DatePickerComponent id='enddate' />
            </Grid>
            <Grid item xs={3}>
                <DatePickerComponent id='datecompleted' />
            </Grid>
        </Grid>
    )
}

export default OrderHeader