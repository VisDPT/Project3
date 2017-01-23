import React from 'react';
import * as Blueprint from "@blueprintjs/core";

var Navbar = React.createClass({

	render: function(){

		return(
			<div>
			<nav class="pt-navbar .pt-dark">
  <div class="pt-navbar-group pt-align-left">
    <div class="pt-navbar-heading">Collaborate</div>
  </div>
  <div class="pt-navbar-group pt-align-right">
    <button class="pt-button pt-minimal pt-icon-home">Home</button>
    <button class="pt-button pt-minimal pt-icon-document">Files</button>
    <span class="pt-navbar-divider"></span>
    <button class="pt-button pt-minimal pt-icon-user"></button>
    <button class="pt-button pt-minimal pt-icon-notifications"></button>
    <button class="pt-button pt-minimal pt-icon-cog"></button>
  </div>
</nav>
</div>
			
		)
	}
});

// Export the componen back for use in other files
module.exports = Navbar;