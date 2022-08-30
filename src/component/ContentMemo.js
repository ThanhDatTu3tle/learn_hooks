import { memo } from "react";

function ContentMemo() {
    console.log(`re-render`)

    return (
        <div>
            <h1>Ngu</h1>
        </div>
    )
}

export default memo(ContentMemo);
