
import {getAllRepositoryDataMySql} from "./repository_data";
import {outgoingSourceDB} from "../data-source";
import {dim_actor} from "../entity/dim_actor";

export async function sync_actor_table(): Promise<void> {
    const actors  = await getAllRepositoryDataMySql('actor');
    await outgoingSourceDB.manager.transaction( async (transactionManager) => {
        for (const actor of actors) {
            await actor_sync_with_sqlite(actor, transactionManager);
        }
    })
}

export async  function actor_sync_with_sqlite(row: any, manager: any): Promise<void> {

    const dim_actor_instance = new dim_actor();
    dim_actor_instance.actor_id = row['actor_id'];
    dim_actor_instance.first_name = row['first_name'];
    dim_actor_instance.last_name = row['last_name'];
    dim_actor_instance.last_update = new Date(row['last_update']);
    await manager.getRepository('dim_actor').save(dim_actor_instance);

}