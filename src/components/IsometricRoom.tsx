import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function IsometricRoom() {
    return (
        <div className="w-[100lvw] h-[100lvh]">
            <Suspense fallback={<div>Loading...</div>}>
                <Spline scene="https://prod.spline.design/T53XXBb0U5OEGCIs/scene.splinecode" />
            </Suspense>
        </div>
    );
}
