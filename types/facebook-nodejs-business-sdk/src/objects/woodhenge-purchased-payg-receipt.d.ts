import { AbstractCrudObject } from './../abstract-crud-object';
export default class WoodhengePurchasedPAYGReceipt extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<WoodhengePurchasedPAYGReceipt>;
}