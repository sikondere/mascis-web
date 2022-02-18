import { Button, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Fragment, useRef, useEffect } from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import { Inject, Page } from '@syncfusion/ej2-react-grids'

import OrderHeader from '../OrderHeader'
import { data } from '../../redux/lmis/artHeaderData'

export default function Orders(props) {

    const navigate = useNavigate()
    const orders = data

    if(orders !== null && orders !== undefined)
        return (
            <Fragment>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <OrderHeader />
                    </Grid>
                    <Grid item xs={2} container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-end">
                        <Button variant='contained'>Search</Button>
                    </Grid>
                    <Grid item xs={10}  container
                        direction="row-reverse"
                        justifyContent="flex-start"
                        alignItems="flex-end">
                        <Fab color="primary" 
                        size="medium" aria-label="add"  
                        onClick={() => navigate('/lmis/art/order')}>
                            <AddIcon />
                        </Fab>
                    </Grid>
                    <Grid item xs={12}>
                        <ListGrid data={orders} />
                    </Grid>
                </Grid>
                <Outlet />
            </Fragment>
        )
    else
        return null
}

function ListGrid(props) {

    let gridInstance = useRef(null)
    
    let onLoad = () => {
        if (gridInstance.current) {
            /** height of the each row */
            const rowHeight = gridInstance.current.getRowHeight()
            /** Grid height */
            const gridHeight = gridInstance.current.height
            /** initial page size */
            const pageSize = gridInstance.current.pageSettings.pageSize
            /** new page size is obtained here */
            const pageResize = (gridHeight - (pageSize * rowHeight)) / rowHeight
            gridInstance.current.pageSettings.pageSize = pageSize + Math.round(pageResize)
        }
    }

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <GridComponent 
                        ref={(grid) => gridInstance.current = grid}
                        load={onLoad}
                        dataSource={props.data} 
                        allowTextWrap={true}
                        allowPaging={true}
                        textWrapSettings={{wrapMode: 'Both'}}>
                        <ColumnsDirective>
                            <ColumnDirective field='facility' textAlign="Left" headerText='Facility' />
                            <ColumnDirective field='district' textAlign="Left" headerText='District' />
                            <ColumnDirective field='deliveryZone' textAlign="Left" headerText='Delivery Zone' />
                            <ColumnDirective field='cycle' textAlign="Left" headerText='Cycle' />
                            <ColumnDirective field='startDate' textAlign="Left" headerText='Start Date' />
                            <ColumnDirective field='endDate' textAlign="Left" headerText='End Date' />
                        </ColumnsDirective>
                        <Inject services={[Page]} />
                    </GridComponent>
                </Grid>
            </Grid>
        </Fragment>
    )
}
