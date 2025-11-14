import {incomingSourceDB, outgoingSourceDB} from "../data-source";
import {film} from "../entity/film";
import {address} from "../entity/address";
import {actor} from "../entity/actor";
import {category} from "../entity/category";
import {city} from "../entity/city";
import {country} from "../entity/country";
import {customer} from "../entity/customer";
import {film_actor} from "../entity/film_actor";
import {film_category} from "../entity/film_category";
import {inventory} from "../entity/inventory";
import {language} from "../entity/language";
import {payment} from "../entity/payment";
import {rental} from "../entity/rental";
import {staff} from "../entity/staff";
import {store} from "../entity/store";
import {dim_actor} from "../entity/dim_actor";
import {dim_category} from "../entity/dim_category";
import {dim_customer} from "../entity/dim_customer";
import {dim_date} from "../entity/dim_date";
import {dim_film} from "../entity/dim_film";
import {dim_store} from "../entity/dim_store";
import {fact_payment} from "../entity/fact_payment";
import {fact_rental} from "../entity/fact_rental";
import {bridge_film_actor} from "../entity/bridge_film_actor";
import {bridge_film_category} from "../entity/bridge_film_category";

const entityMap = {
    actor: actor,
    address: address,
    category: category,
    city: city,
    country: country,
    customer: customer,
    film: film,
    film_actor: film_actor,
    film_category: film_category,
    inventory: inventory,
    language: language,
    payment: payment,
    rental: rental,
    staff: staff,
    store: store,
    dim_actor: dim_actor,
    dim_category: dim_category,
    dim_customer: dim_customer,
    dim_date: dim_date,
    dim_film: dim_film,
    dim_store: dim_store,
    fact_payment: fact_payment,
    fact_rental: fact_rental,
    bridge_film_actor: bridge_film_actor,
    bridge_film_category: bridge_film_category
}

export async function getAllRepositoryDataMySql(repositoryName: string) {
    const repository =  incomingSourceDB.manager.getRepository(entityMap[repositoryName]);
    return repository.find();
}

export async function getAllRepositoryDataSqlite(repositoryName: string) {
    const repository =  outgoingSourceDB.manager.getRepository(entityMap[repositoryName]);
    return repository.find();
}

export async function getOneRecordForMySqlRepo(repositoryName: string) {
    const repository =  incomingSourceDB.manager.getRepository(entityMap[repositoryName]);
    return repository.find({ take: 2 });
}