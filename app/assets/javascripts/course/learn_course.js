//@cjsx React.DOM

var Learn = React.createClass({
    render: function(){
        var courses = this.props["learn_courses"];
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

module.exports = Learn;