//@cjsx React.DOM

var Login = React.createClass({
    render: function(){
        var validate_path = this.props.validate
        var signup_path = this.props.signup
        return(
            <form id="login" method="get" action= {validate_path}>
                <h1>Log In</h1>
                <fieldset className="login-inputs">
                    <input type="text" name="username" placeholder="Username" autofocus required />
                    <input type="password" name="password" placeholder="Password" required />
                </fieldset>
                <fieldset className="login-actions">
                    <input type="submit" id="submit" value="Log in" />
                    <a href={signup_path}>Register</a>
                </fieldset>
            </form>
        );
    }
});