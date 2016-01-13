//@cjsx React.DOM

var Course = React.createClass({
    render:function(){
        var course = this.props.course;
        console.log(course);
        return(
            <div className="course">
                <div className="course-background">
                </div>

                {course.name}

            </div>

        );
    }
});
