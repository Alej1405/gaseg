
interface CorpProps{
    corp:{
        id: number;
        mision: string;
        vision: string;
    }
}

const Corp: React.FC<CorpProps> = ({ corp }) => {

    return (
        <div>
            <div className="md:w-2/6 w-5/6 p-6 bg-slate-200 m-auto  shadow-lg mt-12">
                <h3 className="uppercase text-xl mb-3 font-semibold">mision</h3>
                <p className="font-thin text-justify">{corp.mision}</p>
            </div>
            <div className="md:w-2/6 w-5/6 p-6 bg-slate-200 m-auto  shadow-lg mt-12">
                <h3 className="uppercase text-xl mb-3 font-semibold">vision</h3>
                <p className="font-thin text-justify">{corp.vision}</p>
            </div>
        </div>
    )
}


export default Corp
