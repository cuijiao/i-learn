//@cjsx React.DOM

var Learn = React.createClass({

    render(){
        var courses = this.props["learn_courses"];
        return(
            <div>
                {
                    courses.forEach(function(course){
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