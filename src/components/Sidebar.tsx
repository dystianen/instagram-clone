import React, {FC, useState} from 'react';

const Icon = ({icon}: { icon: string }) => (
    <span className='material-symbols-outlined'>{icon}</span>
)

const tabs = ['menu', 'lock', 'settings'];

const contentMenu = [
    {
        name: 'Home',
        icon: 'home',
        route: '/home',
    },
    {
        name: 'About',
        icon: 'settings',
        route: '/about',
    }
];

const contentLock = [
    {
        name: 'Lock',
        icon: 'home',
        route: '/home',
    },
    {
        name: 'Test',
        icon: 'settings',
        route: '/about',
    }
];

type headerProps = {
    activeTab: number;
    onTabClicked: (tab: number) => void;
}

const NavHeader: FC<headerProps> = ({activeTab, onTabClicked}) => (
    <header className='sidebar-header'>
        {tabs.map((tab, index) => (
            <button
                key={tab}
                type='button'
                onClick={() => onTabClicked(index)}
                className={`${activeTab === index ? 'active' : ''}`}
            >
                <Icon icon={tab}/>
            </button>
        ))}

        <div className='underline' style={{translate: `${activeTab * 100}% 0`}}/>
    </header>
)

const Sidebar: FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (tab: number) => {
        setActiveTab(tab);
    }

    return (
        <aside className='sidebar'>
            <NavHeader activeTab={activeTab} onTabClicked={handleTabClick}/>

            <div className='tabs'>
                {/*<div style={{translate: `-${activeTab === 0 ? 0 : (activeTab / tabs.length) * 100}$`}}>*/}
                {activeTab === 0 && (
                    <div>
                        {contentMenu.map((it, index) => (
                            <div key={index} style={{
                                color: 'lightgray',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10
                            }}>
                                <span className='material-symbols-outlined'>{it.icon}</span>
                                <span>{it.name}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 1 && (
                    <div>
                        {contentLock.map((it, index) => (
                            <div key={index} style={{
                                color: 'lightgray',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10
                            }}>
                                <span className='material-symbols-outlined'>{it.icon}</span>
                                <span>{it.name}</span>
                            </div>
                        ))}
                    </div>
                )}
                {/*{activeTab === 0 ? contentMenu : activeTab === 1 ? contentLock : contentSettings}*/}
                {/*</div>*/}
            </div>
        </aside>
    )
}

export default Sidebar;