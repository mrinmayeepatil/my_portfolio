/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Telemetrix Insighthub",
    description:
      "The Telemetrix InsightHub project is a thorough arrangement intended for constant observing and investigation of different measurements inside a framework, utilizing the strong capacities of Influx DB. This telemetry project gives a bound together stage to gather, store, and imagine time-series information, offering significant bits of knowledge into the exhibition. The backbone of the Telemetrix InsightHub is Influx DB, a robust time-series database known for its scalability and efficiency in handling vast amounts of time stamped data. We have used react js to create the front end, node js for backend and grafana for visualization of data.",
    // url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "LinQ App",
    description:
      "It is a chatting app for students and teachers where teachers can interact with students and students can interact with both teachers and students themselves. Teachers can assign assignments to students and students can submit their work and also can ask their doubts. Basically, this app is like google classroom with added features like realtime messaging. In this project, we have used", 
        //  url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  // {
  //   title: "My Resume Site",
  //   description:
  //     "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
  //   url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  // },
  // {
  //   title: "GitHub Codespaces and github.dev",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
