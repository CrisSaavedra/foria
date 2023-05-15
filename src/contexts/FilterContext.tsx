import { createContext, useState } from "react";

export type Filter = 'All' | 'T-shirt' | 'Hoodie' | 'Jacket' | 'Shorts';

interface Props {
    children: JSX.Element[],
}

interface FilterState {
    filter: Filter;
}

type Context = {
    filter: Filter,
    setFilter: React.Dispatch<React.SetStateAction<Filter>>
}


export const FilterContext = createContext<Context>({
    filter: 'All',
    setFilter: () => { }
});

export const FilterProvider = ({ children }: Props) => {

    const [filter, setFilter] = useState<FilterState['filter']>('All');

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    )
}