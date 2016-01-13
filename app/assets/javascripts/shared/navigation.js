//@cjsx React.DOM

var Navigation = React.createClass({
    render: function(){
        var username = this.props["username"]
        return(
            <div>
                <ul>
                    <li>learn</li>
                    <li>技能</li>
                    <li>我的</li>
                    <li>创建</li>
                    <li>{username}</li>
                    <li>search</li>
                </ul>
            </div>
        );
    }
});