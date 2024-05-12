import {useState,useEffect} from 'react'
import SearchImg from "./resource/Vector.svg"
import UserProfileFound from './ProfileFound'
import {findProfile} from "../../handlers/profiles-request-handlers.ts";
import {profile} from "../../types/axios-response-types.ts";
import api from "../../service/axios.ts";
import {data} from "autoprefixer";
import ProfileLoading from '../skeletons-loading/profile-loading.tsx';
function debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
    let timeout: NodeJS.Timeout | null;
    return function executedFunction(...args: any[]) {
        const later = () => {
            clearTimeout(timeout!);
            func(...args);
        };
        clearTimeout(timeout!);
        timeout = setTimeout(later, wait);
    };
}
const FriendsPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<profile[]>([]);
       const searchProfiles = (queryParams: string) => {
        findProfile(queryParams).then(data =>{
            setResults(data)
        })
    };
    const debouncedSearchProfiles = debounce(searchProfiles, 500)
    useEffect(() => {
        if (query.length > 0) {
            debouncedSearchProfiles(query);
        }
    }, [query]);
    console.log(results)
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="relative xl:w-9/12 xl:h-4/5 bg-White inner-shadow rounded-sm overflow-y-scroll scrollbar-hide p-6 pb-0 flex flex-col items-center">
                    <div className='xl:w-2/3 xl:min-h-14 relative'><input  type="text" placeholder='Введите имя' className='text-MainTextColor bg-StrongPink w-full h-full rounded-sm indent-12 text-24 font-MainFont placeholder:text-MainTextColor placeholder:opacity-50 focus:placeholder:opacity-0 focus:outline-none'
                       onChange={(event)=>{
                           setResults([])
                           setQuery(event.target.value)
                       }}
                    /><img className='absolute right-6 top-3' src={`${SearchImg}`} alt="" /></div>
                    <div className='xl:w-2/3 mt-10  overflow-y-scroll scrollbar-hide grow'>
                        {results.length ? results.map((profile) =>{
                            return <UserProfileFound prop={profile}/>
                        }) : <ProfileLoading count={5}></ProfileLoading>}
                    </div>
                </div>
            </div>
        </>
    );
};
export default FriendsPage

