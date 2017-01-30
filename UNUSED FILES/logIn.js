var React = require('react');


//import * as Blueprint from "@blueprintjs/core";


var login = React.createClass({


render: function(){

		return(

<div className= "row">

 <div className="col-md-4">

    <div id="logbox">
      <form id="signup" >
        <h1>account login</h1>
        <input name="user[email]" type="email" placeholder="enter your email" className="input pass"/>
        <input name="user[password]" type="password" placeholder="enter your password" required="required" className="input pass"/>
        <input type="submit" value="Sign me in!" className="inputButton"/>
        
      </form>
    </div>
    </div>


   
 <div className="col-md-8">
 
    <div id="logboxsignup">
      <form id="signup" method="post" action="/signup">
        <h1>create an account</h1>

        <input name="providerNameInput" type="text" placeholder="Enter Your Name" className="input pass"/>
        <input name="providerIDInput" type="text" placeholder="Enter Your Texas State License Number" className="input pass"/>

        <input name="providerSpecialtyInput" type="text" placeholder="Are you a PT, OT, ST, or Other? Specify if Other." className="input pass"/>
        <input name="providerSettingInput" type="text" placeholder="Are you in acute, out-patient, school-based, etc? " className="input pass"/>


        <input name="providerPhoneInput" type="text" placeholder="Enter Your Name" className="input pass"/>
        <input name="providerEmailInput" type="email" placeholder="Email address" className="input pass"/>



        <input name="user[name]" type="text" placeholder="What's your username?" pattern="^[\w]{3,16}$" autofocus="autofocus" required="required" className="input pass"/>
        <input name="user[password]" type="password" placeholder="Choose a password" required="required" className="input pass"/>
        <input name="user[password2]" type="password" placeholder="Confirm password" required="required" className="input pass"/>



        <input type="submit" value="Sign me up!" className="inputButton"/>
        
      </form>
    </div>
    </div>
  </div>

  


   

      	)
	}
});

// Export the componen back for use in other files
module.exports = login; 
