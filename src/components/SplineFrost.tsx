// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <div className="w-[50dvw] h-[80lvh]">
//     {/* <Spline scene="https://prod.spline.design/Hy7bEaxsoWbKu5rt/scene.splinecode" /> */}
//     {/* <Spline scene="https://prod.spline.design/xbkUX4vzBH1f3YDK/scene.splinecode" /> */}
//     <Spline scene="https://prod.spline.design/funISC8X-KezhC8q/scene.splinecode" />
//     {/* <Spline scene="https://prod.spline.design/wLDmA2wSbp2o4q6w/scene.splinecode" /> */}
//     </div>
//   );
// }

import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function SplineFrost() {
    return (
        <div className="w-[50lvw] h-[100lvh]">
            <Suspense fallback={<div>Loading...</div>}>
                {/* <Spline scene="https://prod.spline.design/funISC8X-KezhC8q/scene.splinecode" /> */}
                <Spline scene="https://prod.spline.design/T53XXBb0U5OEGCIs/scene.splinecode" />
            </Suspense>
        </div>
    );
}
