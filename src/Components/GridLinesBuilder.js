import React from 'react'
import {  } from '../actions'
import { connect } from 'react-redux'




class GridLinesBuilder extends React.Component {

	
	
	// totalContributionsForThisCampaign = (campaigns) => {  return campaigns.reduce( (sum, contrib) => {return sum + contrib.contribution_amount }, 0) }
  // render() {


      // switch(this.props.gridType) {
        // case "Campaigns You've Supported":
						// let totalContributionsForThisCampaign = this.props.campaignContributions.reduce()
						// function calculatePayroll(employees) { return employees.reduce(function(sum, employee) { return sum + allWagesFor.call(employee) }, 0) }
            // return(
            // <tr className="center aligned">
            //   <th data-label="ID" className="changePoiterToFinger" onClick={() => this.props.setSelectedCampaignAndContributions(this.props.gridLineObj, this.props.history)}>{this.props.gridLineObj.id}</th>
            //   <td  data-label="Name"  >{this.props.gridLineObj.campaign_name}</td>
            //   <td data-label="Description"  >{this.props.gridLineObj.campaign_description}</td>
            //   <td  data-label="Promo Sentiment"  >{mapSentimentIdToSentimentDescription(this.props.gridLineObj.campaign_sentiment_id)}</td>
            //   <td data-label="Your total contributions" >${this.totalContributionsForThisCampaign(this.props.thisCampaignContributions)}</td>
            //   <td data-label="Promo Status" >{mapStatusIdToStatusName(this.props.gridLineObj.campaign_status_id)}</td> 
            // </tr>
            // )  // ends "Campaigns You've Supported" RETURN
          // break 
        // default:
      // } // ends switch


  // } // ends Render
}  // ends GridBuilder class
// this comes from the actions.js function names
function mdp(dispatch) {
  // return { setSelectedCampaignAndContributions: ( path, campaignObj, history ) => dispatch(setSelectedCampaignAndContributions( path, campaignObj, history)) }
  // return { setSelectedCampaignAndContributions: ( campaignObj, history ) => dispatch(setSelectedCampaignAndContributions( campaignObj, history)) }
}


// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  // return { workingEntityObj: state.workingEntityObj}
}

export default connect(msp, mdp)(GridLinesBuilder)

