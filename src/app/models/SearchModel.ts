export type Selector = {
  id: number,
  label: string,
  uri: string
}

type CommonAttributes = {
  created: Date,
  edited: Date,
  url: string
}

interface IFilm extends CommonAttributes {
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,

  characters: Array<string>,
  planets: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
  species: Array<string>,
}

interface IPeople extends CommonAttributes {
  name: string,
  height: number | string,
  mass: number | string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,

  films: Array<string>,
  species: Array<string>,
  vehicles: Array<string>,
  starships: Array<string>
}
interface IPlanet extends CommonAttributes {
  name: string,
  rotation_period: number | string,
  orbital_period: number | string,
  diameter: number | string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: number | string,
  population: number | string,

  residents: Array<string>,
  films: Array<string>
}
interface ISpecie extends CommonAttributes {
  name: string,
  classification: string,
  designation: string,
  average_height: number | string,
  skin_colors: string,
  hair_colors: string,
  eye_colors: string,
  average_lifespan: number | string,
  homeworld: string,
  language: string,

  people: Array<string>,
  films: Array<string>
}
interface IStarship extends CommonAttributes {
  name: string,
  model: string,
  manufacturer: string,
  cost_in_credits: number | string,
  length: number | string,
  max_atmosphering_speed: number | string,
  crew: number | string,
  passengers: number | string,
  cargo_capacity: number | string,
  consumables: string
  hyperdrive_rating: string
  MGLT: number | string,
  starship_class: string,

  pilots: Array<string>,
  films: Array<string>,
}
interface IVehicle extends CommonAttributes {
  name: string,
  model: string,
  manufacturer: string,
  cost_in_credits: number | string,
  length: string,
  max_atmosphering_speed: number | string,
  crew: number | string,
  passengers: number | string,
  cargo_capacity: number | string,
  consumables: string,
  vehicle_class: string,

  pilots: Array<string>,
  films: Array<string>
}

export type ValidResults = Array<IFilm | IPeople | IPlanet | ISpecie | IStarship | IVehicle>;

export type APIResponse = {
  count: number,
  next: string | null,
  previous: string | null,
  results: ValidResults
}

export interface SearchModel {
  selectors: Array<Selector>,
  endpoint: string,
  query: string,
  results: ValidResults
}