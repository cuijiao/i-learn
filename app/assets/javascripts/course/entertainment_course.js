//@cjsx React.DOM

var Entertainment = React.createClass({
    render: function(){
        var courses = this.props["entertainment_courses"];
        return(
          <div>
          <p>休闲技能</p>
            <div>
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
