// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import type {HTMLAttributes} from 'react';

const InternetIcon = (attrs: HTMLAttributes<SVGElement>) => {
    return (
        <svg
            width='19'
            height='18'
            viewBox='0 0 19 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...attrs}
        >
            <g clipPath='url(#clip0_303_962)'>
                <path
                    d='M9 15.1875C7.99375 15.1875 7.05337 14.9988 6.17891 14.6215C5.30444 14.2441 4.54375 13.732 3.89687 13.0852C3.25 12.4383 2.74088 11.6746 2.36953 10.7941C1.99818 9.91367 1.8125 8.97031 1.8125 7.96406C1.8125 6.95781 1.99818 6.02045 2.36953 5.15195C2.74088 4.28345 3.25 3.52578 3.89687 2.87891C4.54375 2.23203 5.30444 1.72591 6.17891 1.36055C7.05337 0.995181 7.99375 0.8125 9 0.8125C10.0062 0.8125 10.9466 0.995181 11.8211 1.36055C12.6956 1.72591 13.4563 2.23203 14.1031 2.87891C14.75 3.52578 15.2591 4.28345 15.6305 5.15195C16.0018 6.02045 16.1875 6.95781 16.1875 7.96406C16.1875 8.97031 16.0018 9.91367 15.6305 10.7941C15.2591 11.6746 14.75 12.4383 14.1031 13.0852C13.4563 13.732 12.6956 14.2441 11.8211 14.6215C10.9466 14.9988 10.0062 15.1875 9 15.1875ZM9 14.1453C9.41928 13.7141 9.76967 13.2199 10.0512 12.6629C10.3327 12.1059 10.5633 11.444 10.743 10.6773H7.275C7.44272 11.3961 7.66733 12.043 7.94883 12.618C8.23033 13.193 8.58072 13.7021 9 14.1453ZM7.47266 13.9297C7.17319 13.4745 6.91563 12.9833 6.7 12.4563C6.48438 11.9292 6.30469 11.3362 6.16094 10.6773H3.46563C3.92083 11.5279 4.4479 12.1957 5.04688 12.6809C5.64585 13.166 6.45444 13.5823 7.47266 13.9297ZM10.5453 13.9117C11.4078 13.6362 12.1835 13.2229 12.8723 12.6719C13.5611 12.1208 14.1151 11.456 14.5344 10.6773H11.857C11.7013 11.3242 11.5186 11.9112 11.309 12.4383C11.0994 12.9654 10.8448 13.4565 10.5453 13.9117ZM3.10625 9.59922H5.96328C5.92734 9.27578 5.90639 8.9853 5.90039 8.72773C5.89439 8.47017 5.89141 8.21562 5.89141 7.96406C5.89141 7.6646 5.89741 7.39805 5.90938 7.16445C5.92134 6.93086 5.94531 6.67031 5.98125 6.38281H3.10625C3.0224 6.67031 2.96549 6.92788 2.93555 7.15547C2.9056 7.38306 2.89063 7.65259 2.89063 7.96406C2.89063 8.27553 2.9056 8.55405 2.93555 8.79961C2.96549 9.04517 3.0224 9.31172 3.10625 9.59922ZM7.07734 9.59922H10.9406C10.9885 9.22788 11.0185 8.92539 11.0305 8.6918C11.0424 8.4582 11.0484 8.21562 11.0484 7.96406C11.0484 7.72447 11.0424 7.49389 11.0305 7.27227C11.0185 7.05064 10.9885 6.75415 10.9406 6.38281H7.07734C7.02944 6.75415 6.99947 7.05064 6.9875 7.27227C6.97553 7.49389 6.96953 7.72447 6.96953 7.96406C6.96953 8.21562 6.97553 8.4582 6.9875 8.6918C6.99947 8.92539 7.02944 9.22788 7.07734 9.59922ZM12.0187 9.59922H14.8938C14.9776 9.31172 15.0345 9.04517 15.0645 8.79961C15.0944 8.55405 15.1094 8.27553 15.1094 7.96406C15.1094 7.65259 15.0944 7.38306 15.0645 7.15547C15.0345 6.92788 14.9776 6.67031 14.8938 6.38281H12.0367C12.0727 6.8021 12.0966 7.12251 12.1086 7.34414C12.1206 7.56577 12.1266 7.77241 12.1266 7.96406C12.1266 8.22759 12.1176 8.47617 12.0996 8.70977C12.0816 8.94336 12.0547 9.23984 12.0187 9.59922ZM11.8391 5.30469H14.5344C14.1391 4.47813 13.597 3.78931 12.9082 3.23828C12.2194 2.68724 11.4258 2.29792 10.5273 2.07031C10.8268 2.51354 11.0814 2.99272 11.291 3.50781C11.5006 4.0229 11.6833 4.62188 11.8391 5.30469ZM7.275 5.30469H10.7609C10.6292 4.66978 10.4076 4.05586 10.0961 3.46289C9.78462 2.86992 9.41928 2.34583 9 1.89063C8.61665 2.21406 8.29322 2.63932 8.02969 3.16641C7.76616 3.6935 7.5146 4.40625 7.275 5.30469ZM3.46563 5.30469H6.17891C6.31069 4.65781 6.47837 4.07983 6.68203 3.5707C6.88569 3.06158 7.14322 2.56745 7.45469 2.08828C6.55625 2.31588 5.77163 2.69922 5.10078 3.23828C4.42994 3.77734 3.8849 4.46616 3.46563 5.30469Z'
                    fill='#AEB5C4'
                />
            </g>
            <defs>
                <clipPath id='clip0_303_962'>
                    <rect
                        width='18'
                        height='16.7143'
                        fill='white'
                        transform='translate(0.326172 0.77124)'
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default InternetIcon;
