var React = require('react');

import ReactDOM from 'react-dom';
//import LandingPic from 'LandingPic';

//var path = require('/public/view/img/logo.jpeg');
//<img src={path} alt="header" />

//import * as Blueprint from "@blueprintjs/core";


var LandingPage = React.createClass({


render: function(){

		return(

<div>
        <div id="titleContainer">
            <div className="row">
                <div className="col-md-12">
                    
                   
                        <h1 id="title"> COLLABORATE </h1>

                     
<img src={'http://keystonemedicine.com/wp-content/uploads/2016/06/Pediatrics.jpg'} alt="boohoo" className="img-responsive" id="baby" />
                        <p id="descrip"> A place where pediatric physical therapists, occupational therapists, speech therapists, and other support staff from various pediatric settings come to COLLABORATE via their documentation! </p>
                    
                   
                 </div>
            </div>
        </div>
    
  </div>

  


   

      	)
	}
});

// Export the componen back for use in other files
module.exports = LandingPage; 
