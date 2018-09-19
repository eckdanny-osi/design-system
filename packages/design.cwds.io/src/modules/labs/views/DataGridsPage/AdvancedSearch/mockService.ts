const data = require('../data/people.json') as Person[];

interface Person {
  _id: string;
  index: number;
  isActive: boolean;
}

interface SortTerm {
  /** Field on which to sort */
  field: string;
  /** Descending? (default false) */
  desc?: boolean;
}

interface DataGridQueryTerm {
  /** @todo */
  field: string;
  /** @todo */
  value: string | number | boolean;
}

interface DataGridRequest {
  /** Integer (offset) */
  from: number;
  /** Integer (limit) */
  size: number;
  /** Sort by ... */
  sort?: SortTerm[];
  /** Query terms */
  query?: DataGridQueryTerm[];
}

interface DataGridResponse<T> {
  /** The resultset */
  records: T[];
  /** Response out-of-band info */
  meta: {
    /** The total number of records */
    total: number;
    /** The processed query params (from the request) */
    request: DataGridRequest;
  };
}

class PeopleService {
  DELAY = 1000;
  search(opts: DataGridRequest): Promise<DataGridResponse<Person>> {
    // console.log(opts);
    const pageSize = opts.size;
    const from = opts.from || 0;
    return new Promise(resolve => {
      setTimeout(() => {
        const records = data.slice(from, pageSize);
        resolve({
          records,
          meta: {
            total: data.length,
            request: opts,
          },
        });
      }, this.DELAY);
    });
    // return new Promise<DataGridResponse<Person[]>>(resolve => {
    //   setTimeout(() => {
    //     const out = data.slice(from, pageSize);
    //     resolve(out);
    //   }, this.DELAY);
    // });
  }
}

export default PeopleService;
