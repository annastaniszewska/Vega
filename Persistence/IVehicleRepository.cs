using System.Threading.Tasks;
using vega.Models;

namespace vega.Persistence
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id);
        Task<Vehicle> GetVehicleWithParameters(int id);
        void Add(Vehicle vehicle);
        void Remove(Vehicle vehicle);
    }
}