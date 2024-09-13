import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Software Development Engineer</b>  with a passion for solving complex problems through efficient and elegant code. My experience spans various technologies, from front-end frameworks like React to backend solutions in Java and Python. I love working on large-scale applications that require attention to both detail and performance.
      </p>
    );
    const two = (
      <p>
        Outside of work, I enjoy expanding my knowledge, traveling, and continuously improving my technical skills. Whether mentoring others or exploring new technologies, I stay driven by my love for learning.

</p>
    );

    const tech_stack = [
      "Typescript",
      "Python",
      "React.js",
      "Java",
      "Javascript ES6+",
      "PHP"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Esmee van Leeuwen" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
