import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ordemServicoService{
    
    apiUrl = 'http://localhost:5243/api/OrdemServico';
    
    httpOpitions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
           
            
        })
    }


    constructor(
        private httpClient: HttpClient
    ){ }

    

    public CadastrarOrdemServico(veiculo: any): Observable<any>{
        return this.httpClient.post<any>(this.apiUrl, veiculo, this.httpOpitions);
    }

    public ListarOrdemServico(params: any): Observable<any> {
        return new Observable<any>(observer => {            
            this.httpClient.get(this.apiUrl, {params: params})
            .pipe(
                catchError((err) => {
                observer.error(err);
                throw err;
            }),
            map(response => {
                return response;
            })
            ).subscribe(response => {
                observer.next(response);
                observer.complete();
            });            
        });
    }

    public ListarOrdemServicoPorVeiculo(params: any): Observable<any> {
        return new Observable<any>(observer => {            
            this.httpClient.get(this.apiUrl + '/' + params.ParamId + '/list', {params: params})
            .pipe(
                catchError((err) => {
                observer.error(err);
                throw err;
            }),
            map(response => {
                return response;
            })
            ).subscribe(response => {
                observer.next(response);
                observer.complete();
            });            
        });
    }

    public ListarOrdemServicoPorId(id: any): Observable<any> {
                 
            return this.httpClient.get(this.apiUrl + '/' + id)
            .pipe(
                map(response => {
                    return response;
                })
            );
            
                      
        
    }

    }