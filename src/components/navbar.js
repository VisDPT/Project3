var React = require('react');


//import * as Blueprint from "@blueprintjs/core";


var Navbar = React.createClass({


render: function(){

		return(

<div className="navContainer">

    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom" >
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Login/Register <i className="fa fa-bars"></i>
                </button>
                <p className="navbar-brand" href="#page-top" id="navTitle">COLLABORATE </p>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li className="page-scroll">
                        <a href="#portfolio">LogIn/Register</a>
                    </li>

                </ul>
            </div>
     
        </div>
    </nav>

      
   
   </div> 
      	)
	}
});

// Export the componen back for use in other files
module.exports = Navbar; 
