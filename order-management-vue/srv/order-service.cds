using test.ordermanagement as test from '../db/data-model';

service OrderService {
    entity OrderTypes @readonly as projection on test.OrderTypes;
    entity PaymentPolicies as projection on test.PaymentPolicies;
    entity RecipientTypes as projection on test.RecipientTypes;
}