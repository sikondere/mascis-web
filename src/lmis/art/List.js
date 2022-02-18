import { Button, Grid } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { Fragment } from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

import OrderHeader from '../OrderHeader'
import ListGrid from './ListGrid'
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

