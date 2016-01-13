//@cjsx React.DOM

var Entertainment = React.createClass({
    render(){
        var courses = this.props["entertainment_courses"];
        return(
          <div>
          <p>休闲技能</p>
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
          </div>

        );
    }
});
