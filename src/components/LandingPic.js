var React = require('react');
import LandingPic from './components/LandingPic';
//var path = require('/public/view/img/logo.jpeg');
//<img src={path} alt="header" />

//import * as Blueprint from "@blueprintjs/core";




var LandingPic = React.createClass({
	render: function(){

		return(
			<img src={'http://keystonemedicine.com/wp-content/uploads/2016/06/Pediatrics.jpg'} alt="boohoo" className="img-responsive"/>
		)
	}
});

//React.renderComponent(<Hello name="World" />, document.body);



// Export the componen back for use in other files
module.exports = LandingPic; 
