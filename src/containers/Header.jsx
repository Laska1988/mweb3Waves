import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';

import { Flex, Box } from '../components/shared';
import * as Controls from '../components/layout/header-controls';
import * as Layout from '../components/layout';
import theme from '../styled-components/theme';

const { breakpoints } = theme;

const links = [
    {
        url: '#featured',
        title: 'Featured',
    },
    {
        url: '#things_to_do',
        title: 'Things to do',
    },
    {
        url: '#beauty_spas',
        title: 'Beauty & Spas',
    },
    {
        url: '#local',
        title: 'Local',
    },
];

const userLinks = [
    {
        url: '#login',
        title: 'Login',
    },
];

const Header = ({ onCreateCoupon, filterActive, onChangeFilterState }) => {
    const [activeUrl, setActiveUrl] = useState('');
    const [isMenuActive, setMenuState] = useState(false);

    useEffect(() => {
        setActiveUrl(window.location.href);
    }, []);

    const menuParams = {
        activeUrl,
        links,
        userLinks,
        setActiveUrl,
        onCreateCoupon: () => {
            setMenuState(false);
            onCreateCoupon();
        },
        filterActive,
        onChangeFilterState,
    };

    return (
        <>
            <Controls.HeaderLayout height="131px" position="fixed">
                <Flex
                    alignItems="center"
                    height="100%"
                    px={{
                        0: '16px',
                        lg: '39px',
                        xl: '114px',
                    }}
                >
                    <Flex width="100%" justifyContent="center">
                        <MediaQuery minWidth={breakpoints.lg}>
                            <Layout.DesktopHeader {...menuParams} />
                        </MediaQuery>
                        <MediaQuery minWidth={breakpoints.sm} maxWidth={breakpoints.lg}>
                            <Layout.TabletHeader {...menuParams} />
                        </MediaQuery>
                        <MediaQuery maxWidth={breakpoints.sm}>
                            <Layout.MobileHeader {...menuParams} />
                        </MediaQuery>
                    </Flex>
                </Flex>
            </Controls.HeaderLayout>
            <Box width="100%" height="131px" />
        </>
    );
};

export default Header;
