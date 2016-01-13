//@cjsx React.DOM

var SignUp = React.createClass({
    render: function(){
        return(
            <form id="signup" method="get" action="/create_user">
                <h1>Sign Up</h1>
                <fieldset className="login-inputs">
                    <input type="text" name="username" placeholder="Username" autofocus required />
                    <input type="password" name="password" placeholder="Password" required />
                </fieldset>
                <fieldset className="sign-up-actions">
                    <input type="submit" id="submit" value="Sign Up" />
                </fieldset>
            </form>
        );
    }
});