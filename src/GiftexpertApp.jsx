import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One piece']);

    const onAddCategory = (newCategory) => {
        // categories.push("Hunter x Hunter")

        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* titulo */}
            <h1>GiftExpertApp</h1>

            {/* input */}
            <AddCategory
                //  setCategories={ setCategories } 
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gif */}
            {
                categories.map((category) => (
                    <GiftGrid key={category} category={category} />
                ))
            }
            {/* Gift Item */}
        </>
    )
}