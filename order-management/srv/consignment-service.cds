using test.ordermanagement as test from '../db/data-model';

service ConsignmentService {
    entity Cities @readonly as projection on test.Cities;
    entity Partners @readonly as projection on test.Partners;
}