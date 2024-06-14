
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment/environment';
import { loadStripe } from '@stripe/stripe-js';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PasarelaPagoService {

    private readonly _http = inject(HttpClient);
    private readonly _url = environment.serverURL;
    onProceedToPay(products: any[]): any{
        return this._http.post(`${this._url}/checkout`, {items: products})
        .pipe(
            map(async(res:any)=>{
                const stripe = await loadStripe(environment.stripeApiKey)
                stripe?.redirectToCheckout({sessionId: res.id})
            })
        ).subscribe({
            error: (err) => console.error('Error', err)
        })
    }

}

