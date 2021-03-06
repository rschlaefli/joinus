import React from 'react'
import {Icon} from 'semantic-ui-react'
import {slide as Menu} from 'react-burger-menu'
import animateScrollTo from 'animated-scroll-to';

/* eslint-disable */

const BurgerMenu = () => {
    return (
        <div>
            <div className="burgerMenuUnderlay">
            </div>

            <Menu isOpen={false}>
                <a href="#" onClick={ () => animateScrollTo(document.querySelector('#'))}>
                    <h3>
                        Dein nächster Job?
                    </h3>
                </a>
                <br/>
                <br/>
                <a className="menu-item" href="#" onClick={ () => animateScrollTo(document.querySelector('#citations'))}>
                    <Icon name="comment"/> Was sagen unsere Mitarbeiter
                </a>
                <br/>
                <a className="menu-item" href="#" onClick={ () => animateScrollTo(document.querySelector('#advantages'))}>
                    <Icon name="thumbs up"/> Deine Vorteile bei uns
                </a>
                <br/>
                <a className="menu-item" href="#" onClick={ () => animateScrollTo(document.querySelector('#project'))}>
                    <Icon name="code"/> Aktuelle Projekte
                </a>
                <br/>
                <a className="menu-item" href="#" onClick={ () => animateScrollTo(document.querySelector('#team'))}>
                    <Icon name="id badge"/> Unsere Teams
                </a>
                <br/>
                <a className="menu-item" href="#" onClick={ () => animateScrollTo(document.querySelector('#requirements'))}>
                    <Icon name="clipboard list"/> Was du mitbringen solltest
                </a>
                <br/>
                <a className="menu-item" href="#" onClick={ () => animateScrollTo(document.querySelector('#institute'))}>
                    <Icon name="building"/> Über unser Institut
                </a>
                <br/>
                <a className="menu-item" href="#" onClick={ () => animateScrollTo(document.querySelector('#application'))}>
                    <Icon name="street view"/> Bewerbungsformular
                </a>
            </Menu>
        </div>

    )
}

export default BurgerMenu
