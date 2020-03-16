import asyncio
import datetime
import random

from aiohttp import web


AIRPORTS = [
    {'icao': 'EDDL', 'iata': 'DUS', 'name': 'Düsseldorf'},
    {'icao': 'LEBL', 'iata': 'BCN', 'name': 'Barcelona'},
    {'icao': 'EVRA', 'iata': 'RIX', 'name': 'Riga'},
    {'icao': 'LFPG', 'iata': 'CDG', 'name': 'Paris'},
    {'icao': 'LKPR', 'iata': 'PRG', 'name': 'Prague'},
    {'icao': 'LTFM', 'iata': 'IST', 'name': 'Istanbul'},
]
NUMBER_PREFIX = ['SU', 'FV', 'AV', 'N4']
TERMINALS = ['A', 'B', 'C', 'D', 'E']
STATUSES = [
    'Unknown',
    'Expected',
    'EnRoute',
    'CheckIn',
    'Boarding',
    'GateClosed',
    'Delayed',
    'Approaching',
    'Canceled',
    'Diverted',
]
AIRLINE_NAMES = [
    'Aeroflot',
    'Runair',
    'KLM',
    'Emirates Airlines',
    'S7',
    'UTAIR',
]


async def handle(request):
    return web.json_response(
        await asyncio.get_event_loop().run_in_executor(None, generate_flights),
    )


def generate_flights():
    return {
        'departures': get_flights(),
        'arrivals': get_flights(),
    }


def get_flights(num=25):
    flights = {}
    while len(flights) != num:
        flight = get_flight()
        flights[flight['number']] = flight
    return list(flights.values())


def get_flight():
    return {
        'movement': {
            'airport': random.choice(AIRPORTS),
            'scheduledTimeLocal': get_date(),
            'actualTimeLocal': get_date(),
            'terminal': random.choice(TERMINALS),
        },
        'number': (
            random.choice(NUMBER_PREFIX) + ' ' + str(random.randrange(1, 9999))
        ),
        'status': random.choice(STATUSES),
        'airline': {'name': random.choice(AIRLINE_NAMES)},
    }


def get_date():
    return (
        datetime.datetime.now()
        + datetime.timedelta(minutes=random.randrange(120))
    ).strftime('%Y-%m-%d %H:%M+03:00')


app = web.Application()
app.add_routes([web.get('/api/flights', handle)])


if __name__ == '__main__':
    web.run_app(app)
