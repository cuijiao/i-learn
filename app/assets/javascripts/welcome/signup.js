//@cjsx React.DOM

var SignUp = React.createClass({
    render(){
        return(
            <form id="signup" method="post" action="/create_user">
                <h1>Sign Up</h1>
                <fieldset className="login-inputs">
                    <input type="text" name="username" placeholder="Username" autofocus required />
                    <input type="password" name="password" placeholder="Password" required />
                </fieldset>
                <fieldset className="login-actions">
                    <input type="submit" id="submit" value="Sign Up" />
                </fieldset>
            </form>
        );
    }
});