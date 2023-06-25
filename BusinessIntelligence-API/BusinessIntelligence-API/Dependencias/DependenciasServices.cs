using BusinessIntelligence_API.Api.Auth.Services;
using BusinessIntelligence_API.Api.Home.Services;
using BusinessIntelligence_API.Api.Lojas.Services;

namespace BusinessIntelligence_API.Dependencias
{
    public static class DependenciesServices
    {
        public static void AddDependencies(this IServiceCollection services)
        {
            services.AddTransient<ILojasServices, LojasServices>();
            services.AddTransient<IHomeServices, HomeServices>();
        }
    }
}
