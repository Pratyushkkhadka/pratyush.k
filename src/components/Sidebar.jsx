import React from 'react';

const Sidebar = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
    const navItems = [
        {
            id: 'home',
            label: 'Home',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
        {
            id: 'about',
            label: 'About Me',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            )
        },
        {
            id: 'projects',
            label: 'Projects',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            id: 'experience',
            label: 'Experience',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            )
        },
        {
            id: 'contact',
            label: 'Contact',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            )
        }
    ];

    return (
        <nav className="fixed left-0 bottom-0 w-full h-[60px] md:top-0 md:h-screen md:w-sidebar bg-sidebar-bg flex flex-row md:flex-col items-center justify-around md:justify-start md:py-4 z-50 border-t md:border-t-0 md:border-r border-vscode-border select-none">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative w-full h-full md:h-[60px] flex items-center justify-center bg-transparent border-none md:border-l-[3px] cursor-pointer transition-all duration-150 group
            ${activeSection === item.id
                            ? 'text-white md:border-vscode-blue md:bg-sidebar-active border-t-[3px] md:border-t-0 border-accent-primary'
                            : 'border-transparent text-[#969696] hover:bg-sidebar-hover hover:text-white hover:border-vscode-blue'
                        }`}
                    aria-label={`${item.label} section`}
                    title={item.label}
                >
                    {item.icon}

                    {/* Tooltip - Desktop only */}
                    <span className="hidden md:block absolute left-[calc(100%+1rem)] bg-sidebar-bg text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200 border border-vscode-border z-[1001] pointer-events-none">
                        {item.label}
                    </span>
                </button>
            ))}

            {/* Theme Toggle - Desktop puts it at bottom, Mobile right side or handled different?
          Original CSS: Theme toggle is just another button at bottom.
          On mobile, we might want to hide it or place it specific.
          The passed `toggleTheme` is useful.
          Let's include it.
      */}
            <button
                className="md:mt-auto relative w-full h-full md:h-[60px] flex items-center justify-center bg-transparent border-none text-[#969696] hover:bg-sidebar-hover hover:text-white cursor-pointer transition-all duration-150 group"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                title="Toggle Theme"
            >
                {theme === 'light' ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                )}
                {/* Tooltip */}
                <span className="absolute left-[calc(100%+1rem)] bg-sidebar-bg text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200 border border-vscode-border z-[1001] pointer-events-none">
                    Toggle Theme
                </span>
            </button>
        </nav>
    );
};

export default Sidebar;
