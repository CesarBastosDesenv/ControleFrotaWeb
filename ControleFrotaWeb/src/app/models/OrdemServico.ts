export class OrdemServico {
    public id : number;
    public veiculoId : number;
    public dtServico: Date;
    public tipoManutencao : string;
    public defeitoApresentado : string;
    public executor : string;
    public valorMaoObra : number;
    public status : boolean;
    public pageNumber : number;
    public pageSize : number;
    public paramId : number;

    constructor (data: any ={}) {
        if (data == null || data == undefined) { data = {}; }
        
    this.id = data.id;
    this.veiculoId = data.veiculoId;
    this.dtServico = data.dtServico;
    this.tipoManutencao = data.tipoManutencao;
    this.defeitoApresentado = data.defeitoApresentado;
    this.executor = data.executor;
    this.valorMaoObra = data.valorMaoObra;
    this.status = data.status;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    this.paramId = data.paramId;
    }
}