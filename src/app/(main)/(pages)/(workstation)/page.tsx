'use client';

import { useRouter } from 'next/navigation';

/**
 * HomePage
 *
 * @constructor
 */
export default function HomePage() {
  const router = useRouter();
  router.push('/home');
}

// "use client";

// import CoraLoadingComponent from "@/components/biz/layout/cora-loading-component";
// import { useClientTranslation } from "@/i18n/TranslationsHooks";
// import { CoraNetSDK } from "@/lib/net/cora-net-sdk";
// import { useCoraStore, useCoraStorePersist } from "@/properties/common/context/global";
// import { useSession } from "next-auth/react";
// import dynamic from "next/dynamic";
// import { useEffect } from "react";

// const HomepageNavigationComponent = dynamic(() => import("@/components/biz/layout/homepage-nav-component"), {
//     loading: () => <CoraLoadingComponent />,
//     ssr: false,
// });

// /**
//  * Home page implementation
//  * It's static navigation for other pages.
//  *
//  * @constructor
//  */
// export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
//     const { pageLoading, setPageLoading } = useCoraStore();
//     const { data: session } = useSession();

//     const { antdThemeName } = useCoraStorePersist();

//     CoraNetSDK({ session, useCache: false });

//     const { t } = useClientTranslation(locale);

//     useEffect(() => {
//         // 登录健康检查
//         CoraNetSDK().invoke(`${process.env.NEXT_PUBLIC_COMMON_BE_PREFIX}/login/health`, undefined, {
//             forceRedirect: true,
//             useCache: false,
//         });
//         setPageLoading(false);
//     }, []);

//     return <HomepageNavigationComponent params={t} antdThemeName={antdThemeName} />;
// }
