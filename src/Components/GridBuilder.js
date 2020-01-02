import React from 'react'
import GridLinesBuilder from './GridLinesBuilder'

class GridBuilder extends React.Component {

  render() {
    let GridLines = []
    switch(this.props.gridType) {
      case "EventsGrid":
          if (this.props.gridLinesArray.length > 0 ) {
            GridLines = this.props.gridLinesArray.map(gridLineObj => <GridLinesBuilder key={gridLineObj.id} 
                                                                        gridLineObj={gridLineObj} 
                                                                        gridType="EventsGrid"
                                                                        history={this.props.history} 
                                                                      />)
          } // ends GridLines IF statement
          return(
            <table className="ui celled table">
              <colgroup>
                <col id="firstCol"/>
                <col span="11" className="dayCols"  />
              </colgroup>
              <thead>
                <tr>
                  <th>Date Event Created</th>
                  <th>Event Name</th>
                  <th>Event Date</th>
                  {/* <th className="center aligned" >Another column</th> */}
                </tr>
              </thead>
              <tbody>
                {GridLines}
              </tbody>
              {/* <tfoot>
                <tr>
                  <td colSpan="11">These are all the campaigns you've supported</td>
                </tr>
              </tfoot> */}
            </table>
          ) // ends "Campaigns You've Supported" RETURN
        break 
      case "selectedGetterWishList":
          if (this.props.gridLinesArray.length > 0 ) {
            GridLines = this.props.gridLinesArray.map(gridLineObj => <GridLinesBuilder key={gridLineObj.id} 
                                                                        gridLineObj={gridLineObj} 
                                                                        gridType="selectedGetterWishList"
                                                                        history={this.props.history} 
                                                                      />)
          } // ends GridLines IF statement
          return(
            <table className="ui celled table">
              <colgroup>
                <col id="firstCol"/>
                <col span="11" className="dayCols"  />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Item Name</th>
                  <th>Amazon Link</th>
                  <th>Mark this item as purchased</th>
                  {/* <th className="center aligned" >Another column</th> */}
                </tr>
              </thead>
              <tbody>
                {GridLines}
              </tbody>
              {/* <tfoot>
                <tr>
                  <td colSpan="11">These are all the campaigns you've supported</td>
                </tr>
              </tfoot> */}
            </table>
          ) // ends "Campaigns You've Supported" RETURN
        break 
      default:
        break
    } // ends switch
  } // ends Render
}  // ends GridBuilder class
export default GridBuilder

