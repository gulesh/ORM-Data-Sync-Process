
import {getAllRepositoryDataMySql} from "./repository_data";
import {dim_category} from "../entity/dim_category";
import {outgoingSourceDB} from "../data-source";

export async function sync_category_table(): Promise<void> {
    const categories  = await getAllRepositoryDataMySql('category');

    await outgoingSourceDB.manager.transaction( async (transactionManager) => {
        for (const category of categories) {
            await category_sync_with_sqlite(category, transactionManager);
        }
    })
}

export async function category_sync_with_sqlite(row: any, manager: any): Promise<void> {
    const dim_category_instance = new dim_category();
    dim_category_instance.category_id = row['category_id'];
    dim_category_instance.name = row['name'];
    dim_category_instance.last_update = new Date(row['last_update']);
    await manager.getRepository('dim_category').save(dim_category_instance);
}