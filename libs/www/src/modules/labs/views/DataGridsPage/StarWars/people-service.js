import axios from 'axios';

const SERVICE_BASE_URL = 'https://swapi.co/api';

const SERVICE_ENDPOINT = '/people';

class PeopleService {
  constructor(spec) {
    this._axios = axios.create(spec);
  }
  get(url = SERVICE_ENDPOINT, config) {
    return this._axios.get(url, config);
  }
  static create(opts = {}) {
    return new PeopleService({
      baseURL: SERVICE_BASE_URL,
      ...opts,
    });
  }
}

export default PeopleService;
