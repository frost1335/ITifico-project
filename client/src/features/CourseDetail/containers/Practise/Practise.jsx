import React from "react";

import "./Practise.scss";

const code = `
    
using Microsoft.AspNetCore.Builder;
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
}`;

class PreFormattedCode extends React.Component {
  render() {
    return <React.Fragment>{code}</React.Fragment>;
  }
}

const Practise = () => {
  return (
    <div className="course__practise">
      <React.Fragment>
        {" "}
        <pre>{`${code}`}</pre>
      </React.Fragment>
    </div>
  );
};

export default Practise;
