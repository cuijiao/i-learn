//@cjsx React.DOM

var Login = React.createClass({
    render: function(){
        return(
            <form id="login" method="post" action="/validate">
                <h1>Log In</h1>
                <fieldset className="login-inputs">
                    <input type="text" name="username" placeholder="Username" autofocus required />
                    <input type="password" name="password" placeholder="Password" required />
                </fieldset>
                <fieldset className="login-actions">
                    <input type="submit" id="submit" value="Log in" />
                    <a href="/signup">Register</a>
                </fieldset>
            </form>
        );
    }
});