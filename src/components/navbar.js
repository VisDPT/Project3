var React = require('react');


//import * as Blueprint from "@blueprintjs/core";


var Navbar = React.createClass({


render: function(){

		return(

<div className="navContainer">


<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#" id="navTitle">COLLABORATE</a>
    </div>

    <ul className="nav navbar-nav navbar-right">
      <li> <a href="login.html" id="login-register">Sign Up/ LogIn</a></li>
      
    </ul>
  </div>
</nav>
   
   </div> 
      	)
	}
});

// Export the componen back for use in other files
module.exports = Navbar; 
