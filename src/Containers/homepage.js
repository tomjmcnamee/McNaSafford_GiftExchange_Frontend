import React from 'react'
import CampaignCard from '../Components/campaign_card'
import BigLogo from '../Images/Big_logo.png'
import { connect } from 'react-redux'
import { fetchTopXCampaigns } from '../actions'

class HomePage extends React.Component {
  componentDidMount(){
    document.title = "WeThePromo - Home Page"
    //SECONS Variable is the number of campaigns you want back
    //Acceptable entries for FIRST variable are as follows
      // "campaigns/TopXCampaignsByFundsRaised"
      // "campaigns/TopXCampaignsByCountOfUniqueContributors"
      // "campaigns/TopXCampaignsByTotalContributions"
    this.props.fetchTopXCampaigns("campaigns/TopXCampaignsByFundsRaised", "100");
  }


  render() {
   // Builds each campaign Card with fetched Campaign data
    let CampaignCards
    if (this.props.topCampaignsArr.length > 0) {
      CampaignCards = this.props.topCampaignsArr.map(camp => <CampaignCard key={camp.id} campaignObj={camp} history={this.props.history} cardType="TopCampaigns" />)
    } 
    return (
      <div id="homepage">
        <div name="PAGE DIV" id="homepage" className="ui grid">
          <div className="one wide column"  >
          </div>
          <div className="fourteen wide column"  id="MainPageDIV" >
            <div id="MainPageLogo">
              <img src={BigLogo} ></img>
              <h1>Crowdfunding Digital Advertisement and Promotion Space</h1>
              <br />
              <h2>Created by:  Tom@TomJMcNamee.com</h2>
              <br />
            </div>
          </div>
          <div className="one wide column"  >
          </div>
        </div>
      </div>
    ) // Ends Return
  } // Ends Render
} // ends Class

function mdp(dispatch) { 
  return { 
    fetchTopXCampaigns: (type, count_of_returned_campaigns) => dispatch(fetchTopXCampaigns(type, count_of_returned_campaigns))
  }
}

function msp(state) { return { 
  topCampaignsArr: state.topCampaignsArr,
  }
}

export default connect(msp, mdp)(HomePage)