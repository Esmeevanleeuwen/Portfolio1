import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    // Removed spotlightProjects object and Carousel component

    const projects = {
      "Pokemon app": {
        desc:
          "A React and GraphQL app for searching and viewing Pokémon details.",
        techStack: "React.js, GraphQL",
        link: "https://github.com/Esmeevanleeuwen/PokemonApp",
        open: ""
      },
      "Virtual pet game": {
        desc:
          "A Java-based game where users care for a virtual pet. It uses object-oriented programming to handle actions and behavior, providing an interactive experience.",
        techStack: "Java",
        link: "https://github.com/Esmeevanleeuwen/virtual-pet",
        open: ""
      },
      "Recipes App": {
        desc:
          "A recipe search app that allows users to filter by dietary preferences and health needs. It integrates with the Edamam API to display nutritional and ingredient lists.",
        techStack: "Node.js (Express.js), React.js, PostgreSQL",
        link: "https://github.com/Esmeevanleeuwen/Recipes-app"
      },
      "Events App": {
        desc:
          "An event platform where users can browse, create, and filter events. It includes features like event registration and notifications, enhancing user convenience.",
        techStack: "Javascript, Node.js, React.js, MongoDB",
        link: "https://github.com/Esmeevanleeuwen/Eventspage",
        open: ""
      },
      "Weather App": {
        desc:
          "A Vue.js weather app delivering real-time data from the OpenWeather API.",
        techStack: "Vue.js, API, Javascript",
        link: "https://github.com/Esmeevanleeuwen/WeatherApp",
        open: ""
      },
      "Instagram clone": {
        desc:
          "A replica of Instagram built for training police in digital detection, featuring core functionalities such as posting, liking, and commenting.",
        techStack: "Javascript, PHP",
        link: "https://github.com/Esmeevanleeuwen/social-media",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
