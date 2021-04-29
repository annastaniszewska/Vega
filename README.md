# Vega
Project based on the course "Build a Real-world App with ASP.NET Core 1.0+ and Angular 2+" provided by Code with Mosh. It's a simple web application where the user logs in by Auth0. Includes search (pagination, ordering) and maintain data about vehicles (make, model, photos, contact).

## To run the project:
```
$ npm install
$ dotnet restore
$ dotnet user-secrets set ConnectionStrings:Default "<YOUR CONNETION STRING>"
$ dotnet ef database update
$ dotnet watch run
```
## Technologies

Instead using versions mentioned in the title, there is .NET Core 3.1 and Angular 9 used.

## Screenshots

The main page consists of vehicles list. It is available for non-authorized users.
![mainPage](https://user-images.githubusercontent.com/55839520/116467353-de56d180-a86f-11eb-93c1-7e6d7943bca4.png)

Non-authorized user is able to display vehicle details and photos.

![vehiclePage](https://user-images.githubusercontent.com/55839520/116535319-ecded080-a8e3-11eb-9b6e-9fb5255f5eee.png)

![photosPage](https://user-images.githubusercontent.com/55839520/116467694-41e0ff00-a870-11eb-8e9d-17184abdaea7.png)

User is (registered) logged in by Auth0.

![authorizationPage](https://user-images.githubusercontent.com/55839520/116467810-650bae80-a870-11eb-8c87-a3321945b36e.png)

When user is successfully logged in, there's a possibility to create a new vehicle.

![mainPageLoggedIn](https://user-images.githubusercontent.com/55839520/116467727-4c02fd80-a870-11eb-89de-2c37a07cb116.png)

![newVehicle](https://user-images.githubusercontent.com/55839520/116467987-9dab8800-a870-11eb-9591-90652abb4ee9.png)

User is able to edit vehicle details, upload photos and delete a vehicle.

![vehiclePageLoggedIn](https://user-images.githubusercontent.com/55839520/116468042-ae5bfe00-a870-11eb-9f70-ffa07ef0c33e.png)

![photosPageLoggedIn](https://user-images.githubusercontent.com/55839520/116468075-b74ccf80-a870-11eb-9937-167907b3965a.png)

On the admin page, there is access token displayed and an example chart.

![adminPage](https://user-images.githubusercontent.com/55839520/116468346-072b9680-a871-11eb-8a6e-945f046ad557.png)
