import { type FC, useEffect } from 'react';
import { CustomShortcut } from '@/components/Home/CustomShortcut';
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MapStaticView } from '@/components/Map/MapStaticView';
import { useUserId } from '@/context/UserIdContext';
import { fetchData } from '@/utils/getUserById';

export const Home: FC = () => {

    const { updateUserId } = useUserId()

    useEffect(() => {
        async function fetchDataAndSetData(): Promise<void> {
            await fetchData(updateUserId);
        }
        void fetchDataAndSetData();
    }, [ updateUserId ]);

    return (
        <div className="h-full w-full relative">
            <MapStaticView />
            <div className='w-full px-5 absolute bottom-5'>
                <CustomShortcut key="map-home"/>
                <Link to="/set-trip" className='flex items-center w-full h-12
                    bg-slate-200 border text-[#49454F] px-5 my-5
                    rounded-3xl gap-5'
                >
                    <BiSearch/>
                    Solicitar un viaje
                </Link>
            </div>
        </div>
    );
};