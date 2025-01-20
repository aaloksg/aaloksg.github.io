import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import type { ComputedRef } from 'vue';

type UseIsLargeScreenReturnType = {
    isLargeScreen: ComputedRef<boolean>;
};

const useIsLargeScreen = (): UseIsLargeScreenReturnType => {
    const { greater } = useBreakpoints({ ...breakpointsTailwind, xs: 480 });

    const isLargeScreen = greater('sm');
    return {
        isLargeScreen,
    };
};

export default useIsLargeScreen;
