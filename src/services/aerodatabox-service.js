export default class AerodataboxService {
    constructor(airport, key) {
        this.airport = airport;
        this.date = new Date();
        this.key = key;
    }

    addZeros = (s) => `0${s}`.slice(-2);

    formatDate = (date) => {
        console.log(date);
        const time = `${this.addZeros(date.getHours())}:${this.addZeros(date.getMinutes())}`
        const month = this.addZeros((date.getMonth() + 1).toString());
        const day = this.addZeros(date.getDate());
        return `${date.getFullYear()}-${month}-${day}T${time}`;
    }
    
    getFlights = async () => {
        const dateFrom = this.formatDate(this.date);
        const dateCopy = new Date(this.date.valueOf());
        dateCopy.setHours(this.date.getHours() + 2);
        const dateTo = this.formatDate(dateCopy);

        const resp = await fetch(`https://aerodatabox.p.rapidapi.com/flights/airports/icao/${this.airport}/${dateFrom}/${dateTo}?direction=Both`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
                "x-rapidapi-key": this.key,
            }
        });

        if (!resp.ok) {
            throw new Error(`Could not fetch, received ${resp.status}`)
        }
        
        const flights = await resp.json()

        return flights;
    }

}