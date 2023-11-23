import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function FollowSpheres() {
    return (
        <div className="w-[50lvw] h-[100lvh]">
            <Suspense fallback={<div>Loading...</div>}>
                    <Spline scene="https://prod.spline.design/QvDWLtrUWfqQoV4E/scene.splinecode"/>
            </Suspense>
        </div>
    );
}