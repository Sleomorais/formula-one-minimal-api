import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({
    logger: true,
});

server.register(cors,{
    origin: "*",
})

const teams = [
    { id: 1, name: "Ferrari", country: "Italy" },
    { id: 2, name: "Mercedes", country: "Germany" },
    { id: 3, name: "Red Bull Racing", country: "Austria" },
    { id: 4, name: "McLaren", country: "United Kingdom" },
    { id: 5, name: "Williams", country: "United Kingdom" },
    { id: 6, name: "Aston Martin", country: "United Kingdom" },
    { id: 7, name: "Haas", country: "United States" },
    { id: 8, name: "Audi", country: "Germany" },
    { id: 9, name: "Alpine", country: "France" },
    { id: 10, name: "Racing Bulls", country: "Italy/United Kingdom" },
    { id: 11, name: "Cadillac", country: "United States" }
];

const drivers = [
    { id: 1, name: "Lando Norris", team: "McLaren", nationality: "British" },
    { id: 2, name: "Oscar Piastri", team: "McLaren", nationality: "Australian" },
    { id: 3, name: "George Russell", team: "Mercedes", nationality: "British" },
    { id: 4, name: "Kimi Antonelli", team: "Mercedes", nationality: "Italian" },
    { id: 5, name: "Max Verstappen", team: "Red Bull Racing", nationality: "Dutch" },
    { id: 6, name: "Isack Hadjar", team: "Red Bull Racing", nationality: "French" },
    { id: 7, name: "Charles Leclerc", team: "Ferrari", nationality: "Monégasque" },
    { id: 8, name: "Lewis Hamilton", team: "Ferrari", nationality: "British" },
    { id: 9, name: "Alex Albon", team: "Williams", nationality: "Thai" },
    { id: 10, name: "Carlos Sainz", team: "Williams", nationality: "Spanish" },
    { id: 11, name: "Arvid Lindblad", team: "Racing Bulls", nationality: "British" },
    { id: 12, name: "Liam Lawson", team: "Racing Bulls", nationality: "New Zealander" },
    { id: 13, name: "Lance Stroll", team: "Aston Martin", nationality: "Canadian" },
    { id: 14, name: "Fernando Alonso", team: "Aston Martin", nationality: "Spanish" },
    { id: 15, name: "Esteban Ocon", team: "Haas", nationality: "French" },
    { id: 16, name: "Oliver Bearman", team: "Haas", nationality: "British" },
    { id: 17, name: "Nico Hülkenberg", team: "Audi", nationality: "German" },
    { id: 18, name: "Gabriel Bortoleto", team: "Audi", nationality: "Brazilian" },
    { id: 19, name: "Pierre Gasly", team: "Alpine", nationality: "French" },
    { id: 20, name: "Franco Colapinto", team: "Alpine", nationality: "Argentine" },
    { id: 21, name: "Sergio Pérez", team: "Cadillac", nationality:"Mexican" },
    { id: 22, name: "Valtteri Bottas", team: "Cadillac", nationality: "Finnish" }
];

interface DriverParams {
    id: string;
    name: string;
    team: string;
}

interface TeamParams {
    id: string;
    name: string;
    country: string;
}

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return {drivers};
});

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if (!driver){
        response.type("application/json").code(404);
        return { message: "Driver not found" };
    } else {
        response.type("application/json").code(200);
        return driver;
    }
});

server.get<{Params: TeamParams}>("/teams/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const team = teams.find(t => t.id === id);
    if (!team){
        response.type("application/json").code(404);
        return { message: "Team not found" };
    } else {
        response.type("application/json").code(200);
        return team;
    }
});


server.listen({ port: 3000}, () => {
    console.log("Server running on http://localhost:3000");
});
