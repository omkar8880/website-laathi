import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container" style={{backgroundColor:"#fff" , paddingTop : "2rem"}}>
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
          "Meet the Heartbeats Behind Laathi: Our Dedicated Team of Visionaries!"
          </p>
        </div>
        <div id="row" style={{paddingLeft:"2rem" , paddingRight : "2rem"}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" style={{height:"22rem" , width : "20rem"}}/>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p className="job-text">{d.job}</p> {/* Added custom class */}
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Team;
