//@cjsx React.DOM

var Learn = React.createClass({
    render: function(){
        var courses = this.props["learn_courses"];
        return(
            <div>
                <p className="tag">学习技能</p>
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