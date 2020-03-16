
const formatFlights = flights => flights.map(flight => {
    const {
        movement: {
            airport: {
                name: city
            },
            scheduledTimeLocal: scheduledTime,
            actualTimeLocal: actualTime,
            terminal
        },
        number,
        status,
        airline: {
            name: airline
        }
    } = flight;
    
    return { 
        scheduledTime, 
        actualTime, 
        city, 
        airline, 
        number, 
        terminal, 
        status };
}).sort((a, b) => a.actualTime > b.actualTime ? 1 : -1);

export { formatFlights };