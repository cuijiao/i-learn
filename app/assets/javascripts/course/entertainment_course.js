//@cjsx React.DOM

var Entertainment = React.createClass({
    render: function(){
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

module.exports = Entertainment;