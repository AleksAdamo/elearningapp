using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eLearnapp.Data;
using eLearnapp.Models;
using eLearnapp.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace eLearnapp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Schnittstelle regestrieren
            services.AddScoped<IUserRepository, EfUserRepository>();
            services.AddScoped<IKursRepository, EfKursRepository>();
            services.AddScoped<IKategorieRepository, EfKategorieRepository>();
            services.AddScoped<IAbfrageRepository, EfAbfrageRepository>();
            services.AddScoped<ITeilnahmeRepository, EfTeilnahmeRepository>();
            services.AddMvc()
                .AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            //DbContect registrieren
            services.AddDbContext<KursContext>(
                options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, KursContext db)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            //Speicherung von Daten aufrufen
            DbInitializer.Initialize(db, env);

            app.UseDefaultFiles(); //damit man eine Index HTML ausführen kann ohne es anzugeben
            app.UseStaticFiles(); // Damit Asp Net Core in der Lage ist statische Dateien auszuliefern

            app.UseMvc();
        }
    }
}
