import IonIcon from '@reacticons/ionicons';

interface Props {
    changeCartVisibility: () => void
}


const Navbar = ({ changeCartVisibility }: Props) => {

    const onCardClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        changeCartVisibility();
    }
    return (
        <nav className='flex justify-between items-center h-20 mx-auto w-11/12'>
            <h1 className="text-stone-600 text-[2.3rem]">Foria<span className='text-blue-400'>*</span> </h1>
            <button onClick={onCardClick}>
                <IonIcon name='cart-outline' size='large' className='text-stone-600 text-[1rem] mt-1' />
            </button>
        </nav>
    )
}

export default Navbar