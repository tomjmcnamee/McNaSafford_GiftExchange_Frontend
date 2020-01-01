import React from 'react'
import GridLinesBuilder from './GridLinesBuilder'

class GridBuilder extends React.Component {

  render() {
    let GridLines = []
    switch(this.props.gridType) {
      case "Campaigns You've Supported":
          if (this.props.gridLinesArray.length > 0 ) {
            GridLines = this.props.gridLinesArray.map(gridLineObj => <GridLinesBuilder key={gridLineObj.id} 
                                                                        gridLineObj={gridLineObj} 
                                                                        gridType="Campaigns You've Supported"
                                                                        thisCampaignContributions={this.props.campaignContributions.filter(function(cont) {return cont.campaign_id === gridLineObj.id})}
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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Promo Sentiment</th>
                  <th className="center aligned" >Your total contributions</th>
                  <th className="center aligned" >Promo Status</th>
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

      case "cityLocationsAndDistances":
        if (this.props.gridLinesArray.length > 0 ) {
          GridLines = this.props.gridLinesArray.map(gridLineObj => <GridLinesBuilder  
                                                                      gridType="cityLocationsAndDistances" 
                                                                      location={gridLineObj.location} 
                                                                      distance={gridLineObj.range} 
                                                                      // history={this.props.history} 
                                                                    />)
          } // ends GridLines IF statement
          return(
            <div id="geographicRangeDetails">
              <table className="ui celled table">
                <colgroup>
                  <col id="firstCol"/>
                  <col span="5" className="dayCols"  />
                </colgroup>
                <thead>
                  <tr>
                    <th >Location</th>
                    <th className="center aligned" >Include places X miles from location center</th>
                  </tr>
                </thead>
                <tbody>
                  {GridLines}
                </tbody>
                {/* <tfoot>
                  <tr>
                    <td colSpan="5">----</td>
                  </tr>
                </tfoot> */}
              </table>
            </div>
          ) // ends "Campaigns You've Supported" RETURN
          break 
      case "stateOrCountryLocations":
        if (this.props.gridLinesArray.length > 0 ) {
          GridLines = this.props.gridLinesArray.map(gridLineObj => <GridLinesBuilder  
                                                                      gridType="stateOrCountryLocations" 
                                                                      location={gridLineObj.location} 
                                                                      // history={this.props.history} 
                                                                    />)
        } // ends GridLines IF statement
        return(
          <div id="geographicRangeDetails">
            <table className="ui celled table">
              {/* <caption>Facebook users living in or traveling through the below listed locations will be eligible to view your sponsored post:</caption> */}
              <colgroup>
                <col id="firstCol"/>
                <col span="5" className="dayCols"  />
              </colgroup>
              <thead>
                <tr>
                  <th className="center aligned" >Location</th>
                </tr>
              </thead>
              <tbody>
                {GridLines}
              </tbody>
              {/* <tfoot>
                <tr>
                  <td colSpan="5">----</td>
                </tr>
              </tfoot> */}
            </table>
          </div>
        ) // ends "Campaigns You've Supported" RETURN
        break 
      case "CreateCampaignForm - City":
        if (this.props.gridLinesArray.length > 0 ) {
          GridLines = this.props.gridLinesArray.map(gridLineObj => <GridLinesBuilder  
                                                                      key={gridLineObj.tempid} 
                                                                      tempid={gridLineObj.tempid} 
                                                                      gridType="CreateCampaignForm - City" 
                                                                      city_name={gridLineObj.city_name} 
                                                                      state={gridLineObj.state} 
                                                                      radius={gridLineObj.radius} 
                                                                      removeClickHandler ={this.props.removeClickHandler}
                                                                      // history={this.props.history} 
                                                                    />)
        } // ends GridLines IF statement
        return(
          <div id="createCampaignFormCities">
            <table className="ui celled table">
              <colgroup>
                <col id="firstCol"/>
                <col span="9" className="dayCols"  />
              </colgroup>
              <thead>
                <tr>
                  <th >State</th>
                  <th >City</th>
                  <th className="center aligned" >Radius from City center to include</th>
                  <th ></th>
                </tr>
              </thead>
              <tbody>
                {GridLines}
              </tbody>
              <tfoot>
                {/* <tr>
                  <td colSpan="9">----</td>
                </tr> */}
              </tfoot>
            </table>
          </div>
        ) // ends "Campaigns You've Supported" RETURN
        break 
      case "CreateCampaignForm - State":
      if (this.props.gridLinesArray.length > 0 ) {
        GridLines = this.props.gridLinesArray.map(gridLineObj => <GridLinesBuilder  
                                                                    key={gridLineObj.state}
                                                                    gridType="CreateCampaignForm - State" 
                                                                    state={gridLineObj.state} 
                                                                    removeClickHandler ={this.props.removeClickHandler}
                                                                    // history={this.props.history} 
                                                                  />)
      } // ends GridLines IF statement
      return(
        <div id="createCampaignFormCities">
          <table className="ui celled table">
            <caption>Targetted Cities and Towns</caption>
            <colgroup>
              <col id="firstCol"/>
              <col span="4" className="dayCols"  />
            </colgroup>
            <thead>
              <tr>
                <th className="center aligned" >State</th>
                <th className="center aligned" ></th>
              </tr>
            </thead>
            <tbody>
              {GridLines}
            </tbody>
            {/* <tfoot>
              <tr>
                <td colSpan="4">----</td>
              </tr>
            </tfoot> */}
          </table>
        </div>
      ) // ends "Campaigns You've Supported" RETURN
        break
      case "Crampaign Details - ContributorComments":
      if (this.props.gridLinesArray.length > 0 ) {
        GridLines = this.props.gridLinesArray.map(gridLineObj => <GridLinesBuilder  
                                                                    key={gridLineObj.state}
                                                                    gridType="Crampaign Details - ContributorComments" 
                                                                    state={gridLineObj.state} 
                                                                    removeClickHandler ={this.props.removeClickHandler}
                                                                    // history={this.props.history} 
                                                                  />)
      } // ends GridLines IF statement
      return(
        <div id="Crampaign Details - ContributorComments">
          <table className="ui celled table">
            <caption>Comments from other Contributors</caption>
            <colgroup>
              <col id="firstCol"/>
              <col span="4" className="dayCols"  />
            </colgroup>
            <thead>
              <tr>
                <th className="center aligned" >Comment</th>
                <th className="center aligned" >Date</th>
              </tr>
            </thead>
            <tbody>
              {GridLines}
            </tbody>
            <tfoot>
            </tfoot>
          </table>
        </div>
      ) // ends "Campaigns You've Supported" RETURN
        break
      default:
        break
    } // ends switch
  } // ends Render
}  // ends GridBuilder class
export default GridBuilder

