using test.ordermanagement as test from '../db/data-model';

service ConsignmentService {
    entity Cities @readonly as projection on test.Cities;
    @cds.localized: true
    entity ConsigneesOfGoods @readonly as projection on test.Partners where type = 'cg';
    @cds.localized: true
    entity Forwarders @readonly as projection on test.Partners where type = 'fw';
}