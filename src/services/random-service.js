export default class RandomService {
    getFlights = async () => {
        const resp = await fetch('/api/flights');

        if (!resp.ok) {
            throw new Error(`Could not fetch, received ${resp.status}`)
        }

        const flights = await resp.json();

        return flights;
    }
}