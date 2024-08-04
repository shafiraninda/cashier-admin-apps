import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	dashboardPagesMenu,
	demoPagesMenu
} from '../menu';
import Login from '../pages/presentation/auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
};

const auth: RouteProps[] = [
	{
		path: demoPagesMenu.page404.path,
		element: <AUTH.PAGE_404 />,
	},
	{
		path: demoPagesMenu.login.path,
		element: <Login />,
	},
	{
		path: demoPagesMenu.signUp.path,
		element: <Login isSignUp />,
	},
	{
		path: dashboardPagesMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
	},
]

const CustomElement = {
	// Inventory: lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
	MasterData: lazy(() => import('../views/Customer'))
}

const customContents: RouteProps[] = [
	{ path: "/inventory", element: <CustomElement.MasterData/>},
	{ path: "/customer", element: <CustomElement.MasterData/>},
]

const contents = [...auth, ...customContents];

export default contents;
