import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

offersEndPoint: string = 'http://localhost:8080/api/ofertas';


  constructor(private http: HttpClient) { }

  getOffersByArticle(articuloId: string) {
    return this.http.get(this.offersEndPoint + '/articulo/' + articuloId)
                    .pipe(
                       map((res: any) => {
                          return res;
                      })
                   )
  }

  getOffersByVendor(proveedorId: string) {
    return this.http.get(this.offersEndPoint + '/proveedor/' + proveedorId)
                    .pipe(
                       map((res: any) => {
                          return res;
                      })
                   )
  }

  getOffersByArticleAndVendor(articuloId: string, proveedorId: string) {
    return this.http.get(this.offersEndPoint + 
                         '/articulo-proveedor/' + 
                          articuloId + '/' + 
                          proveedorId)
                    .pipe(
                       map((res: any) => {
                          return res;
                      })
                   )
  }


  postOffer(offer: any) {
    return this.http.post(this.offersEndPoint, offer)
                    .pipe(
                      map((res: any) => {
                        return res;
                      })
                    )
                     
  }
}
