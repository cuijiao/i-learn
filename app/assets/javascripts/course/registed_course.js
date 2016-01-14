//@cjsx React.DOM

var Registed = React.createClass({
    render: function(){
        var courses = this.props["registed_courses"];
        return(
            <div>
                <p className="tag">已学技能</p>
                <div className="courses">
                    {
                        courses.map(function(course, index){
                            return (
                                <Course course={course} key={index}/>
                            )
                        })
                    }
                </div>
            </div>

        );
    }
});