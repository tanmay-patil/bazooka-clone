import React from 'react';

interface OptimizedImageProps {
    src: string; // PNG path (without extension)
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className,
    style,
    loading = 'lazy'
}) => {
    // Remove .png extension if present and add paths for both formats
    const basePath = src.replace(/\.png$/, '');
    const webpSrc = `${basePath}.webp`;
    const pngSrc = `${basePath}.png`;

    return (
        <picture>
            {/* WebP format for supported browsers */}
            <source srcSet={webpSrc} type="image/webp" />
            {/* PNG fallback for older browsers */}
            <img
                src={pngSrc}
                alt={alt}
                className={className}
                style={style}
                loading={loading}
            />
        </picture>
    );
};

export default OptimizedImage;
