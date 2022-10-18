namespace test.ordermanagement;
using { managed, Country } from '@sap/cds/common';

entity Cities {
    key code: String;
    title: String;
    country: Country;
}

entity Partners {
    key code: Integer;
    name: String;
    province: String;
    city: String;
    country: Country;
    address: String;
    postalCode: String;
    type: String;
}

entity OrderTypes {
    key code: String;
    title   : localized String;
}

entity PaymentPolicies {
    key code: String;
    title   : localized String;
}

entity RecipientTypes {
    key code    : Integer;
    name            : String;
    province            : String;
    city                : String;
    country             : Country;
    piva                : String;
    commercialOrg       : String;
    distributionChannel : String;
    weeklyCommodity     : String;
}