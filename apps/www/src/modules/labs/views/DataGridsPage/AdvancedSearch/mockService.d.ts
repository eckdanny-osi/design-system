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
declare class PeopleService {
    DELAY: number;
    search(opts: DataGridRequest): Promise<DataGridResponse<Person>>;
}
export default PeopleService;
