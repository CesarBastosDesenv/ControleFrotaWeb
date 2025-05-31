export class Veiculo {
    public id : number;
    public veiculoNome : string;
    public status : boolean;
    public pageNumber : number;
    public pageSize : number;

    constructor (data: any ={}) {
        if (data == null || data == undefined) { data = {}; }
        
    this.id = data.id;
    this.veiculoNome = data.veiculoNome;
    this.status = data.status;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    }
}