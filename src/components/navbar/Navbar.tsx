import IonIcon from '@reacticons/ionicons';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-20 mx-auto w-11/12'>
            <h1 className="text-stone-600 text-[2.3rem]">Foria<span className='text-blue-400'>*</span> </h1>
            <a href="#">
                <IonIcon name='cart-outline' size='large' className='text-stone-600 text-[1rem] mt-1' />
            </a>
        </nav>
    )
}

export default Navbar