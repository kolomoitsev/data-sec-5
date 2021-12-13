import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const PaymentForm = () => {
    return (
        <div className={'containter'}>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h1 className='mt-5 pt-5'>Payment Form by LiqPay</h1>

                    <form
                        method='POST'
                        accept-charset='utf-8'
                        action='https://www.liqpay.ua/api/3/checkout'>
                        <input
                            type='hidden'
                            name='data'
                            value='eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIyNTAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoicG9zdGF2dGUgMTAwIiwicHVibGljX2tleSI6InNhbmRib3hfaTU0MTE3NDk1MjciLCJyZWN1cnJpbmdieXRva2VuIjoxLCJsYW5ndWFnZSI6InJ1Iiwic2VydmVyX3VybCI6Imh0dHBzOi8vcGF2bG9oYW5kbGVyLmV1Lm5ncm9rLmlvIiwicmVzdWx0X3VybCI6Imh0dHBzOi8vcGF2bG9oYW5kbGVyLmV1Lm5ncm9rLmlvIn0='
                        />
                        <input
                            type='hidden'
                            name='signature'
                            value='r0xnTz9SLI9NjINhDcAgPy1zhfo='
                        />
                        <button
                            onmouseover="this.style.opacity='0.5';"
                            onmouseout="this.style.opacity='1';">
                            <img
                                src='https://static.liqpay.ua/buttons/logo-small.png'
                                name='btn_text'
                            />
                            <span>Pay 250 UAH</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
