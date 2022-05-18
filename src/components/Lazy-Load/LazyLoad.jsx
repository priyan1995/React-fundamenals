import React, { lazy, Suspense } from 'react';

const LazyLoadContent = lazy(() => import('./LazyLoadContent'));

export const LazyLoadComponent = () => {
    return (
        // <> </> ==> this is react fragment shorthand syntax <React.Fragment>
        <>
            <h2>Code Splitting</h2>
            <Suspense fallback={<h1>Loading...</h1>}>
                <LazyLoadContent />
            </Suspense>
        </>
    )
}