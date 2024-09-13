import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Winc Academy": {
      jobTitle: "Software Development Engineer @",
      duration: "Dec 2021 - Jun 2024",
      desc: [
        "At Winc, I’ve had the incredible opportunity to share my passion for React and front-end development with a diverse range of students. I teach live lessons on React, Python, and UX design, providing hands-on guidance and mentorship to help students grow their skills and build real-world applications.",
        "The most rewarding part of my role is watching students develop confidence as they build their first projects and seeing how they progress. My goal is to make complex technical concepts accessible, while inspiring them to think creatively about solving problems with code."
      ]
    },
    Voidmanager: {
      jobTitle: "Senior Software engineer  @",
      duration: "Jul 2021 - Nov 2023",
      desc: [
      "As a software developer at Voidmanager, I led the development of innovative automation tools that dramatically improved server setup efficiency, cutting down manual processes and optimizing workflows. My tools were pivotal in transforming how the team worked, reducing configuration time by over 50%, which allowed the team to focus on delivering quality to clients faster." ,
      "Beyond technical development, I collaborated closely with stakeholders to understand their needs and delivered solutions tailored to those requirements. Every project was a new challenge to solve, and I embraced that excitement with a problem-solving mindset, always looking for ways to innovate and push boundaries." ]
    },
    "Ecoteers": {
      jobTitle: "Web Analytics Developer  @",
      duration: "Oct 2020 - Sep 2022",
      desc: [
        "In this role, I focused on developing and implementing digital strategies that maximized online visibility and user engagement. By leveraging advanced web analytics and performance optimization tools, I drove traffic growth and improved conversion rates by 30%.",
        "My technical contributions included the creation of automated reports, integration of SEO tools, and performance tracking dashboards to provide actionable insights for stakeholders. This role required a blend of technical expertise and a deep understanding of digital trends, allowing me to craft tailored strategies for clients across various industries."
      ]
    },
    ByTommorow: {
      jobTitle: "Frontend Developer  @",
      duration: "Sep 2022 - Jun 2023",
      desc: [
        "My internship at ByTomorrow was focused on building and maintaining applications using Vue.js and PHP. I worked on developing a low-code platform, allowing users with minimal technical expertise to create websites easily.",
        "Through this internship, I gained hands-on experience with test-driven development (TDD) and collaborated with cross-functional teams to deliver efficient, scalable solutions. This internship taught me the fundamentals of delivering quality software while balancing the technical and creative aspects of development."
      ]
    },

    Ixora: {
      jobTitle: "Software Developer Intern @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
       "During my internship at iXora, I was responsible for leading the development of a key interface for a data center project. This project not only allowed me to improve my coding skills but also to understand the importance of user-centric design and scalability in large-scale systems.",
       "Working alongside seasoned engineers, I gained valuable experience in managing both front-end and back-end systems, ensuring the seamless integration of new features while optimizing performance and usability."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
