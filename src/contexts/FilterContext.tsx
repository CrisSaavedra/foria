import { createContext, useState } from "react";


interface FilterState {
    filter: string;
}

interface Props {
    children: JSX.Element[],
}

type Context = {
    filter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const FilterContext = createContext<Context>({
    filter: 'All',
    setFilter: () => {}
});

export const FilterProvider = ({ children }: Props) => {

    const [filter, setFilter] = useState<FilterState['filter']>('All');

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    )
}