import ContentLoader from 'react-content-loader';

export default function LoadingCards() {
    return (
        <div className="grid w-full grid-cols-4 gap-5 pt-12">
            {Array(4)
                .fill(0)
                .map((_, i) => (
                    <div className="w-75 bg-white" key={i}>
                        <ContentLoader
                            speed={2}
                            width={300}
                            height={320}
                            viewBox="0 0 300 320"
                            backgroundColor="#e9e7e7"
                            foregroundColor="#fdf7f7"
                        >
                            <rect
                                x="0"
                                y="-3"
                                rx="12"
                                ry="12"
                                width="300"
                                height="180"
                            />
                            <rect
                                x="22"
                                y="200"
                                rx="12"
                                ry="12"
                                width="180"
                                height="30"
                            />
                            <rect
                                x="23"
                                y="269"
                                rx="12"
                                ry="12"
                                width="126"
                                height="34"
                            />
                            <rect
                                x="240"
                                y="265"
                                rx="12"
                                ry="12"
                                width="40"
                                height="40"
                            />
                        </ContentLoader>
                    </div>
                ))}
        </div>
    );
}
