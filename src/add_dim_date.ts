import {dim_date} from "./entity/dim_date";

export async function add_dim_date(date:Date, manager:any): Promise<any> {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const quarter = Math.ceil(month / 3);
    const day_on_the_month = date.getDate();
    const day_of_the_week = date.getDay();
    const isWeekend = day_of_the_week === 0 || day_of_the_week === 6 ? 1 : 0;
    const date_numeric:number =
        date.getFullYear() * 10000 +
        (date.getMonth() + 1) * 100 +
        date.getDate();
    //check if exists
    let dim_date_record = await manager.getRepository('dim_date').findOneBy({ date_key: date_numeric });
    if(!dim_date_record) {
        dim_date_record = new dim_date();
        dim_date_record.date_key = date_numeric;
        dim_date_record.date = date;
        dim_date_record.year = year;
        dim_date_record.month = month;
        dim_date_record.quarter = quarter;
        dim_date_record.day_of_month = day_on_the_month;
        dim_date_record.day_of_week = day_of_the_week;
        dim_date_record.is_weekend = isWeekend;
        // console.log(dim_date_rented);
        await manager.getRepository('dim_date').save(dim_date_record);
    }
    return dim_date_record
}