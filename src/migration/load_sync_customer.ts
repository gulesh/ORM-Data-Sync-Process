
import {getAllRepositoryDataMySql} from "./repository_data";
import {incomingSourceDB, outgoingSourceDB} from "../data-source";
import {dim_customer} from "../entity/dim_customer";

export async function sync_customer_table(): Promise<void> {
    const customers  = await getAllRepositoryDataMySql('customer');

    await outgoingSourceDB.manager.transaction( async (transactionManager) => {
        for (const customer of customers) {
            await customer_sync_with_sqlite(customer, transactionManager);
        }
    })
}

export async  function customer_sync_with_sqlite(row: any, manager: any): Promise<void> {
    let address_id = row['address_id'];
    let addressObject = await incomingSourceDB.manager.getRepository('address').findBy({address_id: address_id});
    let city_id = addressObject[0]['city_id'];
    let cityObject = await incomingSourceDB.manager.getRepository('city').findBy({city_id: city_id});
    let city = cityObject[0]['city'];
    let country_id = cityObject[0]['country_id'];
    let countryObject = await incomingSourceDB.manager.getRepository('country').findBy({country_id: country_id});
    let country = countryObject[0]['country'];
    const dim_customer_instance = new dim_customer();
    dim_customer_instance.customer_id = row['customer_id'];
    dim_customer_instance.first_name = row['first_name'];
    dim_customer_instance.last_name = row['last_name'];
    dim_customer_instance.active = row['active'];
    dim_customer_instance.country = country;
    dim_customer_instance.city = city;
    dim_customer_instance.last_update = new Date(row['last_update']);
    await manager.getRepository('dim_customer').save(dim_customer_instance);

}