import React, { useState } from 'react'
import LeftNavBar from '../../compoments/left-nav-bar';
import TopBar from '../../compoments/top-bar';
import Language from '../../section-fields/language.json';
import LeftNavFields from '../../section-fields/leftNavb.json'

function ThriftWare() {
    const [active, setActive] = useState('dashboard')
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState(Language[0])

    return (
        <div style={{ height: '100vh', background: '#f0ded3', overflow: "hidden" }}>
            {!isMenuActive && <TopBar
            active={active}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />}
            <LeftNavBar
                sectionFields={LeftNavFields[selectedLanguage.id]}
                active={active}
                setActive={setActive}
                isMenuActive={isMenuActive}
                setIsMenuActive={setIsMenuActive}
            />
        </div>
    )
}

export default ThriftWare
