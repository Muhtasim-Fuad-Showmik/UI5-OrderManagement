
import { createApp } from 'vue';
import { createI18n  } from 'vue-i18n';
import App from './App.vue';

import './assets/main.css';

const i18n = createI18n ({
    locale: 'it',
    fallbackLocale: 'en',
    messages: {
        en: {
            header: {
                orderManagement: 'Order Management',
                orderManagementSub: 'Testing out Order Management using',
            },
            nav: {
                header: 'Header',
                locations: 'Locations',
                promoVistex: 'Promo Vistex',
                testedPricing: 'Tested Pricing',
                partner: 'Partner',
                note: 'Note',
            },
            common: {
                address: 'Address',
                city: 'City',
                commercialOrg: 'Commercial Org',
                commercialOrganization: 'Commercial Organization',
                country: 'Country',
                customer: 'Customer | Customers',
                customerCode: 'Customer Code',
                customerName: 'Customer Name',
                distributionChannel: 'Distribution Channel',
                forwarder: 'Forwarder | Forwarders',
                forwarderName: 'Forwarder Name',
                nameOfTheConsigneeOfGoods: 'Name of the Consigneed of Goods',
                orderType: 'Order Type',
                partnerCode: 'Partner Code',
                partnerName: 'Partner Name',
                paymentPolicy: 'Payment Policy',
                piva: 'VAT',
                postalCode: 'Postal Code',
                province: 'Province',
                recipient: 'Recipient | Recipients',
                recipientOfGoods: 'Recipient of Goods',
                refOrdCustomer: 'Ref. Ord. Customer',
                searchSomeone: 'Search {someone}',
                selectSomeone: 'Select {someone}',
                viaMarketplace: 'Via/Marketplace',
                weeklyCommodity: 'Weekly Commodity | Weekly Commodities',
            }
        },
        it: {
            header: {
                orderManagement: 'Gestione Degli Ordini',
                orderManagementSub: 'Test di gestione degli ordini utilizzando'
            },
            nav: {
                header: 'Intestazione',
                locations: 'Posizioni',
                promoVistex: 'Promo Vistex',
                testedPricing: 'Prezzi Testati',
                partner: 'Compagno',
                note: 'Nota',
            },
            common: {
                address: 'Indirizzo',
                city: 'Città',
                commercialOrg: 'Org Commerciale',
                commercialOrganization: 'Organizzazione Commerciale',
                country: 'Paese',
                customer: 'Cliente | Clienti',
                customerCode: 'Codice Cliente',
                customerName: 'Nome del Cliente',
                distributionChannel: 'Canale di Distribuzione',
                forwarder: 'Spedizioniere | Spedizionieri',
                forwarderName: 'Nome del Spedizioniere',
                nameOfTheConsigneeOfGoods: 'Nome del Destinatario delle Merci',
                orderType: 'Tipo Di Ordine',
                partnerCode: 'Codice Compagno',
                partnerName: 'Nome del Compagno',
                paymentPolicy: 'Politica di pagamento',
                piva: 'PIVA',
                postalCode: 'Codice postale',
                province: 'Provincia',
                recipient: 'Destinatario | Destinatari',
                recipientOfGoods: 'Destinatario delle Merci',
                refOrdCustomer: 'Rif. Ord. Cliente',
                searchSomeone: 'Cerca {someone}',
                selectSomeone: 'Seleziona {someone}',
                viaMarketplace: 'Via/Mercato',
                weeklyCommodity: 'Prodotto Settimanale | Prodotti Settimanale',
            }
        },
        de: {
            header: {
                orderManagement: 'Auftragsverwaltung',
                orderManagementSub: 'Testen des Auftragsmanagements mit'
            },
            nav: {
                header: 'Header',
                locations: 'Standorte',
                promoVistex: 'Promo Vistex',
                testedPricing: 'Getestete Preisgestaltung',
                partner: 'Partner',
                note: 'Hinweis',
            },
            common: {
                address: 'Adresse',
                city: 'Stadt',
                commercialOrg: 'Kommerzielle Org',
                commercialOrganization: 'Handelsorganisation',
                country: 'Land',
                customer: 'Kunde | Kunden',
                customerCode: 'Kundencode',
                customerName: 'Kundenname',
                distributionChannel: 'Vertriebskanal',
                forwarder: 'Spediteur | Spediteure',
                forwarderName: 'Spediteurname',
                nameOfTheConsigneeOfGoods: 'Name des Warenempfängers',
                orderType: 'Bestellart',
                partnerCode: 'Partnercode',
                partnerName: 'Partnername',
                paymentPolicy: 'Zahlungsrichtlinie',
                piva: 'MwSt',
                postalCode: 'Postleitzahl',
                province: 'Provinz',
                recipient: 'Empfänger | Empfänger',
                recipientOfGoods: 'Empfänger von Waren',
                refOrdCustomer: 'Referenzbestellkunde',
                searchSomeone: '{someone} Suchen',
                selectSomeone: '{someone} Auswählen',
                viaMarketplace: 'Via / Marktplatz',
                weeklyCommodity: 'Wöchentliche Ware | Wöchentliche Waren',
            }
        },
    },

    modifiers: {
    }
})

export default {
    data() {
        return {
        }
    }
}

const app = createApp(App);
app.use(i18n);
app.mount('#app');
