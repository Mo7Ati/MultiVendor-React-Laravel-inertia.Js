import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';


const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: route('dashboard'),
        icon: LayoutGrid,
    },
    {
        title: 'Categories',
        url: route('dashboard.categories.index'),
        icon: LayoutGrid,
    },
    {
        title: 'Stores',
        url: route('dashboard.stores.index'),
        icon: LayoutGrid,
    },
    {
        title: 'Products',
        url: route('dashboard.products.index'),
        icon: LayoutGrid,
    },
    {
        title: 'Admins',
        url: route('dashboard.admins.index'),
        icon: LayoutGrid,
    },
    {
        title: 'Roles',
        url: route('dashboard.roles.index'),
        icon: LayoutGrid,
    },
];

// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         url: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         url: 'https://laravel.com/docs/starter-kits',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>


            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
