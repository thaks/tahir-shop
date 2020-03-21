import React from 'react';
import './directory-styles.scss';
import MenuItem from '../menu-item/menuitem';

class Directory extends React.Component {
    state = {
        sections: [{
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
        },
        {
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 1
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 1
        },
        {
            title: 'Womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 1
        },
        {
            title: 'Mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 1
        }],
    };

    constructor() {
        super();
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map( ({id, title, imageUrl, size}) => {
                        return (
                            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default Directory;


