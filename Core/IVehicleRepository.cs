using System.Collections.Generic;
using System.Threading.Tasks;
using vega.Core.Models;

namespace vega.Core
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id);
        Task<Vehicle> GetVehicleWithParameters(int id);
        Task<IEnumerable<Vehicle>> GetVehicles(VehicleQuery filter);
        void Add(Vehicle vehicle);
        void Remove(Vehicle vehicle);
    }
}