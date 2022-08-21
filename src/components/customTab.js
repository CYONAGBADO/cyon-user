import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const CustomTab = ({ links }) => {
    const [selected, setSelected] = useState(0);

    return (
        <Nav
            fill
            pills
        >
            {
                links.map((link, i) =>
                    <NavItem key={i}>
                        <NavLink
                            active={selected === i}
                            onClick={() => setSelected(i)}
                        >
                            {link}
                        </NavLink>
                    </NavItem>
                )
            }
        </Nav>
    )
}

export default CustomTab;