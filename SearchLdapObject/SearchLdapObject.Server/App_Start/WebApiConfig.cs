using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.OData;
using System.Web.Http.OData.Query;
using System.Web.Http.OData.Routing;
using System.Web.Http.OData.Extensions;
using System.Web.Http.OData.Builder;
using System.Web.Http.OData.Batch;
using System.Web.Http.OData.Formatter;
using Microsoft.Data.Edm;
using LightSwitchApplication.Models;
using System.Diagnostics;

// Install-Package Microsoft.AspNet.WebApi.OData -ProjectName SearchLdapObject.Server
// Install-Package Microsoft.AspNet.WebApi.WebHost -ProjectName SearchLdapObject.Server
    
namespace LightSwitchApplication
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var routePrefixVersion = "v1";
            Debug.Write("WebApiConfig::Register() START");
            config.Routes.MapODataServiceRoute(
                routeName: "Legacy.svc"
                ,
                routePrefix: string.Format("{0}/Legacy.svc", routePrefixVersion)
                ,
                model: GetModelLegacy("Legacy")
                ,
                batchHandler: new DefaultODataBatchHandler(GlobalConfiguration.DefaultServer)
                );

            config.Routes.MapODataServiceRoute(
                routeName: "Utilities.svc"
                ,
                routePrefix: string.Format("{0}/Utilities.svc", routePrefixVersion)
                ,
                model: GetModelUtilities("Utilities")
                ,
                batchHandler: new DefaultODataBatchHandler(GlobalConfiguration.DefaultServer)
                );

            config.MapHttpAttributeRoutes();
            //config.EnableQuerySupport();
            Debug.Write("WebApiConfig::Register() END");
        }
        private static IEdmModel GetModelLegacy(string ContainerName)
        {
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.ContainerName = ContainerName;
            builder.EntitySet<Models.ActiveDirectoryUser>("ActiveDirectoryUsers");
            //builder.EntitySet<Models.CountDown>("CountDowns");
            //builder.EntitySet<Models.Command>("Commands");

            //Controllers.TasksController.ModelBuilder(builder);
            //Controllers.VirtualMachinesController.ModelBuilder(builder);
            //Controllers.NetworkDevicesController.ModelBuilder(builder);
            return builder.GetEdmModel();
        }
        private static IEdmModel GetModelUtilities(string ContainerName)
        {
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.ContainerName = ContainerName;
            Controllers.ActiveDirectoryUsersController.ModelBuilder(builder);
            //Controllers.MachinesController.ModelBuilder(builder);
            //Controllers.VirtualMachinesController.ModelBuilder(builder);
            ////Controllers.DisksController.ModelBuilder(builder);
            //Controllers.TasksController.ModelBuilder(builder);
            return builder.GetEdmModel();
        }
    }
}
