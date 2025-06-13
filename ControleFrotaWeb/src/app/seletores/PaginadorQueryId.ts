import { OrdemServico } from "../models/OrdemServico"
import { Queryid } from "../core/models/queryid"

export class PaginadorQueryId extends Queryid{

    public pageNumber: number | undefined;
    public pageSize: number | undefined;
    public paramId: number | undefined;

}