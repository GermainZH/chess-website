import React, { useEffect, useState } from 'react';

import { Slide, useScrollTrigger, Typography, AppBar, Toolbar, IconButton, Button, Hidden, Drawer, Menu, makeStyles, Link, MenuItem } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: '#f03e3e',
        'border-bottom': '4px solid #ffffff'

    },
    logo: {
        fontFamily: "Satisfy, sans-serif",
        fontWeight: 600,
        color: '#ffffff',
        textAlign: 'left',
    },
    menuButton: {
        fontWeight: 400,
        color: '#ffffff',
        marginLeft: '10px'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

const headersData = [
    {
        label: 'Home',
        href: '\/'
    },
    {
        label: 'Leaderboard',
        href: '\Leaderboard'
    },
    {
        label: 'Info',
        href: '\Info'
    }
];

export default function Header() {
    const { header, logo, menuButton, toolbar } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return <Toolbar className={toolbar}>{tdsbLogo}<div>{getMenuButtons()}</div></Toolbar>
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: 'start',
                        color: 'inherit',
                        'aria-label': 'menu',
                        'aria-haspopup': 'true',
                        onClick: handleDrawerOpen
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer {...{
                    anchor: 'left',
                    open: drawerOpen,
                    onClose: handleDrawerClose
                }}>
                    <div>{getDrawerChoices()}</div>
                </Drawer>
                <div>{tdsbLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const tdsbLogo = (
        <Typography variant="h4" component="h1" className={logo}>TDSB Chess Championship</Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button {...{
                    key: label,
                    color: 'inherit',
                    to: href,
                    component: RouterLink,
                    className: menuButton
                }}>{label}</Button>
            );
        });
    };

    const HideOnScroll = ({ children }) => {
        const trigger = useScrollTrigger();
        return (
            <Slide appear={false} direction='down' in={!trigger}>{children}</Slide>
        );
    };

    return (
        <header>
            <HideOnScroll>
                <AppBar className={header}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
            </HideOnScroll>
        </header>
    );
}
