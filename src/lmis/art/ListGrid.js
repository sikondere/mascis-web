import { ColumnDirective, ColumnsDirective, CommandColumn, Grid, GridComponent, Page } from '@syncfusion/ej2-react-grids'
import { Column, CommandModel, CommandClickEventArgs, Edit, EditSettingsModel, Inject, IRow } from '@syncfusion/ej2-react-grids'
import { Fragment, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ListGrid(props) {

    let gridInstance = useRef(null)
    const navigate = useNavigate()
    
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

    const commands = [
        {
          buttonOption: {
            cssClass: 'e-flat', iconCss: 'e-edit e-icons'
          }
        }
    ]

    const commandClick = (args) =>  {
        if (gridInstance.current) {
        //   alert(JSON.stringify(args.rowData));
          navigate('/lmis/art/order')
        }
    }

    return (
        <Fragment>
            <GridComponent 
                ref={(grid) => gridInstance.current = grid}
                load={onLoad}
                dataSource={props.data} 
                allowTextWrap={true}
                allowPaging={true}
                editSettings={{allowEditing: true}} 
                commandClick={commandClick} 
                textWrapSettings={{wrapMode: 'Both'}}>
                <ColumnsDirective>
                    <ColumnDirective field='facility' textAlign="Left" headerText='Facility' />
                    <ColumnDirective field='district' textAlign="Left" headerText='District' />
                    <ColumnDirective field='deliveryZone' textAlign="Left" headerText='Delivery Zone' />
                    <ColumnDirective field='cycle' textAlign="Left" headerText='Cycle' />
                    <ColumnDirective field='startDate' textAlign="Left" headerText='Start Date' />
                    <ColumnDirective field='endDate' textAlign="Left" headerText='End Date' />
                    <ColumnDirective headerText='' width='120' commands= {commands}/>
                </ColumnsDirective>
                <Inject services={[Page, Edit, CommandColumn]} />
            </GridComponent>                        
        </Fragment>
    )
}