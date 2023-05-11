using BusinessIntelligence_API.Api.Lojas.Services;

namespace BusinessIntelligence_API.Dependencias
{
    public static class DependenciesServices
    {
        public static void AddDependencies(this IServiceCollection services)
        {
            services.AddTransient<ILojasServices, LojasServices>();
        }
    }
}
