

const LoadingMini = () => {
  return (
    <div className="fixed  mt-24 bg-blue-50 h-full top-20 w-full flex justify-center">
      <div className="pt-52">
        <div className="h-20 w-20 border-stone-300 border-2 border-t-blue-400 rounded-full animate-spin"></div>
        <p className="text-xs mt-2 font-medium text-stone-400">Simulated load</p>
      </div>
    </div>
  )
}

export default LoadingMini