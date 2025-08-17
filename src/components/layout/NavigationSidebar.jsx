'use client';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/utils/constants'; // same source as App.jsx
import {
    Home, Users, MessageCircle, Heart, ShoppingBag, AlertTriangle,
    BarChart3, User, PawPrint, Stethoscope, Calendar, Bookmark
} from 'lucide-react';

const NavigationSidebar = () => {
    // Only these have real routes in your App.jsx; the rest stay '#'
    const navigationItems = [
        { icon: Home,        label: 'Feed',              routeKey: null },
        { icon: Users,       label: 'Friends',           routeKey: null },
        { icon: MessageCircle,label: 'Chat',             routeKey: null },
        { icon: Heart,       label: 'Adoption Center',   routeKey: null },
        { icon: ShoppingBag, label: 'Store',             routeKey: null },
        { icon: AlertTriangle,label: 'Emergency Services', routeKey: null },
        { icon: BarChart3,   label: 'Dashboard',         routeKey: 'DASHBOARD' },
        { icon: User,        label: 'Profile',           routeKey: 'PROFILE' },
    ];

    const quickActions = [
        { icon: PawPrint,     label: 'Report Lost Pet' },
        { icon: Stethoscope,  label: 'Find Vet Nearby' },
        { icon: Calendar,     label: 'Book Appointment' },
        { icon: Bookmark,     label: 'Save for Later' },
    ];

    const resolvePath = (key) => (key && ROUTES?.[key]) ? ROUTES[key] : '#';

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <div className="space-y-2">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Navigation
                </div>

                {navigationItems.map((item) => {
                    const href = resolvePath(item.routeKey);

                    // If href is '#', treat it as disabled-ish (no active state)
                    if (href === '#') {
                        return (
                            <a
                                key={item.label}
                                href="#"
                                aria-disabled="true"
                                onClick={(e) => e.preventDefault()}
                                className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-400 dark:text-gray-500 cursor-not-allowed select-none"
                                title="Coming soon"
                            >
                                <item.icon className="mr-3 h-5 w-5" />
                                {item.label}
                            </a>
                        );
                    }

                    return (
                        <NavLink
                            key={item.label}
                            to={href}
                            className={({ isActive }) =>
                                `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`
                            }
                            end
                        >
                            <item.icon className="mr-3 h-5 w-5" />
                            {item.label}
                        </NavLink>
                    );
                })}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Quick Actions
                </div>
                <div className="space-y-2">
                    {quickActions.map((action) => (
                        <button
                            key={action.label}
                            type="button"
                            className="w-full flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            onClick={() => {/* hook up later */}}
                        >
                            <action.icon className="mr-3 h-4 w-4" />
                            {action.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavigationSidebar;
