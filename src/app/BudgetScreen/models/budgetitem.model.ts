import { ItemCategory } from './itemcategory.model';

export interface BudgetItem {
    ItemId: number,
    ItemDescription: string,
    ItemCategory: ItemCategory,
    ItemCost: number,
    ItemPaid: number,
}