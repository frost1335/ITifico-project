import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PractiseAccordion from "../../components/PractiseAccordion/PractiseAccordion";
import PractiseQuestion from "../../components/PractiseQuestion/PractiseQuestion";

import "./Practise.scss";

const Practise = () => {
  const [practise, setPractise] = useState({
    fields: [
      {
        question: {
          title: "Question 1",
          description: "What will the following code:",
          code: `string name = "Tom";
Console.WriteLine(Name);`,
        },
        answer: {
          element: "text",
          content:
            "This program does not compile. The Console.WriteLine () method tries to display the value of the Name variable on the console, but the program does not have such a variable. The program has only a variable name. But since C # is a registry-dependent language, name is not equivalent to Name",
        },
      },
      {
        question: {
          title: "Question 2",
          description: "What will bring to the console the following code:",
          code: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace CacheExamples
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMemoryCache(); // Add memory cache dependencies 
            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            ...
        }
    }
}`,
        },
        answer: {
          element: "menu",
          content: {
            title: "Варіанти відповідей:",
            items: [
              "Tom",
              "Sam",
              "person",
              "The program will terminate with an error",
            ],
          },
        },
      },
      {
        question: {
          title: "Question 2",
          description: "What will bring to the console the following code:",
          code: `string name = "Tom";
Console.WriteLine(Name);`,
        },
        answer: {
          element: "text",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
      },
    ],
  });

  return (
    <div className="course__practise">
      <PractiseAccordion
        title={"Практичні завдання"}
        className="practise__container"
      >
        {practise ? (
          practise.fields.map((field, index) => (
            <React.Fragment key={index + "practise-fields"}>
              <PractiseQuestion question={field.question} />
              <PractiseAccordion answer={field.answer} />
            </React.Fragment>
          ))
        ) : (
          <p>Practise items not found</p>
        )}
        <div className="container__bottom">
          <Link to="#less" className="bottom__link">
            Згорнути
          </Link>
        </div>
      </PractiseAccordion>
    </div>
  );
};

export default Practise;
