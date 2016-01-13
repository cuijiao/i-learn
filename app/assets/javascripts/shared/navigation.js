//@cjsx React.DOM

var Navigation = React.createClass({
    render: function(){
        var username = this.props["username"]
        return(
            <div>
                <ul className="row">
                    <li className="col-md-1">I learn</li>
                    <li className="col-md-1">技能</li>
                    <li className="col-md-7">我的</li>
                    <li className="col-md-1">创建</li>
                    <li className="col-md-1">{username}</li>
                    <li className="col-md-1">search</li>
                </ul>
            </div>
        );
    }
});