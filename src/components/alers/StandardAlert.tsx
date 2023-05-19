
interface Props {
    changeAlertState: (msg: string) => void,
    alert: string
}

const StandardAlert = ({ changeAlertState, alert }: Props) => {

    return (
        <div className="fixed h-screen flex justify-center items-center w-full max-w-[45rem]">
            <div className="bg-stone-50 z-10 flex flex-col items-center font-semibold rounded-xl border border-blue-400 max-w-xs">
                <h3 className="text-xl text-stone-500 mt-6 mx-4 ">{alert}</h3>
                <button onClick={()=>changeAlertState('')} className="border border-blue-400 w-24 my-4 text-blue-400 rounded-xl hover:text-blue-50 hover:bg-blue-400">Ok</button>
            </div>
        </div>
    )
}

export default StandardAlert