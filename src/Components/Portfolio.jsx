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
import image from "../images/About3.jpg";

const imageAltText = "Get Insight from Data";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Process of Data Analysis 🎉",
    description:
      // eslint-disable-next-line prettier/prettier
      "The Data Analytics Lifecycle is a structured framework that outlines the various stages and processes involved in analyzing data to derive meaningful insights and make informed decisions."
  ,
    url: "https://www.bing.com/images/search?view=detailV2&ccid=KtAjrqpJ&id=D32B6971EDB0BE0048A6F8282DEDE24E124366DD&thid=OIP.KtAjrqpJa63UHxk5XNkrIQHaHa&mediaurl=https%3A%2F%2Ftechroversolutions.com%2Fimages%2FData_Analytics.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.2ad023aeaa496badd41f19395cd92b21%3Frik%3D3WZDEk7i7S0o%252bA%26pid%3DImgRaw%26r%3D0&exph=600&expw=600&q=10+thinks+about+data+analysis&form=IRPRST&ck=A186B8CDE0FD8EFC11FB0D5D3A78C4F9&selectedindex=9&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_KbHFqZp9*cp_7566FE23F3D2A79D51A0639FDEEC2672*mid_58BBB2D41DC3FF71BA58B35F4E3DEBCA5E0FAA0B*thid_OIP.KbHFqZp93iwPR86XhiazUwHaD4&vt=0&sim=11&iss=VSI&simid=607995201614392475&ajaxhist=0&ajaxserp=0",
  },
  {
    title: "Projects for  Begginers",
    // eslint-disable-next-line prettier/prettier
    description:
      "Here are some basic projects to kick start your data journey",
    url: "https://github.com/NeelamMahraj?tab=repositories",
  },
  {
    title: "My Resume Site",
    // eslint-disable-next-line prettier/prettier
    description:
      "You can find my achienvements on linkedin and connect with me ",
    url: "https://www.linkedin.com/in/neelam-mahraj-70584823a/",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
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
