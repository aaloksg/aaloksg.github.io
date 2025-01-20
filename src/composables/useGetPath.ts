type UseGetPathReturnType = {
    getPath: (url: string) => string;
};

const useGetPath = (): UseGetPathReturnType => {
    const getPath = (url: string): string => {
        return `${import.meta.env.BASE_URL}${url}`;
    };

    return {
        getPath,
    };
};

export default useGetPath;
