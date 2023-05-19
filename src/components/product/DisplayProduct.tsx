import { Link } from "react-router-dom"
import { toCLP } from "../../helpers/extraFunctions"
import IonIcon from "@reacticons/ionicons"
import { useDisplay } from "../../hooks/useDisplay"
import StandardAlert from "../alers/StandardAlert";

const sizes = ['M', 'L', 'XL'];

const DisplayProduct = () => {

    const { dataProduct, selectSize, onAddToCart, changeAlertState, alert, onSelectSize } = useDisplay();

    return (
        <>
            {
                alert.state ? <StandardAlert changeAlertState={changeAlertState} alert={alert.msg}/> : null
            }
            <main className=" w-11/12 mx-auto">

                <Link to='/products'><IonIcon name='close-outline' size='large' className='text-stone-600 text-[1rem] mt-1' /></Link>
                <section className="flex flex-col gap-5 mt-4 pb-4">
                    <img src={dataProduct?.image} alt="product-img" />
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-stone-700 text-xl font-medium">{dataProduct?.name}</h3>
                            <p className="text-stone-500">{`$ ` + toCLP(dataProduct?.price)}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-base text-stone-600 font-medium">Select Size</h4>
                            <div className="flex gap-4 ">

                                {
                                    sizes.map(title => {
                                        let stk = dataProduct.stock.find(stk => stk.size === title)
                                        return (<button onClick={(e) => onSelectSize(e, title)} disabled={stk?.stock || 0 >= 1 ? false : true} key={title} className={selectSize === title ? `rounded-full w-7 h-7 border border-stone-700 text-sm  text-blue-50 bg-stone-700 transition-colors disabled:bg-stone-700 disabled:hover:text-stone-700 ` : `rounded-full w-7 h-7 border border-stone-700 text-stone-700 text-sm hover:text-blue-50 hover:bg-stone-700 transition-colors disabled:bg-stone-700 disabled:hover:text-stone-700`
                                        }> {title}</button>)
                                    })
                                }

                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-base text-stone-600 font-medium">Description</h4>
                            <p className="text-sm text-stone-500 font-medium">{dataProduct.description}</p>
                        </div>
                    </div>
                    <button onClick={e => onAddToCart(e, dataProduct, selectSize)} className="bg-blue-50 w-11/12 mx-auto h-9 rounded-xl text-blue-400 font-medium border-blue-400 border-2 hover:bg-blue-400 hover:text-blue-50 transition-colors">Add to Cart</button>
                </section>


            </main >
        </>
    )
}

export default DisplayProduct
