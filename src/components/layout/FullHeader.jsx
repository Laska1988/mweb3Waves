import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';

import * as Controls from './header-controls';
import Hamburger from './Hamburger';

import { Flex, Box } from '../shared';

const menuIndent = {
    0: '16px',
    xl: '46px',
};

const DesktopHeader = ({
    links,
    activeUrl,
    setActiveUrl,
    userLinks,
    filterActive,
    onChangeFilterState,
    tabletResolution,
}) => (
    <>
        <MediaQuery maxWidth={tabletResolution}>
            <Box pr="22px" position="relative" top="4px">
                <Hamburger bg="blue.0" height="100%" />
            </Box>
        </MediaQuery>
        <Controls.Logo
            justifyContent="center"
            alignItems="center"
            isActive={!filterActive}
            onClick={() => onChangeFilterState(false)}
        />
        <Flex flex={1} justifyContent={{ 0: 'flex-end', lg: 'center' }} alignItems="center">
            <Flex>
                <MediaQuery minWidth={tabletResolution}>
                    {links.map(({ url, title }, index) => (
                        <Box key={url} as="span" pl={index !== 0 && menuIndent}>
                            <a href={url}>
                                <Controls.MenuItem
                                    active={activeUrl.indexOf(url) >= 0}
                                    onClick={() => setActiveUrl(url)}
                                >
                                    {title}
                                </Controls.MenuItem>
                            </a>
                        </Box>
                    ))}
                </MediaQuery>
                <Box pl={menuIndent} pr={{ 0: '32px', lg: 0 }}>
                    <Controls.LanguageSelect language="english" />
                </Box>
            </Flex>
        </Flex>
        <Flex alignItems="center">
            {userLinks.map(({ url, title }, index) => (
                <Fragment key={url}>
                    {index !== 0 && (
                        <Box width="1px" as="span" mx="6px" height="13px" bg="gray.2" />
                    )}
                    <a href={url}>
                        <Controls.MenuItem
                            active={activeUrl.indexOf(url) >= 0}
                            onClick={() => setActiveUrl(url)}
                        >
                            {title}
                        </Controls.MenuItem>
                    </a>
                </Fragment>
            ))}
            <Flex pl="30px">
                <Box position="relative">
                    <Controls.ShopIcon />
                    <Box position="absolute" top="-12px" right="-12px">
                        <Controls.RoundMarkIcon />
                    </Box>
                </Box>
                <Box pl="20px">
                    <Controls.SearchIcon />
                </Box>
            </Flex>
        </Flex>
    </>
);

export default DesktopHeader;
