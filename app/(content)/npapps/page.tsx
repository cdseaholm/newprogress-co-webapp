'use client'

import React from 'react';
import MainChild from '@/components/pagetemplates/mainchild';
import InPageHeaderWrap from '@/components/pagetemplates/inPageHeaderWrap';
import { useStateStore } from '@/context/stateStore';
import Financr from '@/components/pagecomponents/apps/financr';
import Trackr from '@/components/pagecomponents/apps/trackr';
import Harbor from '@/components/pagecomponents/apps/harbor';
import Gamr from '@/components/pagecomponents/apps/gamr';

const NPAppsPage = () => {

    const currentSelection = useStateStore((state) => state.devCurrentSelection);

    return (
        <MainChild>
            <InPageHeaderWrap>
            <div className="flex flex-col items-start justify-center w-full h-full overflow-hidden" style={{maxHeight: 10000}}>
                        {currentSelection === 0 ?       
                            <Harbor />
                        : currentSelection === 1 ?
                            <Financr />
                        : currentSelection === 2 ?
                            <Trackr />
                        : currentSelection === 3 &&
                            <Gamr />
                        }
                </div>
            </InPageHeaderWrap>
        </MainChild>
    );
};

export default NPAppsPage;