//@cjsx React.DOM

var Entertainment = React.createClass({
    render(){
        var courses = this.props["entertainment_courses"];
        return(
            <div>
                {
                    courses.map(function(course){
                        return (
                            <div>
                                {course.name}
                            </div>
                        )
                    })
                }
            </div>

        );
    }
});