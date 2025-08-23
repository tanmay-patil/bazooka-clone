import React from 'react';

interface OptimizedImageProps {
    src: string; // Base path (without extension)
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
    // Use WebP directly since all supported browsers have WebP support
    const webpSrc = `${src.replace(/\.(png|jpg|jpeg)$/, '')}.webp`;

    return (
        <img
            src={webpSrc}
            alt={alt}
            className={className}
            style={style}
            loading={loading}
        />
    );
};

export default OptimizedImage;
