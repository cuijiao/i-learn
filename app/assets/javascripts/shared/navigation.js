//@cjsx React.DOM

var Navigation = React.createClass({
    render: function(){
        var username = this.props["username"]
        var course_homepage_path = this.props["course_homepage_path"]
        var show_all_courses_path = this.props["show_all_courses_path"]
        return(
            <div>
                <ul className="row">
                    <li className="col-md-1"><a href={course_homepage_path}>I learn</a></li>
                    <li className="col-md-1"><a href={show_all_courses_path}>技能</a></li>
                    <li className="col-md-7">我的</li>
                    <li className="col-md-1">创建</li>
                    <li className="col-md-1">{username}</li>
                    <li className="col-md-1">search</li>
                </ul>
            </div>
        );
    }
});