'use client';

import { GithubFilled, InfoCircleFilled, QuestionCircleFilled } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const ProLayout = dynamic(() => import('@ant-design/pro-components').then((mod) => mod.ProLayout), {
  ssr: false,
});

import defaultProps from './_defaultProps';
const Layout = () => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'top',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        headerTitleRender={(logo, title, _) => {
          const defaultDom = (
            <a
              onClick={() => {
                console.log('titheaderTitle clicked');
              }}
            >
              {logo}
              {title}
            </a>
          );
          if (typeof document === 'undefined' || document.body.clientWidth < 1400) {
            return defaultDom;
          }
          if (_.isMobile) return defaultDom;
          return (
            <>
              {defaultDom}
              {/* <MenuCard /> */}
            </>
          );
        }}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default Layout;
