interface SortTerm {
  /** Field on which to sort */
  field: String;
  /** Descending? (default false) */
  desc?: boolean;
}

interface DataGridQueryTerm {
  /** @todo */
  field: String;
  /** @todo */
  value: String | Number | Boolean;
}

interface DataGridRequest {
  /** Integer (offset) */
  from: Number;
  /** Integer (limit) */
  size: Number;
  /** Sort by ... */
  sort?: Array<SortTerm>;
  /** Query terms */
  query?: Array<DataGridQueryTerm>;
}

interface DataGridResponse<T> {
  /** The resultset */
  records: Array<T>;
  /** Response out-of-band info */
  meta: {
    /** The total number of records */
    total: Number;
    /** The processed query params (from the request) */
    request: Request;
  };
}
