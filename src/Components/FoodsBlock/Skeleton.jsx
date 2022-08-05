import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={250}
        height={200}
        viewBox="0 0 250 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="28" y="3" rx="0" ry="0" width="95" height="83" />
        <rect x="40" y="104" rx="0" ry="0" width="73" height="19" />
        <rect x="47" y="133" rx="0" ry="0" width="59" height="13" />
        <rect x="72" y="156" rx="0" ry="0" width="23" height="11" />
        <rect x="47" y="173" rx="0" ry="0" width="69" height="16" />
    </ContentLoader>
)

export default Skeleton