//@cjsx React.DOM

var Course = React.createClass({
    course_detail_page_path: function(id){
        return "/course/"+id
    },

    render:function(){
        var course = this.props.course;
        return(
            <div className="course">
                <a href={this.course_detail_page_path(course.id)}>
                    <div className="course-background"></div>
                </a>
                {course.name}
            </div>
        );
    }
});
