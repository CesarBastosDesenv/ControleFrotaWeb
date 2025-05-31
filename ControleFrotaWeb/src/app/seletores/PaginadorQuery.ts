import { Veiculo } from "../models/Veiculo"
import { Query } from "../core/models/query"

export class PaginadorQuery extends Query{

    public pageNumber: number | undefined;
    public pageSize: number | undefined;

}