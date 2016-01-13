//@cjsx React.DOM

var Learn = React.createClass({
    render(){
        var courses = this.props["learn_courses"];
        return(
            <div>
                <p>学习技能</p>
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