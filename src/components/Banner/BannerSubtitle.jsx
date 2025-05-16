export default function BannerSubtitle({ children }) {
    return (
        children &&
        <span className="text-sub">
            {children}
        </span>
    )
}