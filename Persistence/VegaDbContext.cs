using Microsoft.EntityFrameworkCore;
using vega.Models;

namespace vega.Persistence
{
    public class VegaDbContext : DbContext
    {
        public DbSet<Make> Makes { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Feature> Features { get; set; }
        
        public VegaDbContext(DbContextOptions<VegaDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Make>()
                .Property(v => v.Name)
                .IsRequired()
                .HasMaxLength(255);

            modelBuilder.Entity<Model>()
                .Property(v => v.Name)
                .IsRequired()
                .HasMaxLength(255);

            modelBuilder.Entity<Model>()
                .ToTable("Models");

            modelBuilder.Entity<Model>()
                .HasOne(m => m.Make)
                .WithMany(m => m.Models)
                .HasForeignKey(m => m.MakeId);

            modelBuilder.Entity<Vehicle>()
                .Property(v => v.ContactName)
                .IsRequired()
                .HasMaxLength(255);

            modelBuilder.Entity<Vehicle>()
                .Property(v => v.ContactEmail)
                .HasMaxLength(255);

            modelBuilder.Entity<Vehicle>()
                .Property(v => v.ContactPhone)
                .IsRequired()
                .HasMaxLength(255);

            modelBuilder.Entity<Feature>()
                .Property(v => v.Name)
                .IsRequired()
                .HasMaxLength(255);

            modelBuilder.Entity<VehicleFeature>()
                .HasKey(vf => new { vf.VehicleId, vf.FeatureId });

            base.OnModelCreating(modelBuilder);
        }
    }
}