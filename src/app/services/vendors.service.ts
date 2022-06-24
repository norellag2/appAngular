import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {
  private vendorsEndPoint = 'http://localhost:8080/api/proveedores'

  constructor(private http: HttpClient) { }
  getVendors(numberPage: number) {
    return this.http.get(this.vendorsEndPoint + '/page/' + numberPage)
                    .pipe (
                      map((res:any) => {
                      return res;
                    })
                    )
  }

  searchVendors(term: string) {
    return this.http.get(this.vendorsEndPoint + '/search/' + term)
                    .pipe (
                      map((res:any) => {
                         return res;
                      })
                   )
  }

  postVendor(vendor: any) {
    return this.http.post(this.vendorsEndPoint, vendor)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
  }
}
