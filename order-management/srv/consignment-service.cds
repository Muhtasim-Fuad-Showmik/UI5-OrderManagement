using test.ordermanagement as test from '../db/data-model';

service ConsignmentService {
    entity Cities @readonly as projection on test.Cities;
    entity ConsigneesOfGoods @readonly as projection on test.Partners where type = 'cg';
    entity Forwarders @readonly as projection on test.Partners where type = 'fw';
}