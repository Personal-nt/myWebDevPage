type Props = {
    readonly handleSearch: (str: string) => void;
};

export default function Search({ handleSearch }: Props) {
    return (
        <div className="my-6 w-full md:w-[55%] xl:w-[30%] h-auto px-0 rounded-2xl flex justify-center items-center bg-slate-200 text-white">
            <input 
            onChange={(e) => handleSearch(e.target.value)}
            type="text" 
            placeholder="Search by tech stack" 
            className="input input-bordered input-success w-full max-w-xs" />
        </div>
    );
}