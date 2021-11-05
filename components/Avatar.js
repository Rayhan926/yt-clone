function Avatar({ size, className, src, alt }) {
    return (
        <div style={{ width: size, height: size }} className={`${className || ''} rounded-full overflow-hidden`}>
            <img src={src} className="w-full h-full rounded-full overflow-hidden" alt={alt} />
        </div>
    )
}

export default Avatar
